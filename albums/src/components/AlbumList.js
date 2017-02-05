import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//Class components
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(responseJson => this.setState({ albums: responseJson }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
      {this.renderAlbums()}
      </ScrollView>
    );
  }
}


// const styles = () =>{
//
// }


export default AlbumList;
