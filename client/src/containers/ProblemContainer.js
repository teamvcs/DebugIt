import React, { Component } from 'react';
import CanvasComponent from '../components/CanvasComponent';
import ProblemDescriptionComponent from '../components/ProblemDescriptionComponent';

const ProblemContainer = () => {

  return (
    <div>
      <h2>PROBLEM #1</h2>
      <ProblemDescriptionComponent />
      <CanvasComponent />
    </div>
  );

};

export default ProblemContainer;