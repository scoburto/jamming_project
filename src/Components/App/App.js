import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: [{key: 0,
                                  name: 'name0',
                                    artist: 'artist0',
                                    album: 'album0'},
                                  {key: 1,
                                  name: 'name1',
                                  artist: 'artist1',
                                  album: 'album1',
                                  {key:2,
                                  name: 'name2',
                                  artist: 'artist2',
                                  album: 'album2'}]}
  }
  render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
  }
}
