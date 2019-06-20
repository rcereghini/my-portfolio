import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>
          Like what you see?< br/> I am always looking forward to new opportunities! < br/>Please send me a message, and I will get back to you as soon as I can. Thank you!
        </p>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          <li className="fa-phone">
            <a href={`tel:${config.phone}`}>{config.phone}</a>
          </li>

          {config.socialLinks.map(social => {
            console.log('social', social)
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
