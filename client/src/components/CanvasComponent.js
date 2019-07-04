import React, { Component } from 'react';

const CanvasComponent = () => {

  let styles = {
    width: "500",
    height: "300",
    style: "border:1px solid #000000",
    backgroundColor: 'lightgrey',
    padding: "2em",
    display: "inline-block",

  }

  return (
    <div className="CanvasComponent">
      <textarea rows="20" style={styles}></textarea>
    </div>
  );

};

export default CanvasComponent;