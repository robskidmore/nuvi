import React, {PropTypes} from 'react'

export const CardShare = ({item, updateItem}) => {
  const handleClick = () => {
    item.activity_shares += 1
    updateItem(item)
  }
  return (
    <div className='chip' onClick={handleClick}>
      Share
      <span>{item.activity_shares}</span>
    </div>
  )
}

CardShare.propTypes = {
  item: PropTypes.object.isRequired,
  updateItem: PropTypes.func.isRequired
}

export default CardShare
