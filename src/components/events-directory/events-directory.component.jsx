import React from 'react';

import EventItem from '../event-item/event-item.component';

import './events-directory.styles.scss';

class EventsDirectory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Music',
          id: 1,

        },
        {
          title: 'Sports',
          id: 2,
        },
        {
          title: 'Education',
          id: 1,
        },
        {
          title: 'Arts',
          id: 1,
        },
        {
          title: 'Technology',
          id: 1,
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <EventItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default EventsDirectory;