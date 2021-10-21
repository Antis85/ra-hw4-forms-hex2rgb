import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [bgColorStyle, setColorStyle] = useState({
    backgroundColor: 'rgb(256,256,256)',
  });

  const handleSubmit = (evt) => evt.preventDefault();

  const handleChange = (evt) => {
    setColorStyle((prevColorStyle) => {
      if (evt.target.value.length !== 7) {
        console.log('length != 7: ', evt.target.value.length);
        return prevColorStyle;
      }

      if (evt.target.value.startsWith('#')) {
        console.log('hex input is valid');
        const rRGB = +('0x' + evt.target.value.slice(1, 3)).toString();
        const gRGB = +('0x' + evt.target.value.slice(3, 5)).toString();
        const bRGB = +('0x' + evt.target.value.slice(5, 7)).toString();
        console.log(rRGB, gRGB, bRGB);
        return { backgroundColor: `rgb(${rRGB}, ${gRGB}, ${bRGB})` };
      }

      if (!evt.target.value.startsWith('#')) {
        return { backgroundColor: 'red' };
      }
    });
  };

  return (
    <div className="App" style={bgColorStyle}>
      <form className="App-form" onSubmit={handleSubmit}>
        <input className="App-input" id="hex" name="hex" onChange={handleChange} />
        <div className="App-output">
          {bgColorStyle.backgroundColor === 'red'
            ? 'Ошибка!'
            : bgColorStyle.backgroundColor}
        </div>
      </form>
    </div>
  );
}
