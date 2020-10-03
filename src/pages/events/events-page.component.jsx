import React, { useState, useEffect } from 'react';
import eventService from '../../services/event-service';
import EventItem from '../../components/event-item/event-item.component'

import './events-page.styles.scss'

const EventsPage = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    eventService
      .getAll()
      .then(events => {
        setEvents(events)
      })
  }, [])

  return (
    <div events-preview>
      {events.map(event =>
        <EventItem 
          key={event.id}
          name={event.name}
          start_date={event.start_date}
          start_time={event.start_time}
          price={event.price}
          alloted_tickets={event.alloted_tickets}
          imageUrl={event.image.url}
        />
      )}
    </div>
  )

}

export default EventsPage;