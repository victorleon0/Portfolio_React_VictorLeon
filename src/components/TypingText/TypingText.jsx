import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './TypingText.scss';

const TypingText = () => {
  return (
    <div className="TypingText">
      <ReactTypingEffect
        text={["FullStack Developer", "UX/UI Designer"]} 
      />

      <br />

      <ReactTypingEffect
        text={["FullStack Developer", "UX/UI Designer"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
          <div>
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  
                  <span  
                    key={key}
                    style={i%2 === 0 ? { color: 'orange'} : { color: 'grey'}}
                  >{char}</span>
                  
                );
              })}
            </h1>
            </div>
          );
        }}        
      />
    </div>
  );
};
export default TypingText