import React from 'react';

import './event-item.styles.scss';

const EventItem = ({ title ,imageUrl }) => (
  <div className="event-item">
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
    <h1 className="title">{ title }</h1>
    <span className="subtitle">CHECK OUT EVENTS</span>
    </div>
    
  </div>
);

export default EventItem;
