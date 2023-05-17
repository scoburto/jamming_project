import React from 'react';

export class Track extends React.Component {
    render() {
        return (
            <div className="Track">
            <div className="Track-information">
                <h3>{this.props.name}</h3>
                <p>{this.props.artist} | {this.props.album}</p>
            </div>
            {this.renderAction}
            </div>
        )
    }
    renderAction() {
        return (this.props.isRemoval ? <button className="Track-action">-</button> : <button className="Track-action">+</button>)
    }
}

<div class="Track">
  <div class="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <button class="Track-action"><!-- + or - will go here --></button>
</div>