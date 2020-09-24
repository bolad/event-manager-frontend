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
          imageUrl: 'https://i.ibb.co/17Ybhzy/music2.jpg',
          id: 1,
        },
        {
          title: 'Sports',
          imageUrl: 'https://i.ibb.co/9Wx6FWD/sports.jpg',
          id: 2,
        },
        {
          title: 'Education',
          imageUrl: 'https://i.ibb.co/KqrJS40/doug-linstedt-j-EEYZsaxb-H4-unsplash.jpg',
          id: 1,
        },
        {
          title: 'Arts',
          imageUrl: 'https://i.ibb.co/yq3Qr2D/mike-von-Osjura-Wm-Xm-U-unsplash.jpg',
          id: 1,
        },
        {
          title: 'Technology',
          imageUrl: 'https://i.ibb.co/D9L07MX/tech.jpg',
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