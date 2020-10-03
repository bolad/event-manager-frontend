import React, { useState, useEffect } from 'react';
import eventService from '../../services/event-service';

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
    <div>
      {events.map(event =>
        <li key={event.id}>
          {event.name}
        </li>
      )}
    </div>
  )

}

export default EventsPage;