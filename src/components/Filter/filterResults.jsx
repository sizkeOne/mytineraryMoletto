import React from 'react';

function SearchResults({ results }) {
  return (
    <ul>
      {results.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default SearchResults;