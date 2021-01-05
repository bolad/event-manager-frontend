import React from 'react'
import EventsDirectory from '../../components/events-directory/events-directory.component';

import './homepage.styles.scss'

const HomePage = () => (
  <main className="mb-auto .-my-5 h-10">
    <div className="homepage">
      <EventsDirectory />
    </div>
  </main>
 
);

export default HomePage;