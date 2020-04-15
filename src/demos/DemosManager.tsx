import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { PageManagerRouted } from './PageComponents';

function DemosManager() {
  return (
    <>
      <div className="row">
        <div className="col">
          <h3>Demos Manager</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul>
            <li>
              <Link to="/demos/page-routing">Page Routing Example</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Switch>
            <Route path="/demos/page-routing">
              <PageManagerRouted />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default DemosManager;
