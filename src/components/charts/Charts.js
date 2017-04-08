import React, {PropTypes} from 'react'
import Chart from './chart/Chart'

import './Charts.css'

const Charts = ({data}) => {
  const providers = [
    'twitter', 'facebook', 'instagram', 'tumblr'
  ]

  const structureData = (provider) => {
    const providerData = data.filter((item) => {
      return item.provider === provider
    })
    const newProviderData = {
      provider: provider,
      likes: 0,
      comments: 0,
      shares: 0
    }
    providerData.forEach((item) => {
      newProviderData.likes += item.activity_likes
      newProviderData.comments += item.activity_comments
      newProviderData.shares += item.activity_shares
    })
    return newProviderData
  }

  const newData = providers.map((provider) => structureData(provider))

  return (
    <div className='card charts'>
      <h5>Activity by Social Network</h5>
      <p>Likes | Comments | Shares</p>
      <Chart data={newData} />
    </div>
  )
}

Charts.propTypes = {
  data: PropTypes.array.isRequired
}

export default Charts
