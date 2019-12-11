import axios from 'axios';

const KEY = 'AIzaSyCCpwGoDSt9ToykPpwktTGfLWplROapFpY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  //youtube.get(/...);
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY
  }
});