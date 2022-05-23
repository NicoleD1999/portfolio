import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_swbi2lm', 'template_f5q6z22', form.current, 'K0BqNsVgUP9MWXugB')
      .then((result) => {
          console.log(result.text);
          alert('Thank You, your e-mail has been sent')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
}