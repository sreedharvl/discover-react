import React, { useState } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

function PageOne() {
  return (
    <div>
      <h2>Page One</h2>
    </div>
  );
}

function PageTwo() {
  return (
    <div>
      <h2>Page Two</h2>
    </div>
  );
}

function getPage(count: number) {
  let page = <PageOne />;

  if (count % 2 === 0) {
    page = <PageTwo />;
  }

  return page;
}

function PageManager() {
  const [count, setCount] = useState(1);

  const updateCount = (event: any) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <div className="row">
      <div className="col">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="http://discover.com/" onClick={(event) => updateCount(event)}>
              Page One
            </a>
          </li>
          <li className="list-inline-item">
            <a href="http://mastercard.com/" onClick={(event) => updateCount(event)}>
              Page Two
            </a>
          </li>
        </ul>
        {count % 2 ? <PageOne /> : <PageTwo />}

        {/* {getPage(count)} */}
      </div>
    </div>
  );
}

function PageManagerRouted() {
  return (
    <div className="row">
      <div className="col">
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/demos/page-routing/page-one">Page One</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/demos/page-routing/page-two">Page Two</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/demos/page-routing" exact>
            <Redirect to="/demos/page-routing/page-one" />
          </Route>
          <Route path="/demos/page-routing/page-one">
            <PageOne />
          </Route>
          <Route path="/demos/page-routing/page-two">
            <PageTwo />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export { PageOne, PageTwo, PageManager, PageManagerRouted };
