
//import { useState } from 'react';
import './DarkMode.scss';


const DarkMode = ({dark, setDark}) => {
  
    console.log('Dark mode', dark);
  return (
    <div className="darkModeButton">
        <button type="button" onClick={()=>setDark(!dark)}>☀️⁄🌙</button>
        <div>
    
  <label for="button" class="switchButton">
    <i class="fas fa-moon"></i>
    <i class='fas fa-sun'></i>
    <div class='ball'></div>
  </label>
</div>
    </div>   
  )
}


export default DarkMode