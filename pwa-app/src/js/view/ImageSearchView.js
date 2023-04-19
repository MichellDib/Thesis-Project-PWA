import React, { useState, useEffect } from 'react';

const ImageSearchView = ({
  query,
  numImages,
  results,
  loading,
  error,
  onInputChange,
  onNumImagesChange,
  onSubmit
}) => {
  const [renderStartTime, setRenderStartTime] = useState(null);

  useEffect(() => {
    if (results.length) {
      setRenderStartTime(performance.now());
    } else {
      setRenderStartTime(null);
    }
  }, [results]);

  return (
    <div>
      {renderStartTime && (
        <p>
          Time to render images: {Math.round((performance.now() - renderStartTime) * 100) / 100} ms
        </p>
      )}
      <form onSubmit={onSubmit}>
        <input type="text" value={query} onChange={onInputChange} />
        <input type="number" value={numImages} onChange={onNumImagesChange} />
        <button type="submit" disabled={loading}>
          Search Images
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {results.map((result, index) => (
        <div key={index}>
          <img src={result.url} alt={result.title} />
          <p>{result.title}</p>
        </div>
      ))}
      
    </div>
  );
};

export default ImageSearchView;
