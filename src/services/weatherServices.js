import axios from 'axios';

const API_TOKEN = '1ed17e6a5505ef1c671623ac8cbafdb7';
const BASE_URL = 'https://apiadvisor.climatempo.com.br/api/v1';

export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather/locale/${city}/current?token=${API_TOKEN}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};
