import React from 'react';
import './Styles.css';
import photo from './images/self-outline-background.jpg';
// image from: https://static.vecteezy.com/system/resources/previews/021/194/434/original/woman-holding-camera-line-drawing-vector.jpg

function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="AboutContent">
        <div className="aboutTextDiv">
          <h1 className="aboutText">
            Hi
            <span className="wave">👋🏼</span>
          </h1>
          <h2 className="aboutText">
            I’m Urvi, a software developer from Canada.
            <br />
            I love to take photos in my spare time and
            this website is a collection of some of my favorites!
            <br />
            <br />
            If you’d like to get in touch, send me an email at
            {' '}
            <a href="mailto:capturedinlight23@gmail.com">capturedinlight23@gmail.com</a>
            .
          </h2>
        </div>
        <div className="aboutPictureDiv">
          <img
            className="aboutPicture"
            src={photo}
            alt="Website owner"
          />
        </div>
      </div>
      <p className="copyright">Copyright &copy; 2023 Urvi Patel</p>
    </div>
  );
}

export default AboutPage;
