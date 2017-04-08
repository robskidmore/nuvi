import React, {PropTypes} from 'react'
import FontAwesome from 'react-fontawesome'

import './Filter.css'

const Filter = ({updateFilter}) => {
  const handleClick = (provider) => {
    updateFilter(provider)
  }

  return (
    <div className='filters'>
      <div className='filter all' onClick={() => handleClick('')}>
        <FontAwesome
          name='filter'
        />
        <span className='filter-text'>All</span>
      </div>
      <div className='filter twitter' onClick={() => handleClick('twitter')}>
        <FontAwesome
          name='twitter'
        />
        <span className='filter-text'>Twitter</span>
      </div>
      <div className='filter facebook' onClick={() => handleClick('facebook')}>
        <FontAwesome
          name='facebook'
        />
        <span className='filter-text'>Facebook</span>
      </div>
      <div className='filter tumblr' onClick={() => handleClick('tumblr')}>
        <FontAwesome
          name='tumblr'
        />
        <span className='filter-text'>Tumblr</span>
      </div>
      <div className='filter instagram' onClick={() => handleClick('instagram')}>
        <FontAwesome
          name='instagram'
        />
        <span className='filter-text'>Instagram</span>
      </div>
    </div>
  )
}

Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired
}

export default Filter
