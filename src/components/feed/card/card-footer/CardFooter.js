import React, {PropTypes} from 'react'
import CardShare from './CardShare'
import CardLike from './CardLike'
import CardComment from './CardComment'

const CardFooter = ({item, updateItem}) => {
  return (
    <div className='card-footer'>
      <CardLike item={item} updateItem={updateItem} />
      <CardComment item={item} updateItem={updateItem} />
      <CardShare item={item} updateItem={updateItem} />
    </div>
  )
}

CardShare.propTypes = {
  item: PropTypes.object.isRequired,
  updateItem: PropTypes.func.isRequired
}

export default CardFooter
