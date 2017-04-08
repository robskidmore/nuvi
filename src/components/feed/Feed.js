import React, {PropTypes} from 'react'

import Card from './card/Card'
import Filter from './filter/Filter'

import './Feed.css'

const Feed = ({data, updateFilter, updateItem}) => {
  return (
    <div className='feed'>
      <Filter updateFilter={updateFilter} />
      {data.map((item, index) => (
        <Card key={index} item={item} updateItem={updateItem} />
      ))}
    </div>
  )
}

Feed.propTypes = {
  data: PropTypes.array.isRequired,
  updateFilter: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired
}

export default Feed
