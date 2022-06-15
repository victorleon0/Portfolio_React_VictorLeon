
//import { useState } from 'react';
import './DarkMode.scss';


const DarkMode = ({dark, setDark}) => {
  
    console.log('Dark mode', dark);
  return (
    <div className="darkModeButton">
        <button type="button" onClick={()=>setDark(!dark)}>☀️⁄🌙</button>
        
    </div>   
  )
}


export default DarkMode