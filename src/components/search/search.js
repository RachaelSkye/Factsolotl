import React from 'react';

function Search(props) {
  return (
    <div>
      <form onSubmit={props.enterZip}>
        <input 
          type="text" 
          placeholder="enter zip code"
          />
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default Search;