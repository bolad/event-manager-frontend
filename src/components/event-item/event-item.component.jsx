import React, { useContext } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { CartContext } from '../../providers/cart/cart.provider';

import './event-item.styles.scss';

const EventItem = ({event, imageUrl}) => {
  const { name, price, start_date, start_time } = event;
  const { addItem } = useContext(CartContext);

  return (
    <div className="flex h-full bg-white rounded overflow-hidden shadow-lg event-item-container">
      <div className="w-full md:w-1/3 rounded-t">
        <img src={imageUrl} alt="" className="w-full event-img" />
      </div>
      <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink event-item-props">
        <h1 className="name">{name}</h1>
        <span className="prop">Date: {start_date}</span>
        <span className="prop">Time: {start_time}</span>
        <span className="prop">Rate: {price} PLN</span>
      </div>
      <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
        <div className="event-description">
          <span>In egestas erat imperdiet sed euismod. Non nisi est sit amet facilisis magna. Aliquet nec ullamcorper sit amet risus nullam. Sit amet facilisis magna etiam tempor orci eu. Praesent semper feugiat nibh sed pulvinar proin gravida. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Tellus pellentesque eu tincidunt tortor aliquam nulla.</span>
        </div>
   
        <div className="add-cart-btn">
          <CustomButton onClick={() => addItem(event)}>Add To Cart</CustomButton>
        </div>
      </div>
    </div> 
  )
}

export default EventItem;
