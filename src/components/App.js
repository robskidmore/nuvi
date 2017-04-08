import React, { Component } from 'react'
import 'whatwg-fetch'

import Header from './header/Header'
import Loading from './loading/Loading'
import Feed from './feed/Feed'
import Charts from './charts/Charts'

import './normalize.css'
import './App.css'

class App extends Component {

  state = {
    loading: true,
    data: [],
    filter: ''
  }

  componentDidMount() {
    fetch('https://nuvi-challenge.herokuapp.com/activities')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          data,
          loading: false
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  updateFilter = (provider) => {
    this.setState({
      filter: provider
    })
  }

  filterData = () => {
    if(this.state.filter === '') {
      return this.state.data
    }
    return this.state.data.filter((item) => {
      return item.provider === this.state.filter
    })
  }

  updateItem = (item) => {
    const data = [...this.state.data, ...item]
    // const newState = {...this.state, ...data}
    this.setState({data})
  }

  render () {
    return (
      <div className='App'>
        <Header />
        {(this.state.loading)
         ? <Loading />
         : <div className='container'>
             <Feed
               updateItem={this.updateItem}
               updateFilter={this.updateFilter}
               data={this.filterData(this.state.data)} />
             <Charts data={this.state.data}/>
           </div>
        }
      </div>
    )
  }
}

export default App
