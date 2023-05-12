import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { SearchResults } from '../SearchResults/SearchResults.js';
import { Playlist } from '../Playlist/Playlist.js';
import { Track } from '../Track/Track.js';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchResults : 
                    [<Track id='0' name='My Heart Will Go On' artist='Celine Dion' album='Titanic' />,
                    <Track id='1' name="Don't Stop Believin'" artist='Journey' album='Who Cares?' />,
                    <Track id='2' name="Mr. Brightside" artist='The Killers' album='Hot Fuss'/>]
                  };
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar />
          <div className ="App-playlist">
              <SearchResults searchResults={this.state.searchResults} />
              <Playlist />
          </div>
        </div>
      </div>
      )
    }
}