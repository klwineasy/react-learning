import React from 'react';
import '../App.css';

const buttons = (props) => {
  const {background, text, margin} = props;

  const myButtonStyle = {
    background: `${background}`,
    margin: `${margin}`, 
 }
 
  return (
    <div>
      <button className='custom-button' style={myButtonStyle}>{text}</button>
      <br/>
    </div>
  )
}

export default buttons