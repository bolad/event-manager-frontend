import React from 'react';

import './event-item.styles.scss';

const EventItem = ({ name, imageUrl }) => (
  <div className="event-item">
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="event-details">
      <span className="name">{name}</span>
    </div>
  </div>
);

export default EventItem;
