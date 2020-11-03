import React from 'react';
import EventItem from '../event-item/event-item.component';
import { Link } from 'react-router-dom';

import './event-list.styles.scss';

export const EventList = ({events}) => {
    return (
    <div className="event-list">
      {events.map(event =>
      <Link to={`/events/${event.id}`}>
        <EventItem 
          key={event.id}
          name={event.name}
          price={event.price}
          imageUrl={event.image.url}
        />
        </Link>
      )}
    </div>
    )
}
