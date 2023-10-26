import React from 'react'


import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
function Main() {
  return (
    <main>
      <div className="contact-wrapper" style={{ padding: '50px' }}>
        <h1>Contact Me</h1>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                required
              />
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

const Contact = () => {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default Contact