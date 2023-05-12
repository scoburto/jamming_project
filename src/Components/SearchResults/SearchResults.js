import React from 'react';
import './SearchResults.css';
import { TrackList}  from '../TrackList//TrackList.js';

export class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="SearchResults">
                <h2>{this.props.searchResults}</h2>
                <TrackList tracks={this.props.searchResults}/>
            </div>
        )
    }
}