import './App.css';
import React, { useState } from 'react';
import { checkInput, getRGBString } from './utils/utils';

export default function App() {
  const [bgColorStyle, setColorStyle] = useState({
    backgroundColor: 'rgb(256,256,256)',
  });
  const handleSubmit = (evt) => evt.preventDefault();
  const handleChange = (evt) => {
    setColorStyle((prevColorStyle) => {
      return checkInput(evt, prevColorStyle) || getRGBString(evt.target.value);
    });
  };

  return (
    <div className="App" style={bgColorStyle}>
      <form className="App-form" onSubmit={handleSubmit}>
        <input
          className="App-input"
          id="hex"
          name="hex"
          onChange={handleChange}
        />
        <div className="App-output">
          {bgColorStyle.backgroundColor === 'red'
            ? 'Ошибка!'
            : bgColorStyle.backgroundColor}
        </div>
      </form>
    </div>
  );
}
