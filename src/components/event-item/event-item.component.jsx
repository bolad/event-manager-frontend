import React from 'react';

import './event-item.styles.scss';

const EventItem = ({ item }) => {

  const { name, price, alloted_tickets, start_date, start_time, imageUrl } = item;

  return (
    <div className="event-item">
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="event-footer">
        <h2 className="name">{name}</h2>
        <span className="start-date">Date: {start_date}</span>
        <span className="start-time">Time: {start_time}</span>
        <span className="price">${price}</span>
        <span className="alloted-tickets">Tickets Available: {alloted_tickets}</span>
      </div>
    </div>
  )
  
};

export default EventItem;
