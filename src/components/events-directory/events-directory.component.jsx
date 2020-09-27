import React from 'react';

import EventItem from '../event-item/event-item.component';
import './events-directory.styles.scss';

const EventsDirectory = () => {
  
  // constructor() {
  //   super();

  //   this.state = {
  //     sections: [
  //       {
  //         title: 'Music',
  //         imageUrl: 'https://i.ibb.co/17Ybhzy/music2.jpg',
  //         id: 1,
  //       },
  //       {
  //         title: 'Sports',
  //         imageUrl: 'https://i.ibb.co/9Wx6FWD/sports.jpg',
  //         id: 2,
  //       },
  //       {
  //         title: 'Education',
  //         imageUrl: 'https://i.ibb.co/KqrJS40/doug-linstedt-j-EEYZsaxb-H4-unsplash.jpg',
  //         id: 1,
  //       },
  //       {
  //         title: 'Arts',
  //         imageUrl: 'https://i.ibb.co/yq3Qr2D/mike-von-Osjura-Wm-Xm-U-unsplash.jpg',
  //         id: 1,
  //       },
  //       {
  //         title: 'Technology',
  //         imageUrl: 'https://i.ibb.co/D9L07MX/tech.jpg',
  //         id: 1,
  //       }
  //     ]
  //   };
  // }


  return (
    <div class="directory-menu">
        <div style={
          {width: 'calc((100% - 6rem) / 2)'}
        }>
            <h3 class="heading-tertiary u-margin-bottom-small">
                You are going to fall in love with nature
            </h3>
            <p class="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, nesciunt asperiores. Iusto mollitia nesciunt aut, quia distinctio labore quis nisi ut necessitatibus ipsam delectus error. Odio fugiat qui deserunt reprehenderit?
            </p>
            <h3 class="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
            </h3>
            <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eaque eligendi quasi perferendis harum reiciendis minus 
                temporibus in at est, doloremque et vel, aut debitis, vitae 
                ducimus earum illum pariatur amet?
            </p>

            <a href="#" class="btn-text">Learn more &rarr;</a>
        </div>
        <div style={
          {width: 'calc((100% - 6rem) / 2)'}
        }>
            <div class="composition">
                <img src="https://i.ibb.co/17Ybhzy/music2.jpg" alt="Photo 1" class="composition__photo composition__photo--p1" />
                <img src="https://i.ibb.co/9Wx6FWD/sports.jpg" alt="Photo 2" class="composition__photo composition__photo--p2" />
                <img src="https://i.ibb.co/D9L07MX/tech.jpg" alt="Photo 3" class="composition__photo composition__photo--p3" />
                <img src="https://i.ibb.co/KqrJS40/doug-linstedt-j-EEYZsaxb-H4-unsplash.jpg" alt="Photo 3" class="composition__photo composition__photo--p4" />
                <img src="https://i.ibb.co/yq3Qr2D/mike-von-Osjura-Wm-Xm-U-unsplash.jpg" alt="Photo 3" class="composition__photo composition__photo--p5" />
            </div>
        </div>
    </div>

  );

}

export default EventsDirectory;