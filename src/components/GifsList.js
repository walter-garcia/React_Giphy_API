import React, { Component } from 'react';

class GifsList extends Component {
  getFavourite() {
    this.setState({
      favourites: [...this.state.favourites, this.props.gifs.images.original.url]
    });
  }
  render() {
    return (
      <div className="col-12 gifs">
        {
          this.props.gifs &&
          <img src={this.props.gifs.images.original.url} alt=""  />
        }
        {
          this.props.gifs &&
          <form onSubmit={this.props.getData} >
            <input
              type="hidden"
              name="gifname"
              value={this.props.search}
            />

            <button className="btn btn-outline-dark shadow-none">Change</button>
          </form>
        }
        {
          this.props.error && 
          <div className="error">No results found for the entered value</div>
        }
      </div>
    )
  }
};

export default GifsList;