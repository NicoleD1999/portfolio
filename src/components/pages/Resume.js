import React from 'react';
import Download from '../DownloadButton'
import { InlineWidget } from 'react-calendly';
import '../../styles.css'


export default function Resume() {
  return (

    <div style={{color: '#0a0908', marginLeft: 25}}>
      <h1 style={{fontFamily: 'Merriweather serif', fontSize: 45, marginTop: 10}}>Resume</h1>
      <hr></hr>
      <h5>Click Arrow to Download Resume <Download/></h5>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <iframe  className="iFrameChild"  style={{width: 850, height: 500, marginBottom: 10, marginRight: 10}} src="https://docs.google.com/document/d/15PnC5ZldmYtLIsNm94Kd7VgybCLdLComV4vSv9-s1zM/edit?usp=sharing" title="Resume"></iframe>
      <InlineWidget url="https://calendly.com/nmd1018" styles={{height: 500, width: 600, marginLeft: 10, marginRight: 10}}/>
      </div>
    </div>
  );
}