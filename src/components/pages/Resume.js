import React from 'react';
import Download from '../DownloadButton'

export default function Resume() {
  return (
    <div style={{color: '#0a0908', marginLeft: 25}}>
      <h1>Resume</h1>
      <hr></hr>
      <h5>To Download My Resume Please Click <Download/></h5>
      <iframe style={{height:620, width:850, marginLeft: 15}}src="https://docs.google.com/document/d/e/2PACX-1vQqhtiEa_2driMSWbfs4RSUnxDVnCwRhfuoQ9HPOR5of00-AqvHpSs3CrGXNfaivA/pub?embedded=true"></iframe>
    </div>
  );
}