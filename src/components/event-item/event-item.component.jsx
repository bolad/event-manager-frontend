import React from 'react';

import './event-item.styles.scss';

const EventItem = ({ name, imageUrl, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg card-container">
      <img src={imageUrl} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="event-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
      </div>
    </div> 
  )
}

export default EventItem;
