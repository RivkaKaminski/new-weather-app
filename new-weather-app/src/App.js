import './App.css';


import React, { useState, useEffect } from 'react';
import WeatherCard from './components/weatherCard';
import './App.css'; 
import { getWeatherData } from './weatherService'; 

function App() {
  const [weatherData, setWeatherData] = useState([]);

  const cities = ['Eilat', 'London', 'New York', 'Alaska'];

  useEffect(() => {
    async function fetchWeather() {
      const data = await Promise.all(cities.map(city => getWeatherData(city)));
      setWeatherData(data);
    }
    fetchWeather();
  }, []);

  return (
    <div className="app">
      <h1>מזג האוויר בערים נבחרות</h1>
      <div className="weather-grid">
        {weatherData.map((weather, index) => (
          <WeatherCard
            key={index}
            name={weather.name}
            description={weather.weather[0].description}
            temp={weather.main.temp}
            feelsLike={weather.main.feels_like}
            humidity={weather.main.humidity}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

