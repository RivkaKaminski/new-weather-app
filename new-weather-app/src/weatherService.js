import axios from 'axios';

const API_KEY = '8ee633956bad6ae1965b557a94ecfcba';

export async function getWeatherData(city) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=he`
  );
  return response.data;
}
