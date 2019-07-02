import React, { Component } from 'react';
import CanvasComponent from '../components/CanvasComponent';

const ProblemContainer = () => {

  return (
    <div>
      <h4>ProblemContainer rendered by ProblemPageContainer but is also rendering: </h4>
      <CanvasComponent />
    </div>
  );

};

export default ProblemContainer;