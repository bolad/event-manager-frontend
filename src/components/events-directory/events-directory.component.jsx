import React from 'react';

import './events-directory.styles.scss';

const EventsDirectory = () => {

  return (
    <div className="directory-menu">
        <div style={
          {width: 'calc((100% - 6rem) / 2)'}
        }>
            <h3 className="heading-tertiary u-margin-bottom-small">
                All your favourite events on one platform. Awesome!!!
            </h3>
            <p className="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Magnam, nesciunt asperiores. Iusto mollitia nesciunt aut, 
                quia distinctio labore quis nisi ut necessitatibus ipsam delectus 
                error. Odio fugiat qui deserunt reprehenderit?
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
            <div className="composition">
                <img src="https://i.ibb.co/17Ybhzy/music2.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
                <img src="https://i.ibb.co/9Wx6FWD/sports.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
                <img src="https://i.ibb.co/D9L07MX/tech.jpg" alt="Photo 3" className="composition__photo composition__photo--p3" />
                <img src="https://i.ibb.co/9Vx5CfW/enoch-appiah-jr-k-Yrqetng-2-U-unsplash.jpg" alt="Photo 3" className="composition__photo composition__photo--p4" />
                <img src="https://i.ibb.co/yq3Qr2D/mike-von-Osjura-Wm-Xm-U-unsplash.jpg" alt="Photo 3" className="composition__photo composition__photo--p5" />
            </div>
        </div>
    </div>

  );

}

export default EventsDirectory;