import React, {PropTypes} from 'react'
import FontAwesome from 'react-fontawesome'
import CardFooter from './card-footer/CardFooter'

import './Card.css'

class Card extends React.Component {

  state = {
    toggleComments: false
  }

  render () {
    return (
      <div className={`card ${this.props.item.provider}`}>
        <div className='card-header'>
          <FontAwesome
            name={this.props.item.provider}
            size='2x'
          />
          <span className='posted'>Posted on: {this.props.item.activity_date}</span>
        </div>
        <div className='card-body'>
          <div className='card-actor'>
            <a href={this.props.item.actor_url}><img src={this.props.item.actor_avator} alt={this.props.item.actor_username} /></a>
            <a href={this.props.item.actor_url}>{this.props.item.actor_name}</a>
          </div>
          <div className='card-content'>
            <div className='card-content-inner'>
              {(this.props.item.activity_attachment_type === 'image/jpeg')
                ? <img alt='' src={this.props.item.activity_message} />
                : this.props.item.activity_message
              }
            </div>

            <CardFooter item={this.props.item} updateItem={this.props.updateItem} />
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  updateItem: PropTypes.func.isRequired
}

export default Card
