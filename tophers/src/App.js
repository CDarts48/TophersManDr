import React from 'react';
import './App.css';
import CookieConsent from "react-cookie-consent";
import MyCarousel from './components/Carousel'; // Updated import

const importAll = (r) => r.keys().map((item) => ({ workpics: r(item).default }));
const images = importAll(require.context('../public/workpics', false, /\.(png|jpe?g|svg)$/));

const App = () => {
  return (
    <div>
      <header className="header">Topher's Maintenance and Repair</header>
      <section id="section1">
        <div className="half-width left-background"></div>
        <div className="half-width black-background">
          <p className="quality-service">Quality Service</p>
          <p className="subtext">Professional handyman for residential and commercial properties.</p>
          <a href="#section5">
            <button className="contact-button">Contact Me</button>
          </a>
        </div>
      </section>
      <section id="section2">
        <div className="box">
          <h2>Expert Handyman Services</h2>
          <p>As a highly skilled and experienced handyman, I have established strong partnerships with numerous satisfied property management companies. I excel in a wide range of repair and maintenance tasks, including painting, flooring, drywall, and more. Utilizing only the finest materials and tools, I ensure top-notch workmanship and enduring results.</p>
        </div>
        <div className="box">
          <h2>Flexible Scheduling</h2>
          <p>I understand that our clients have busy schedules, which is why we offer flexible scheduling options. I work around your schedule to ensure minimal disruption to your daily routine. Whether you need us on the weekends or after hours, we are here to accommodate your needs.</p>
        </div>
        <div className="box">
          <h2>Competitive Pricing</h2>
          <p>I believe in providing affordable services without compromising on quality. I offer competitive pricing and always provide upfront estimates so you know exactly what to expect. I strive to deliver exceptional service that meets your needs and budget.</p>
        </div>
      </section>
      <section id="section3">
        <h1 className="centered-title">Handyman Services in Action</h1>
        <div id="slideshow">
          <MyCarousel images={images} />
        </div>
      </section>
      <section id="section4">
  <h1 className="centered-title">Satisfied Clients</h1>
  <div className="review-box-container">
    <div className="review-box">
      <img src="path-to-image1" alt="Client 1" />
      <p>★★★★★</p>
      <p>Review from client 1...</p>
    </div>
    <div className="review-box">
      <img src="path-to-image2" alt="Client 2" />
      <p>★★★★☆</p>
      <p>Review from client 2...</p>
    </div>
    <div className="review-box">
      <img src="path-to-image3" alt="Client 3" />
      <p>★★★★★</p>
      <p>Review from client 3...</p>
    </div>
  </div>
      </section>
      <section id="section5">
        <div className="form-container">
          <h2>How Can I Help?</h2>
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="address">Address (Street, City, Zip Code)</label>
            <input type="text" id="address" name="address" />

            <label htmlFor="needs">What are your needs?</label>
            <textarea id="needs" name="needs" maxLength="850"></textarea>

            <label htmlFor="files">Attach Files</label>
            <input type="file" id="files" name="files" multiple />

            <input type="submit" value="SEND" />
          </form>
        </div>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </section>
      <section id="section6">
        <iframe
          title="Google Map of Westminster, Colorado"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d24493.000973991802!2d-105.0478964!3d39.8826343!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1715659212956!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <footer className="footer">Copyright © 2024 Topher's Maintenance and Repair - All Rights Reserved.</footer>
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="myAwesomeCookieName2"
        expires={150}
      >
        This website uses cookies. We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.
      </CookieConsent>
    </div>
  );
}

export default App;