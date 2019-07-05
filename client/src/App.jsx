// Imports: Dependencies
import React from 'react';
import FormContainer from './containers/FormContainer';
import ProblemPageContainer from './containers/ProblemPageContainer';
import { Route } from 'react-router-dom';

// Imports: Components

// React Application
const App = () => {

  return (
    <div id="main" className="App">
      <Route exact path='/' component={FormContainer}/>
      <Route path='/problem' component={ProblemPageContainer}/>
    </div>
  );
}

// Exports
export default App;
