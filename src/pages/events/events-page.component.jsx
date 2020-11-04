import React, { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import eventService from '../../services/event-service';
import { EventList } from '../../components/event-list/event-list.component'
import { EventSearch } from '../../components/event-search/event-search.component';
import Event from '../event/event.component';

import './events-page.styles.scss'

const EventsPage = () => {
  const [events, setEvents] = useState([])
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    eventService
      .getAll()
      .then(events => {
        setEvents(events)
      })
  }, [])

  const handleChange = e => {
    setSearchField(e.target.value)
  }

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="events-page">
      <EventSearch 
        placeholder="search for event"
        handleChange={handleChange}
      />
      <EventList events={filteredEvents}/>
    </div>
  )

}

export default EventsPage;