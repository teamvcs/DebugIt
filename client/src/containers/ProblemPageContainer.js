import React, { Component } from 'react';
import ProblemContainer from './ProblemContainer';
import ErrorMessageComponent from '../components/ErrorMessageComponent';

const ProblemPageContainer = () => {

  return (
    <div>
      <h4>Problem Page Container rendering:</h4>
      <ErrorMessageComponent />
      <ProblemContainer />
    </div>
  );

};

export default ProblemPageContainer;
