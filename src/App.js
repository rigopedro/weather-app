import React, { useState } from 'react';
import WeatherPanel from './components/weatherPanel';
import SearchBar from './components/searchBar';
import Header from './components/Header';
import Footer from './components/Footer';
import { fetchWeatherByCity } from './services/weatherService';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchWeatherByCity(city);
    setWeatherData(data);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      <WeatherPanel weatherData={weatherData} />
      <Footer />
    </div>
  );
}

export default App;
