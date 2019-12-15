import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourecesList = () => {
  const [resource, setResource] = useState([]); 

  const fetchResource = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

    this.setState({ resource: response.data });
  }

  return <div>{resource.length}</div>
};

export default ResourecesList;