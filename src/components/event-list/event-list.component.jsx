import React from 'react';
import EventItem from '../event-item/event-item.component';

import './event-list.styles.scss';

export const EventList = ({events}) => {
    return (
    <div className="event-list">
      {events.map(event =>
        <EventItem 
          key={event.id}
          name={event.name}
          price={event.price}
          imageUrl={event.image.url}
        />
      )}
    </div>
    )
}
