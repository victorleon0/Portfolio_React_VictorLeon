import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingText = () => {
  return (
    <>
      <ReactTypingEffect
        text={["FullStack Developer", "UX/UI Designer"]} 
      />

      <br />

      <ReactTypingEffect
        text={["FullStack Developer", "UX/UI Designer"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'orange'} : { color: 'green'}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </>
  );
};
export default TypingText