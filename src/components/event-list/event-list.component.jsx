import React from 'react';
import EventItem from '../event-item/event-item.component';

import './event-list.styles.scss';

export const EventList = ({events}) => {
    return (
    <div className="event-list">
      {events.map(event =>
        <EventItem 
          event={event}
          key={event.id}
          name={event.name}
          start_date={event.start_date}
          start_time={event.start_time}
          price={event.price}
          imageUrl={event.image}
        />
      )}
    </div>
    )
}
