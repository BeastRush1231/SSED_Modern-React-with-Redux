// import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonSumbit = { text: "click me" };
  const labelText = "Enter name:"
  const style = {backgroundColor: 'blue', color: 'white'};
  
  return <div>
    <label class="label" for="name">
      {labelText}
    </label>
    <input type="text" id="name"/>
    {/* <button style="background-color: blue; color: white;">Submit</button> */}
    <button style={style}>
      {buttonSumbit.text}
    </button>
  </div>;
}

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
); 

