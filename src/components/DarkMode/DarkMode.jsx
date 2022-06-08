
import { useState } from 'react';
import './DarkMode.scss';


const DarkMode = () => {
    const [dark, setDark] = useState(false);
    console.log('Dark mode', dark);
  return (
    <div className={dark ? 'appDark' : 'appLight'}>
        <button type="button" onClick={()=>setDark(!dark)}>☀️⁄🌙</button>
    </div>   
  )
}

export default DarkMode