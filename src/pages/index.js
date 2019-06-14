import React from 'react';

import Layout from '../components/Layout';

import avatar from '../assets/images/rcIconMed.jpg';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

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
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Languages</h2>
            <p>
              <div style={{ display: 'flex' }} className="skillBlockContainer">
                <p>JavaScript ES6+</p>
                <p>Python</p>
                <p>C#</p>
                <p>SQL</p>
                <p>PHP</p>
                <p>HTML</p>
                <p>CSS</p>
              </div>
            </p>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
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
            </div>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
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
              <p>Network API</p>
              <p>Jest</p>
              <p>Axios</p>
              <p>MobX</p>
              <p>Lodash</p>
              <p>JQuery</p>
              <p>JQuery Datatables</p>
              <p>AG Grid</p>
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
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Tools</h2>
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
              <p>Google Maps</p>
              <p>Google Admob</p>
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
          <a href="/#" className="image">
            <img src={pic3} alt="" />
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
          <a href="/#" className="image">
            <img src={pic2} alt="" />
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
          <a href="/#" className="image">
            <img src={pic3} alt="" />
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
              <p>Adobe Photoshop</p>
              <p>Adobe Illustrator</p>
              <p>Adobe InDesign</p>
              <p>Bootstrap</p>
              <p>Tachyons</p>
              <p>Materialize</p>
            </div>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Project Samples</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
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
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
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
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
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
                <img src={pic7} alt="" />
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
