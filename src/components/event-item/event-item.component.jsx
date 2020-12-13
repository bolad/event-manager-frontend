import React, { useContext } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import './event-item.styles.scss';

const EventItem = ({event, imageUrl, addItem}) => {
  const { name, price, start_date, start_time } = event;

  return (
    <div className="flex h-full bg-white rounded overflow-hidden shadow-lg event-item-container">
      <div className="w-full md:w-1/3 rounded-t">
        <img src={imageUrl} alt="" className="w-full event-img" />
      </div>
      <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink event-item-props">
        <h1 className="name">{name}</h1>
        <span className="prop">Date: {start_date}</span>
        <span className="prop">Time: {start_time}</span>
        <span className="prop">Rate: ${price}</span>
      </div>
      <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
        <div className="event-description">
          <span>In egestas erat imperdiet sed euismod. Non nisi est sit amet facilisis magna. Aliquet nec ullamcorper sit amet risus nullam. Sit amet facilisis magna etiam tempor orci eu. Praesent semper feugiat nibh sed pulvinar proin gravida.</span>
        </div>
   
        <div className="add-cart-btn">
          <CustomButton onClick={() => addItem(event)}>Add To Cart</CustomButton>
        </div>
        
      </div>
    </div> 
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: event => dispatch(addItem(event))
})

export default connect(null, mapDispatchToProps)(EventItem);
