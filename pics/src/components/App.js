import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 3214dc0ca13e3102552436890fc8f1a0d120eb7104981594107c006af1b745bc'
      }
    });

    this.setState({ images: response.data.results });
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar 
          onSubmitApp={ this.onSearchSubmit }
        />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
