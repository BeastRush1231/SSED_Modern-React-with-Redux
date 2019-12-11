import React from 'react';

class SearchBar extends React.Component{
  state = { term: 'test' };

  onInputChange = () => {
    
  };

  render(){
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="video">Video Search</label>
            <input 
              type="text" 
              id="video" 
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  };
};

export default SearchBar;