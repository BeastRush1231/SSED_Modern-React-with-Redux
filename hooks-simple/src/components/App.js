// import React from 'react';
import React, {useState} from 'react';

// class App extends React.Component {
//   state = { resources: 'init' };

// render() {
const App = () => {
  const [resource, setResource] = useState('posts'); 
  
  return(
    <div>
      <div>
        {/* <button onClick={() => {this.setState({resources: 'posts'})} }> */}
        <button onClick={() => setResource('posts')}>
          posts
        </button>
        {/* <button onClick={() => {this.setState({resources: 'todos'})} }> */}
        <button onClick={() => setResource('todos')}>
          todos
        </button>
      </div>
      {/* {this.state.resources} */}
      {resource}
    </div>
  );
};
// }

export default App;
