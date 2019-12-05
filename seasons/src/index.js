import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude}),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if(this.state.lat && !this.state.errorMessage){
      return <SeasonDisplay lat={this.state.lat} />
    }

    if(!this.state.lat && this.state.errorMessage){
      return <Loading message="Error Message"/>
    }

    return <Loading message="Please accept location request"/>
  }
  
  render() {
    return <div className={`border content`}>
      {this.renderContent()}
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);