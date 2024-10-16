import axios from 'axios';
import { WeatherData } from './utils';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

export const getWeatherData = async (lat: number, lon: number): Promise<WeatherData | null> => {
  try {
    if (!API_KEY) {
      console.log('API Key:', API_KEY);
      throw new Error('API key is missing');
    }

    const response = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};
