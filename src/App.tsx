import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CategoriesManager, TransactionsManager, PeopleManager } from './TopicManagers';
import PayeesManager from './payees/PayeesManager';
import DemosManager from './demos/DemosManager';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Not Really Discover Banking Services</h1>
        <div className="row">
          <div className="col">
            <nav>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to="/demos">Demos</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/categories">Categories</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/payees">Payees</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/people">People</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/transactions">Transactions</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <Switch>
          <Route path="/demos">
            <DemosManager />
          </Route>
          <Route path="/categories">
            <CategoriesManager />
          </Route>
          <Route path="/payees">
            <PayeesManager />
          </Route>
          <Route path="/people">
            <PeopleManager />
          </Route>
          <Route path="/transactions">
            <TransactionsManager />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
