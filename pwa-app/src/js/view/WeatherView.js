import React from 'react';

const WeatherView = ({ query, loading, error, onInputChange, onSubmit, renderTime, results }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={query} onChange={onInputChange} />
        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {results && (
        <div>
          <h2>{results.location.name}, {results.location.region}, {results.location.country}</h2>
          <div>Local Time: {results.location.localtime}</div>
          <div>Temperature: {results.current.temp_c}°C ({results.current.temp_f}°F)</div>
          <div>Feels Like: {results.current.feelslike_c}°C ({results.current.feelslike_f}°F)</div>
          <div>Humidity: {results.current.humidity}%</div>
          <div>Wind: {results.current.wind_dir} {results.current.wind_kph} km/h</div>
          <div>UV Index: {results.current.uv}</div>
          <div>Visibility: {results.current.vis_km} km</div>
          <div>Pressure: {results.current.pressure_mb} mb</div>
          <div>Condition: {results.current.condition?.text}</div>
          <div>
            <img
              src={`https:${results.current.condition?.icon}`}
              alt={results.current.condition?.text}
            />
          </div>
          <div>Render time: {renderTime} ms</div>
        </div>
      )}

      
    </div>
    
    
  );
};

export default WeatherView;
