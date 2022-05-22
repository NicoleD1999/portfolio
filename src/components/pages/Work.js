import React from "react";
import Carousel from "react-bootstrap/Carousel";
import  Container from "react-bootstrap/Container";
import dailyPlanner from '../../assets/Daily-Planner.png'
import animeSearch from '../../assets/ANIMEsearch.png'
import bcForum from '../../assets/bootcamp-forum.png'
import empTracker from '../../assets/employee-tracker.png'
import passGen from '../../assets/Password-Generator.png'
import weatherDash from '../../assets/Weather-Dashboard.png'


export default function Work() {


  return (
  <div>
  <h1 style={{color:'#0a0908', marginLeft:20 }}>Portfolio</h1>
  <hr></hr>
  <Container>
    <Carousel fade style={{marginTop:20}}>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src={dailyPlanner}
        alt="Daily Planner Application"
        />
      <Carousel.Caption style={{background: '#cce3de'}}>
        <h3>Daily Planner</h3>
        <p>Allows the user to organize their day by entering in tasks that need to be completed at a certain time. background colors indicate hours that have passed, the current hour, and approaching hours. Click <a href="https://nicoled1999.github.io/daily-planner/" id="here">here</a> to visit my website. Click <a href="https://github.com/NicoleD1999/daily-planner" id="here">here</a> to visit the github repo.</p>
      </Carousel.Caption>
    </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={animeSearch}
      alt="Anime Search Application"
    />

    <Carousel.Caption style={{background: '#cce3de', paddingLeft:2, paddingRight:2}}>
      <h3>ANIME Search</h3>
      <p>My first group project. Created to allow both new and seasoned anime fans the ability to search for new anime. Click <a href="https://nicoled1999.github.io/project-1/" id="here">here</a> to visit the website. Click <a href="https://github.com/NicoleD1999/project-1" id="here">here</a> to visit the github repo.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bcForum}
      alt="Bootcamp Forum Application"
    />

    <Carousel.Caption style={{background: '#cce3de'}}>
      <h3>Bootcamp Forum</h3>
      <p>My second group project. Created to allow graduates of coding bootcamp or people interested in coding bootcamp a platform to communicate on and share their experiences. Click <a href="https://quiet-inlet-26349.herokuapp.com/" id="here">here</a> to visit the website. Click <a href="https://github.com/midth002/bootcamp-forum" id="here">here</a> to visit the github repo.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={weatherDash}
      alt="Weather Dashboard Application"
    />

    <Carousel.Caption style={{background: '#cce3de', paddingLeft:2, paddingRight:2}}>
      <h3>Weather Dashboard</h3>
      <p>Allows the user to search both the current weather in any city in the U.S. as well as a 5 day forecast for that city. Click <a href="https://nicoled1999.github.io/weather-dashboard/" id="here">here</a> to visit my website. Click <a href="https://github.com/NicoleD1999/weather-dashboard" id="here">here</a> to visit the github repo.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={empTracker}
      alt="Employee Tracker Back-End Application"
    />

    <Carousel.Caption style={{background: '#cce3de'}}>
      <h3>Employee Tracker</h3>
      <p>A back-end only application using prompt to allow the user to keep track of and add employees, roles, and departments. Click <a href="https://github.com/NicoleD1999/employee-tracker" id="here">here</a> to visit the github repo.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={passGen}
      alt="Password Generator"
    />

    <Carousel.Caption style={{background: '#cce3de', paddingLeft:2, paddingRight:2}}>
      <h3>Password Generator</h3>
      <p>Allows the user to generate a password by asking a variety of questions once the user clicks the generate password button. Click <a href="https://nicoled1999.github.io/password-generator/" id="here">here</a> to visit my website. Click <a href="https://github.com/NicoleD1999/password-generator" id="here">here</a> to visit the github repo.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </Container>
  </div>

  );
}