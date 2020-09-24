import React from 'react'
import EventsDirectory from '../../components/events-directory/events-directory.component';

import './homepage.styles.scss'

const HomePage = () => (
  <div className="homepage">
    <EventsDirectory />
  </div>
);

export default HomePage;