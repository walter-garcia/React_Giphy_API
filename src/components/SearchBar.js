import React from 'react';

const SearchBar = props => (
  <div>
    <form onSubmit={props.getData} >
      <div className="col-12 input-group">
        <input 
          type="text" 
          name="gifname" 
          placeholder="Search for gifs..." 
          autoComplete="off" 
          autoFocus
          required
        />
        <div className="input-group-append">
          <button className="btn btn-outline-dark shadow-none">Get Gif</button>
        </div>
      </div>
    </form>
  </div>
);

export default SearchBar;