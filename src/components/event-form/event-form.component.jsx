import React, {useState} from 'react';
import axios from 'axios'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import './event-form.styles.scss'

const EventForm = () => {
  const [formAttributes, setFormAttributes] = useState({
    name: '',
    price: '',
    alloted_tickets: '',
    sold_out_tickets: '',
    start_at: '',
    image: null
  })

  const { name, price, alloted_tickets, sold_out_tickets, start_at, image } = formAttributes;

  return (
    <div className="event-form">
      <h2>Create an event</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
            name='name'
            type='text'
            handleChange={handleChange}
            value={name}
            label='name'
            required
        />
        <FormInput
            name='price'
            type='number'
            value={price}
            handleChange={handleChange}
            label='price'
            required
        />
         <FormInput
            name='alloted_tickets'
            type='text'
            handleChange={handleChange}
            value={alloted_tickets}
            label='alloted_tickets'
            required
        />
        <FormInput
            name='sold_out_tickets'
            type='text'
            handleChange={handleChange}
            value={sold_out_tickets}
            label='sold_out_tickets'
            required
        />
        <FormInput
            name='image'
            type='file'
            handleChange={handleChange}
            value={image}
            label='cover photo'
            required
        />
        <div className="buttons">
          <CustomButton type="submit">Add Event</CustomButton>
        </div>
      </form>
    </div>
  )
}