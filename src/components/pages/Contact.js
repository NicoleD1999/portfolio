import React, {useRef, useState} from 'react';
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

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      emailjs.sendForm('service_swbi2lm', 'template_f5q6z22', form, 'K0BqNsVgUP9MWXugB')
        .then((result) => {
            console.log(result.text);
            alert('Thank You, your e-mail has been sent')
        }, (error) => {
            console.log(error.text);
        });

    }

    setValidated(true);
  };

  return (
    <div>
      <h1 style={{marginLeft: 20, fontFamily: 'Merriweather serif', fontSize: 45, marginTop: 10}}>Contact</h1>
      <hr></hr>
      <Container>

      <Form noValidate validated={validated} ref={form} onSubmit={handleSubmit} style={{background: '#cce3de', padding: 10, marginTop: 20}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Please enter your name" name="from_name"/>
          <Form.Control.Feedback type="invalid">
            Please provide your name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Please enter your email address" name="user_email"/>
          <Form.Control.Feedback type="invalid">
            Please provide a email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email Contents</Form.Label>
          <Form.Control  required as="textarea" aria-label="With textarea" placeholder="Your message here..." name="message"/>
          <Form.Control.Feedback type="invalid">
            Please insert your name
          </Form.Control.Feedback>
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