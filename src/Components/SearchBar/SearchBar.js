import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <input placeholder='Enter a Song, Album, or Artist' />
            <button className='SearchButton'>SEARCH</button>
        </div>
        )
    }
}