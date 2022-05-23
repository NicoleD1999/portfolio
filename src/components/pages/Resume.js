import React from 'react';
import Download from '../DownloadButton'
import { InlineWidget } from 'react-calendly';


export default function Resume() {
  return (

    <div style={{color: '#0a0908', marginLeft: 25}}>
      <h1 style={{fontFamily: 'Merriweather serif', fontSize: 45, marginTop: 10}}>Resume</h1>
      <hr></hr>
      <h5>Click Arrow to Download Resume <Download/></h5>
      <iframe style={{height:620, width:850, marginLeft: 15}}src="https://docs.google.com/document/d/e/2PACX-1vQqhtiEa_2driMSWbfs4RSUnxDVnCwRhfuoQ9HPOR5of00-AqvHpSs3CrGXNfaivA/pub?embedded=true" title="Resume"></iframe>
      <InlineWidget url="https://calendly.com/nmd1018" styles={{height: 500, width: 500, position: 'absolute', left: 980, bottom: 30}}/>
    </div>
  );
}