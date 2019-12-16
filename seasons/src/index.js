import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

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