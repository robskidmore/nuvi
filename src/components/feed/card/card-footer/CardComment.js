import React, {PropTypes} from 'react'

export const CardComment = ({item, updateItem}) => {
  const handleClick = () => {
    item.activity_comments += 1
    updateItem(item)
  }

  return (
    <div className='chip' onClick={handleClick}>
      Comment
      <span>{item.activity_comments}</span>
    </div>
  )
}

CardComment.propTypes = {
  item: PropTypes.object.isRequired,
  updateItem: PropTypes.func.isRequired
}

export default CardComment
