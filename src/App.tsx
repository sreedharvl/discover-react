import React from 'react';
import Greeter from './GreeterFunctional';
import { PageManager } from './demos/PageComponents';

function App() {
  return (
    <div className="container">
      <h1>Not Really Discover Banking Services</h1>
      {/* <Greeter companyName="Gristedes" /> */}
      <PageManager />
    </div>
  );
}

export default App;
