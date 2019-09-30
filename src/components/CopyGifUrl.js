import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 
class CopyGifUrl extends Component {
  state = {
    copied: false
  };
 
  render() {
    return (
      <div className="col-12 copy-url">
        {
          this.props.gifs &&           
          <CopyToClipboard 
            text={this.props.gifUrl}
            onCopy={ () => this.setState({ copied: true }) }>
            <button className="btn btn-outline-dark shadow-none">Copy Gif URL</button>
          </CopyToClipboard>
        }

        {
          this.state.copied ? <span><strong>Copied</strong></span> : ''
        }
      </div>
    );
  }
};

export default CopyGifUrl;