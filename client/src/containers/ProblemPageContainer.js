import React, { Component } from 'react';
import ProblemContainer from './ProblemContainer';
import ErrorMessageComponent from '../components/ErrorMessageComponent';

const ProblemPageContainer = () => {

  return (
    <div className="ProblemPageContainer">
      <ErrorMessageComponent />
      <ProblemContainer />
    </div>
  );

};

export default ProblemPageContainer;
