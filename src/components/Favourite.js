import React, { Component } from 'react';

class Favourite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favourites: [],
      error: ''
    };

    this.getFavourite = this.getFavourite.bind(this);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.favourites !== this.state.favourites) {
      localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
    }
  }

  componentDidMount() {
    const favourites = localStorage.getItem('favourites');

    if (favourites) {
      this.setState({ favourites: JSON.parse(favourites) });
    }
  }

  getFavourite() {
    if (this.state.favourites.indexOf(this.props.gifs.images.original.url) === -1) {
      this.setState({
        favourites: [...this.state.favourites, this.props.gifs.images.original.url],
        error: ''
      });
    } else {
      this.setState({
        error: alert('This gif is already in your favorites list')
      })
    }
  }

  handleDelete = (favourite) => {
    this.setState({ favourites: this.state.favourites.filter((_, f) => f !== favourite) })
  }

  render () {
    return (
      <div className="col-12 text-center">
          {
            <h3>Favourite Gifs</h3>
          }
        <div className="favourite">
          {
            this.state.favourites.map((favourite, index) => 
              <li key={index + 1}>
                <img src={favourite} alt="" />
                <button onClick={this.handleDelete.bind(this, index)}>
                  <i className="far fa-times-circle"></i>
                </button>
              </li>
            )
          }
        </div>
        {
          this.props.gifs &&
          <div className="favourite-button">
            <button className="btn btn-outline-dark shadow-none" onClick={this.getFavourite}>
              I like it
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Favourite;