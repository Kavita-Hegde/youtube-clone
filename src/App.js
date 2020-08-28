import React from 'react';

import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

import Header from './component/header/header.component';

import SearchBar from './component/SearchBar';
import VideoDetail from './component/VideoDetail.component';
import VideoList from './component/VideoList.component';
import SignInAndSignOut from './component/Sign-in-and-sign-out.component';

class App extends React.Component {
  state = {
    videos : [],
    selectedVideo : null
  }

  onVideoSelect = (video) =>{
    this.setState({selectedVideo: video})
  }

  componentDidMount(){
    this.handleSubmit('pikachu')
   }

  handleSubmit = async (searchTerm) => {
    const response  = await youtube.get('search', 
    { params:{
        part: 'snippet',
        maxResults : 5,
        key:'AIzaSyCjvcoFjsKonfegztCK2YfSyQm8tQElh2Y',
        q: searchTerm
      }
    });
    this.setState({videos:response.data.items , selectedVideo: response.data.items[0]})
  }

  render() { 
    const { selectedVideo, videos } = this.state
    return (
        <Grid style={{ justifyContent: "center" }} container spacing={10}>
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                 <SearchBar onFormSubmit={this.handleSubmit}/>
                 
        
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo}/>
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
    );
  }
}

export default App;
