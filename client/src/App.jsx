// Imports: Dependencies
import React from 'react';
import FormContainer from './containers/FormContainer';
import ProblemPageContainer from './containers/ProblemPageContainer';
import LandingPageContainer from './containers/LandingPageContainer';

// Imports: Components

// React Application
const App = () => {

  return (
    <div id="main" className="App">
      <FormContainer />
      <ProblemPageContainer />
      <LandingPageContainer />
    </div>
  );
}

// Exports
export default App;
