import React from 'react';
import portfolioImage from '../../assets/6EA60512-B97F-4594-AB25-7BFC406E266E.jpeg'

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
    list: {
        background: '#AEC3B0',
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        fontSize: 20,
        borderRadius: 20,
        padding: 10,
        fontWeight: 'bold',
        color: '#01161E'
    }
}


export default function About() {
    const list = ['JavaScript', 'HTML', 'CSS', 'CSS Frameworks (Bootstrap)', 'JQuery', 'ReactJS', 'NodeJS', 'MySQL', 'Express.js', 'MongoDB (mongoose)'];

    const items = []
  
    for (const [index, value] of list.entries()) {
      items.push(<li key={index}>{value}</li>)
    }
  return (
    <div style={{color: '#AEC3B0'}}>
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
        my abilites and progress. If you have any questions or would like to contact me please click the contact tab to send me an e-mail.
        I check my e-mail on a daily basis and tend to respond within a few hours. Below you will find a list of things I am proficient at,
        thank you for your intrest and I hope to be in touch with you soon.
      </p>
      <ul style={styles.list}>
          <h3>Proficiencies</h3>
          {items}
      </ul>
    </div>
  );
}