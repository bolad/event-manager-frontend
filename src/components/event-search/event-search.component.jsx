import React from 'react';
import './event-search.styles.scss';

export const EventSearch = ({ placeholder, handleChange }) => (
    <input 
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
)