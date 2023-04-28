import React from 'react';

const TextSearchView = ({ 
    searchTerm, 
    text, 
    result, 
    loading, 
    onSearchTermChange, 
    onTextChange, 
    onSearch, 
    onError, 
    filterTime 
}) => {
    
  return (
    <div>
      <input type="text" value={searchTerm} onChange={onSearchTermChange} />
      <input type="text" value={text} onChange={onTextChange} />
      <button onClick={onSearch}>Search</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {result !== null ? (
            <div>
              <p>Result: {result}</p>
              <p>Filter time: {filterTime}ms</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default TextSearchView;
