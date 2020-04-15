import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Greeter from './GreeterFunctional';
import { PageManagerRouted } from './demos/PageComponents';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Not Really Discover Banking Services</h1>
        {/* <Greeter companyName="Gristedes" /> */}
        <PageManagerRouted />
      </div>
    </Router>
  );
}

export default App;
