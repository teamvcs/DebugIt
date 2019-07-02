// Imports: Dependencies
import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';
import ProblemPageContainer from './containers/ProblemPageContainer';

// Imports: Components

// React Application
const App = () => {

  return (
    <div id="main">
      <FormContainer />
      <ProblemPageContainer />
    </div>
  );
}

// Exports
export default App;