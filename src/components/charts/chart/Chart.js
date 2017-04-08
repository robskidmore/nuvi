import {PropTypes} from 'react'
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'

import './Chart.css'

const Chart = ({data}) => {
  const margin = {top: 24, right: 24, bottom: 36, left: 48},
    width = 628 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom

  const x0 = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1)

  const x1 = d3.scaleBand()
    .padding(0.1)

  const y = d3.scaleLinear()
    .rangeRound([height, 0])

  const keys = d3.keys(data[0]).filter((key) => (key !== 'provider'))

  data.forEach((d) => {
    d.values = keys.map((name) => ({name: name, value: +d[name]}))
  })

  x0.domain(data.map(d => d.provider))
  x1.domain(keys).range([0, x0.bandwidth()])
  y.domain([0, d3.max(data, (d) => (d3.max(d.values, (d) => (d.value))))])

  const node = ReactFauxDOM.createElement('svg')

  const svg = d3.select(node)
    .attr('width', 628)
    .attr('height', 300)

  const g = svg.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  const provider = g.selectAll('.provider')
    .data(data)
      .enter().append('g')
      .attr('class', d => 'provider-' + d.provider)
      .attr('transform', d => `translate(${x0(d.provider)}, 0)`)

  provider.selectAll('rect')
    .data(d => d.values)
    .enter().append('rect')
    .attr('width', x1.bandwidth())
    .attr('x', d => x1(d.name))
    .attr('y', d => y(d.value))
    .attr('height', d => height - y(d.value))

  g.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(x0))

  g.append('g')
    .call(d3.axisLeft(y)
    .ticks(null, 's'))

  return node.toReact()
}

Chart.propTypes = {
  data: PropTypes.array.isRequired
}

export default Chart
