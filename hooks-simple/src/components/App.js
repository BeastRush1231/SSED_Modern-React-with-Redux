import React from 'react';

class App extends React.Component {
  state = { resources: 'init' };

  render() {
    return(
      <div>
        <div>
          <button onClick={ () => {this.setState({resources: 'posts'})} }>
            posts
          </button>
          <button onClick={ () => {this.setState({resources: 'todos'})} }>
            todos
          </button>
        </div>
        {this.state.resources}
      </div>
    );
  };
}

export default App;
