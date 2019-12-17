# SSED_Modern-React-with-Redux

- JSX

- Node js

  ```
  $ node -v
  ```

- Create-react-app

  ```
  $ npm install -g create-react-app
  ```

  - Npm：Runs 'npm'

  - Install：Install a package onto our computers

  - -g：Install this package globally 

  - Create-react-app：Name of the package

- Generating a React Project

  ```
  $ create-react-app jsx
  ```

  - jsx：<name of project>

  - 1. Babel

    - 編譯把使用者的 ES 2015~9 語法變成 ES5 JS 再給瀏覽器

    2. Webpacker
    3. Dev Server

- Project Directory

  - src：Folder where we put all the source code we write
  - public：Folder that stores static files, like images
  - node_modules：Folder that contains all of our project dependencies
  - package.json：Records the exact version of packages that we install
  - package-lock.json：Records the exact version of packages that we install
  - README.md：Instructions on how  to use this project

- Starting and Stopping React App

  - Start

    ```
    $ npm start
    ```

  - Stop

    ```
    control + c	
    ```

- JavaScript Module Systems

  - import the React and ReactDom libraries

    ```react
    import React from "react";
    import ReactDOM from "react-dom";
    ```

  - Create a react component

    ```react
    const App = () => {
      return <div>Hi there!</div>;
    }
    ```

  - Take the react component and show it on the screen

    ```react
    ReactDOM.render(
      <App />,
      document.querySelector('#root')
    ); 
    ```

    