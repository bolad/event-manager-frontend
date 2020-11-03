import React from 'react';

import './event-item.styles.scss';

const EventItem = ({ name, imageUrl, price }) => {
  return (
    <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
      <div className="w-full md:w-1/3 rounded-t">
        <img src={imageUrl} alt="" className="w-full event-img" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col flex-grow flex-shrink">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div> 
  )
}

export default EventItem;
