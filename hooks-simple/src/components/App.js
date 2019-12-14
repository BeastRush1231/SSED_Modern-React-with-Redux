import React, {useState} from 'react';
import ResourcesList from './ResourcesList';

const App = () => {
  const [resource, setResource] = useState('posts'); 

  return(
    <div>
      <div>
        <button onClick={() => setResource('posts')}>posts</button>
        <button onClick={() => setResource('todos')}>todos</button>
      </div>
      <ResourcesList resource={resource}/>
    </div>
  );
};
// }

export default App;
