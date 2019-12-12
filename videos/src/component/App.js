import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
  state = { videos: [], selectedvideo: null };
  
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedvideo: video});
    console.log(this.state.selectedvideo);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedvideo} />
            </div>
            <div className="five wide column">
              <VideoList 
                videos={this.state.videos} 
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;