import React from 'react';
import './Playlist.css';
import TrackList from './TrackList.js';

export class Playlist extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='Playlist'>
                <input value='New Playlist'/>
                <!-- Add a TrackList component -->
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}