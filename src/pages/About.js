import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import mma from '../assets/images/mma.jpg';
import elliot from '../assets/images/elliot.jpg';
import drawing from '../assets/images/drawing.jpg';
import hike from '../assets/images/hike.jpg';
import piano from '../assets/images/piano.jpg';
import ragnar from '../assets/images/ragnar.jpg';
import kids from '../assets/images/kids.jpg';
import comicon from '../assets/images/comicon.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>About Me</h2>
          {/* <p>"Wonderful quote" - Some wise person.</p> */}
          <p>
            I was born and raised in Arizona and graduated from Arizona State
            University in 2012. Originally going to school for Computer
            Sciences, I changed course and graduated with a degree in English
            Literature/Philosophy. Since then I've dabbled in creative writing,
            teaching, digital marketing, before turning my hobby of game
            development into a full-time passion for programming and web
            development.
          </p>
          <p>I have a beautiful wife, two wonderful boys, a dog, and a cat.</p>
          <p>
            I am currently working at PetroleumRx as a Front-End developer. I am
            also helping develop OpinAds, a lead gen solution for real estate
            agents. In whatever free-time remains, I enjoy learning about
            machine learning, chipping away at projects, and game development.
          </p>
        </div>
      </header>

      <div className="wrapper">
        {/* <div className="inner">
          <h3 className="major">Bio</h3>
        </div> */}
        <div className="inner">
          <h3 className="major">Gallery</h3>
          {/* <div className="gallery"> */}
          <section className="gallery">
            <article>
              <span className="image">
                <img src={mma} alt="" />
              </span>
              <h3 className="major">Face Finder</h3>
              <p>
                A facial recognition app using React, Redux, Node.js, Clarifai,
                Tachyons, Particles, Tilt, and Heroku.
              </p>
            </article>
            <article>
              <span className="image">
                <img src={elliot} alt="" />
              </span>
              <h3 className="major">Face Finder</h3>
              <p>
                A facial recognition app using React, Redux, Node.js, Clarifai,
                Tachyons, Particles, Tilt, and Heroku.
              </p>
            </article>
            <article>
              <span className="image">
                <img src={drawing} alt="" />
              </span>
              <h3 className="major">Face Finder</h3>
              <p>
                A facial recognition app using React, Redux, Node.js, Clarifai,
                Tachyons, Particles, Tilt, and Heroku.
              </p>
            </article>
            <article>
              <span className="image">
                <img src={hike} alt="" />
              </span>
              <h3 className="major">Face Finder</h3>
              <p>
                A facial recognition app using React, Redux, Node.js, Clarifai,
                Tachyons, Particles, Tilt, and Heroku.
              </p>
            </article>
            <article>
              <span className="image">
                <img src={piano} alt="" />
              </span>
              <h3 className="major">Face Finder</h3>
              <p>
                A facial recognition app using React, Redux, Node.js, Clarifai,
                Tachyons, Particles, Tilt, and Heroku.
              </p>
            </article>
            <article>
              <span className="image">
                <img src={ragnar} alt="" />
              </span>
              <h3 className="major">Face Finder</h3>
              <p>
                A facial recognition app using React, Redux, Node.js, Clarifai,
                Tachyons, Particles, Tilt, and Heroku.
              </p>
            </article>
            <article>
              <span className="image">
                <img src={kids} alt="" />
              </span>
              <h3 className="major">Face Finder</h3>
              <p>
                A facial recognition app using React, Redux, Node.js, Clarifai,
                Tachyons, Particles, Tilt, and Heroku.
              </p>
            </article>
            <article>
              <span className="image">
                <img src={comicon} alt="" />
              </span>
              <h3 className="major">Face Finder</h3>
              <p>
                A facial recognition app using React, Redux, Node.js, Clarifai,
                Tachyons, Particles, Tilt, and Heroku.
              </p>
            </article>
          </section>
          {/* </div> */}
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
