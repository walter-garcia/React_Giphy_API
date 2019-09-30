import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import CopyGifUrl from './components/CopyGifUrl';
import GifsList from './components/GifsList';
import Favourite from './components/Favourite'

const api_key = 'HDQjpGjp4v92hP6NRFKZlrLcR0S1Ol39';

class App extends Component {
  state = {
    gifs: '',
    gifUrl: '',
    search: '',
    error: false,
  }

  getData = async (event) => {
    event.preventDefault();

    const searchTerm = event.target.gifname.value;

    try {
      const api_call = await 
        fetch(`http://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=${api_key}`)
      ;
  
      const response = await api_call.json();
  
      if (searchTerm && response) {
        this.setState({
          gifs: response.data,
          gifUrl: response.data.images.original.url,
          search: searchTerm,
          error: false,
        });
      }
    } catch(error) {
      this.setState({
        gifs: '',
        error: true
      });
    }
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <SearchBar getData={this.getData} />
            <GifsList 
              gifs={this.state.gifs}
              getData={this.getData}
              search={this.state.search}
              error={this.state.error}
            />
            <CopyGifUrl gifUrl={this.state.gifUrl} gifs={this.state.gifs} copied={this.state.copied}/>
          </div>
          <div className="col-12 col-md-6">
            <Favourite gifs={this.state.gifs}/>
          </div>
        </div>
      </div>
    );
  }
};

export default App;