import React from 'react';

import Layout from '../components/Layout';

import avatar from '../assets/images/rcIconMed.jpg';
import pic1 from '../assets/images/languages.jpg';
import pic2 from '../assets/images/frameworks.jpg';
import pic3 from '../assets/images/libraries.jpg';
import pic4 from '../assets/images/devTools.jpg';
import pic5 from '../assets/images/business.jpg';
import pic6 from '../assets/images/marketing.jpg';
import pic7 from '../assets/images/designTools.jpg';
import opin from '../assets/images/opin.png';
import box3 from '../assets/images/box3.png';
import facialRecognition from '../assets/images/facial-recognition-cropped.jpg';
import news from '../assets/images/news-cropped.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          {/* <span className="icon fa-diamond"></span> */}
          <img src={avatar} style={{ borderRadius: '50%' }} alt="avatar" />
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image sectionImage">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Languages</h2>
            <div
              style={{ display: 'flex', flexWrap: 'wrap' }}
              className="skillBlockContainer"
            >
              <p>JavaScript ES6+</p>
              <p>Python</p>
              <p>C#</p>
              <p>SQL</p>
              <p>PHP</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image sectionImage">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Frameworks and Related</h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
              className="skillBlockContainer"
            >
              <p>Node.js</p>
              <p>React</p>
              <p>React Native</p>
              <p>React Native VR</p>
              <p>React Router</p>
              <p>React w/ Redux</p>
              <p>Expo</p>
              <p>Angular.js</p>
              <p>Angular</p>
              <p>Vue</p>
              <p>Vue Router</p>
              <p>Vuex</p>
              <p>Python Django</p>
              <p>Express</p>
              <p>Gatsby.js</p>
              <p>Jest</p>
            </div>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image sectionImage">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Other Libraries and APIs</h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
              className="skillBlockContainer"
            >
              <p>Progress Web Applications</p>
              <p>Web Components</p>
              <p>Custom Events</p>
              <p>Service Workers</p>
              <p>Socket.io</p>
              <p>Moment.js</p>
              <p>Network API</p>
              <p>Axios</p>
              <p>MobX</p>
              <p>Lodash</p>
              <p>JQuery</p>
              <p>JQuery Datatables</p>
              <p>AG Grid</p>
              <p>Highcharts</p>
              <p>Google Maps</p>
              <p>Clarifai</p>
              <p>OpenAI</p>
              <p>Tensorflow</p>
              <p>Machine Learning</p>
              <p>NewsAPI</p>
              <p>WeatherAPI</p>
            </div>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image sectionImage">
            <img src={pic4} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Development Tools</h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
              className="skillBlockContainer"
            >
              <p>MySQL</p>
              <p>PostgreSQL</p>
              <p>Postman</p>
              <p>Filezilla</p>
              <p>Webpack</p>
              <p>npm</p>
              <p>Git</p>
              <p>Netlify</p>
              <p>Heroku</p>
              <p>Unity</p>
              <p>Facebook Authentication</p>
              <p>Facebook Business APK</p>
              <p>Facebook Marketing API</p>
              <p>Firebase Firestore</p>
              <p>Firebase Authentication</p>
              <p>Firebase Hosting</p>
              <p>Firebase Storage</p>
              <p>Google DevTools</p>
              <p>Google Admob</p>
              <p>Lighthouse</p>
              <p>Dialogflow Chatbots</p>
              <p>Salesforce Development</p>
              <p>Salesforce Administrator Support</p>
              <p>Wix</p>
              <p>WordPress</p>
            </div>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image sectionImage">
            <img src={pic5} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Business Tools</h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
              className="skillBlockContainer"
            >
              <p>Zapier</p>
              <p>Excel</p>
              <p>Word</p>
              <p>Powerpoint</p>
              <p>Slack</p>
              <p>Trello</p>
              <p>Wrike</p>
              <p>Monday</p>
              <p>Client Services</p>
            </div>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image sectionImage">
            <img src={pic6} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Marketing</h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
              className="skillBlockContainer"
            >
              <p>Search Engine Optimization</p>
              <p>Mailchimp</p>
              <p>Constant Contact</p>
              <p>RSS Feeds</p>
              <p>Google Admob</p>
              <p>Facebook Ads</p>
              <p>SproutSocial</p>
              <p>Social Media Management</p>
            </div>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image sectionImage">
            <img src={pic7} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Design Tools and Libraries</h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
              className="skillBlockContainer"
            >
              <p>Flexbox</p>
              <p>CSS Grid</p>
              <p>CodePen</p>
              <p>Adobe Photoshop</p>
              <p>Adobe Illustrator</p>
              <p>Adobe InDesign</p>
              <p>Gimp</p>
              <p>Dafont</p>
              <p>Google Fonts</p>
              <p>Draw.io</p>
              <p>Canva</p>
              <p>Bootstrap</p>
              <p>Tachyons</p>
              <p>Foundation</p>
              <p>Materialize</p>
              <p>Glyphicons</p>
              <p>FontAwesome</p>
              <p>Particles.js</p>
              <p>Tilt</p>
            </div>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Project Samples</h2>
          <p>
            Below is sample of projects I am currently working on or have
            completed in the past. Unfortunately, due to an NDA, I cannot show
            samples from{' '}
            <a href={'http://www.petroleumrx.com/'}>my current employer</a>. I
            can, however, give a brief description! At my current, job we
            develop technical solutions and accounting software packages for
            petroleum jobbers, marketers, wholesalers, retailers, and
            distributers. Our team has multiple ongoing projects that utilize
            various technologies including web components, Vue, VueX, Angular,
            several data visualization libraries, and more.
          </p>
          <section className="features">
            <article>
              <a
                href="https://facial-recognition-counter.herokuapp.com/"
                className="image"
              >
                <img src={box3} alt="" />
              </a>
              <h3 className="major">Face Finder</h3>
              <p>
                A facial recognition app using React, Redux, Node.js, Clarifai,
                Tachyons, Particles, Tilt, and Heroku.
              </p>
              <a
                href="https://facial-recognition-counter.herokuapp.com/"
                className="special"
              >
                View Now
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={news} alt="" />
              </a>
              <h3 className="major">News Feed</h3>
              <p>
                A tech, gaming, and comicbook newsfeed built with React, Axios,
                and the News API.
              </p>
              <a href="/#" className="special">
                Get the Scoop
              </a>
            </article>

            <article>
              <a href="/#" className="image">
                <img src={facialRecognition} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={opin} alt="" />
              </a>
              <h3 className="major">OpinAds</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article
              style={
                {
                  // width: '100%', margin: '0 auto'
                }
              }
            >
              <a
                href="/#"
                className="image"
                style={
                  {
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                  }
                }
              >
                {/* <img src={pic6} alt="" /> */}
                <iframe
                  width={'100%'}
                  height={'605'}
                  style={{
                    borderTopRightRadius: '5px',
                    borderTopLeftRadius: '5px',
                  }}
                  src={'https://www.youtube.com/embed/wun_GtPPYPY?rel=0&mute=1'}
                  frameBorder={'0'}
                  allow={
                    'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  }
                  allowFullScreen
                ></iframe>
              </a>
              <h3 className="major">Machine Learning Fun</h3>
              <p>
                Trained this bot using Python, Tensorflow, and OpenAI while
                furthering my understanding of Machine Learning. Additionally, I
                have used machine learning to analyze and categorize images and
                to find the relationships between input and output value sets.
              </p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
          </section>
          {/* <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul> */}
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
