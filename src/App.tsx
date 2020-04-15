import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Greeter from './GreeterFunctional';
import { PageManagerRouted } from './demos/PageComponents';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Not Really Discover Banking Services</h1>
        <div className="row">
          <div className="col">
            <nav>
              <ul className="list-inline">
                <li className="list-inline item">Demos</li>
                <li className="list-inline item">Categories</li>
                <li className="list-inline item">Payees</li>
                <li className="list-inline item">People</li>
                <li className="list-inline item">Transactions</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
