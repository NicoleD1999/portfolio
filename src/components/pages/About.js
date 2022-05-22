import React from 'react';
import portfolioImage from '../../assets/6EA60512-B97F-4594-AB25-7BFC406E266E.jpeg'
import Button from 'react-bootstrap/Button';

const styles = {
    image: {
        width: 400,
        height: 400,
        borderRadius: 200,
        position: 'relative',
        top: 5,
        marginRight: 20,
        float: 'right',
    },
    paragraph: {
        marginRight: 500,
        marginLeft: 40,
        fontSize: 25,
    },
    head: {
        marginLeft: 20,
    },
}


export default function About() {

  return (
    <div style={{color: '#0a0908', marginLeft:10}}>
      <h1 style={{marginLeft: 10}}>About Me</h1>
      <hr></hr>
      <img src={portfolioImage} alt='portfolio' style={styles.image}/>
      <div style={styles.head}>
        <h1>Ozzie Dahl</h1>
        <h4>Jr. Web Developer</h4>
     </div>
      <p style={styles.paragraph}>
        Thank you for visiting my portfolio. My name is Ozzie and I am a Junior Web Developer based out of Eden Prairie, Minnesota. 
        I attended a full-stack coding bootcamp offered by The University of Minnesota and graduated on June 6th. I am currently looking
        for work as either a Front-End Developer or Back-End Developer. Please feel free to view my work to have a better understanding of 
        my abilites and progress. If you would like to get in touch with me please feel free to send me an e-mail. I check my e-mails on a daily basis
        and typically respond within a few hours. Thank you for your interest and I hope to be in touch with you soon.
      </p>
      <Button variant="outline-dark" style={{marginLeft: 40}}>✉ nmd1018@yahoo.com</Button>{' '}
    </div>
  );
}