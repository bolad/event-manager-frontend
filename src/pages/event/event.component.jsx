import React, {useState, useEffect } from 'react'
//import eventService from '../../services/event-service';

const Event = () => {

  // const [event, setEvent] = useState({})

  // useEffect(() => {
  //   eventService
  //     .getEvent()
  //     .then(event => {
  //       console.log(event)
  //       setEvent(event)
  //     })
  //     .catch( data => console.log('Error', data) )
  // }, [])

    return (
      <div>
        <h2>An event lives here</h2>
      </div>
    ) 
  }

export default Event;