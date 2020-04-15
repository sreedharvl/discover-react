import React, { useState } from 'react';

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

function PageManager() {
  const [count, setCount] = useState(1);

  const updateCount = (event: any) => {
    event.preventDefault();
    setCount(count + 1);
  };

  let page = <PageOne />;

  if (count % 2 === 0) {
    page = <PageTwo />;
  }

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
          {
            // count % 2 ? <PageOne/> : <PageTwo />
          }

          {page}
        </ul>
      </div>
    </div>
  );
}

export { PageOne, PageTwo, PageManager };
