import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import  Form  from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';

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
      <h1 style={{marginLeft: 20, fontFamily: 'Merriweather serif', fontSize: 45, marginTop: 10}}>Contact</h1>
      <hr></hr>
      <Container>

      <Form ref={form} onSubmit={sendEmail} style={{background: '#cce3de', padding: 10, marginTop: 20}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Please enter your name" name="from_name"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Please enter your email address" name="user_email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email Contents</Form.Label>
          <Form.Control  as="textarea" aria-label="With textarea" placeholder="Your message here..." name="message"/>
        </Form.Group>
        <Button style={{background: '#6b9080', borderColor:'#6b9080'}} type="submit" value="Send">
          Send
        </Button>
      </Form>
      </Container>
      {/* <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
    </div>
  );
}