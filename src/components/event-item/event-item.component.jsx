import React from 'react';

import './event-item.styles.scss';

const EventItem = ({ name, imageUrl, start_date, start_time, price }) => {
  return (
    
      <div className="max-w-sm rounded overflow-hidden shadow-lg card-container">
        <img src={imageUrl} alt="" className="w-full"/>
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            {name}
          </div>
          <ul>
            <li>
              <strong>Date: </strong>
              {start_date}
            </li>
            <li>
              <strong>Time: </strong>
              {start_time}
            </li>
            <li>
              <strong>Price: </strong>
              ${price}
            </li>
          </ul>
        </div>
      
      </div>
    
    
  )
}

export default EventItem;
