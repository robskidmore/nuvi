import React, {PropTypes} from 'react'

export const CardLike = ({item, updateItem}) => {
  const handleClick = () => {
    item.activity_likes += 1
    updateItem(item)
  }

  return (
    <div className='chip' onClick={handleClick}>
      Like
      <span>{item.activity_likes}</span>
    </div>
  )
}

CardLike.propTypes = {
  item: PropTypes.object.isRequired,
  updateItem: PropTypes.func.isRequired
}

export default CardLike
