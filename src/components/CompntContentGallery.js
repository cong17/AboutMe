import React, { Component } from 'react';

class CompntContentGallery extends Component {
    render() {
        return (
            <div className="gallery-item">
                <div className="content"><img src={this.props.href} alt="" />
                </div>
            </div>
        );
    }
}

export default CompntContentGallery;