import React from 'react';
import './TrackList.css';
import { Track } from '../Track/Track';

export class TrackList extends React.Component {
    render() {
       return (
            <div className="TrackList">
               // You will add a map method that renders a set of Track components
              this.props.tracks.map((track) =>  <Track key={track.id} 
                                                         name={track.name}
                                                         album={track.album}
                                                         artist={track.artist} /> )
            </div>
       ) 
    }
}