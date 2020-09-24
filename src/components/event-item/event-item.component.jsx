import React from 'react';

import './event-item.styles.scss';

const EventItem = ({ title }) => (
  <div className="event-item">
    <div className="content">
    <h1 className="title">{ title }</h1>
    <span className="subtitle">CHECK OUT EVENTS</span>
    </div>
    
  </div>
);

export default EventItem;
