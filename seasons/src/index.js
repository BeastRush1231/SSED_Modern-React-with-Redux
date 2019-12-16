import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';
import useLocation from './useLocation';

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <Loading message="Error Message"/>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Loading message="Please accept location request"/>
  }

  return <div className={`border content`}>
    {content}
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);