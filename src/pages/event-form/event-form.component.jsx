import React, { useState } from 'react'
import eventService from '../../services/event-service'

import './event-form.styles.scss'

const EventForm = ({createEvent}) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [start_date, setStartDate] = useState('')
  const [start_time, setStartTime] = useState('')
  const [alloted_tickets, setAllotedTickets] = useState('')
  const [sold_out_tickets, setSoldOutTickets] = useState('')

  const [eventItems, setEventItems] = useState([]);

  const addEvent = async (e, name, price, start_date, start_time, alloted_tickets, sold_out_tickets) => {
    try {
      e.preventDefault()

      const eventObject = {
        name: name,
        price: price,
        start_date: start_date,
        start_time: start_time,
        alloted_tickets: alloted_tickets,
        sold_out_tickets: sold_out_tickets,
      }

      const response = await eventService.createEvent(eventObject)
      console.log(response)

      setEventItems(eventItems.concat(response))
      setName('')
      setPrice('')
      setStartDate('')
      setStartTime('')
      setAllotedTickets('')
      setSoldOutTickets('')
    }
    catch (exception) {
      console.log(exception)
    }
  }

  return (
    <div className="event-form">
      <h2>Create an event</h2>

      <form onSubmit={addEvent}>
        <div>
          <label htmlFor="event_name">
            <span>Name of event:</span>
            <input 
              type="text" 
              value={name} 
              id="event_name" 
              onChange={({ target }) => {
                setName(target.value)
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="event_date">
            <span>Date:</span>
            <input 
              type="text" 
              value={start_date} 
              id="event_date" 
              onChange={({ target }) => {
                setStartDate(target.value)
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="event_time">
            <span>Time:</span>
            <input 
              type="text" 
              value={start_time} 
              id="event_time" 
              onChange={({ target }) => {
                setStartTime(target.value)
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="price">
            <span>Price:</span>
            <input 
              type="number" 
              value={price} 
              id="alloted_tickets" 
              onChange={({ target }) => {
                setPrice(target.value)
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="alloted_tickets">
            <span>Alloted Ticets:</span>
            <input 
              type="number" 
              value={alloted_tickets} 
              id="alloted_tickets" 
              onChange={({ target }) => {
                setAllotedTickets(target.value)
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="sold_out_tickets">
            <span>Ticets Sold:</span>
            <input 
              type="number" 
              value={sold_out_tickets} 
              id="sold_out_tickets" 
              onChange={({ target }) => {
                setSoldOutTickets(target.value)
              }}
            />
          </label>
        </div>

        <div className="form-actions">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )

}

export default EventForm;