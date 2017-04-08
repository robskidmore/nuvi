import React from 'react'
import FontAwesome from 'react-fontawesome'

import './Loading.css'

const Loading = (props) => (
  <div className='loading'>
    <FontAwesome
      className='loading-icon'
      name='gear'
      spin />
  </div>
)

export default Loading
