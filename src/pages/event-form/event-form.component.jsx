import React, {useState} from 'react';
import axios from 'axios'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component';

import './event-form.styles.scss'

class EventForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      price: '',
      alloted_tickets: '',
      sold_out_tickets: '',
      start_at: '',
      image: null
    }
  }


  fileSelectHandler = event => {
    this.setState({
      image: event.target.files[0]
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const eventData = new FormData();

    eventData.append('image', this.state.image, this.state.image.name )

    axios
      .post("https://bld-events-api.herokuapp.com/api/events", eventData) 
      .then(response => {
        console.log("events response", response.data)
      })
  }
 
  render() {
    return (
      <div className="event-form">
        <h2>Create an event</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
              name='name'
              type='text'
              onChange={this.handleChange}
              value={this.state.name}
              label='name'
              required
          />
          <FormInput
              name='price'
              type='number'
              value={this.state.price}
              onChange={this.handleChange}
              label='price'
              required
          />
           <FormInput
              name='alloted_tickets'
              type='text'
              onChange={this.handleChange}
              value={this.state.alloted_tickets}
              label='alloted tickets'
              required
          />
          <FormInput
              name='sold_out_tickets'
              type='text'
              onChange={this.handleChange}
              value={this.state.sold_out_tickets}
              label='sold-out tickets'
              required
          />
          <FormInput
              name='image'
              type='file'
              onChange={this.fileSelectHandler}
              value={this.state.image}
              required
          />
          <div className="buttons">
            <CustomButton type="submit">Add Event</CustomButton>
          </div>
        </form>
      </div>
    )
  }

}


export default EventForm;