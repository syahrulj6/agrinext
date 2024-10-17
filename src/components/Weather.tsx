'use client';
import { useEffect, useState } from 'react';
import { getWeatherData } from '../lib/weatherApi';
import { WeatherData } from '@/lib/utils';
import { ThermometerSun } from 'lucide-react';

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [advice, setAdvice] = useState<string>('');
  const [lastFetchTime, setLastFetchTime] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchWeather = async () => {
      const now = Date.now();
      if (now - lastFetchTime > 10 * 60 * 1000) {
        try {
          const data = await getWeatherData(-7.2575, 112.7521);
          setWeather(data);
          setLastFetchTime(now);

          if (data) {
            provideAdvice(data.main.temp);
          }
        } catch (error) {
          console.error('Failed to fetch weather data', error instanceof Error ? error.message : error);
        }
      }
    };

    fetchWeather();
    const intervalId = setInterval(fetchWeather, 10 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [lastFetchTime]);

  const provideAdvice = (temperature: number) => {
    const tempCelsius = temperature - 273.15;
    if (tempCelsius < 15) {
      setAdvice('Cuaca cukup dingin! Pertimbangkan untuk menanam tanaman tahan dingin.');
    } else if (tempCelsius >= 15 && tempCelsius < 25) {
      setAdvice('Suhu sangat cocok untuk sebagian besar tanaman. Waktu yang tepat untuk menanam!');
    } else if (tempCelsius >= 25 && tempCelsius < 30) {
      setAdvice('Cuaca hangat! Pastikan tanaman Anda mendapatkan cukup air.');
    } else {
      setAdvice('Cuaca panas! Berhati-hatilah terhadap stres panas pada tanaman.');
    }
  };

  const handleToggleTooltip = () => {
    setIsTooltipVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const tooltip = document.querySelector('.tooltip');
      const button = document.querySelector('.tooltip-button');

      if (tooltip && !tooltip.contains(event.target as Node) && button && !button.contains(event.target as Node)) {
        setIsTooltipVisible(false);
      }
    };

    if (isTooltipVisible) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isTooltipVisible]);

  return (
    <div className="relative">
      {weather && (
        <div className="flex items-center gap-1">
          <div className="tooltip-button rounded-full bg-gray-200 p-2 cursor-pointer" onClick={handleToggleTooltip}>
            <ThermometerSun className="h-5 w-5 text-primary" />
          </div>
          {isTooltipVisible && (
            <div className="tooltip top-12 right-0 md:top-10 md:w-44 absolute z-10 p-2 text-primary bg-gray-200 rounded-md shadow-md">
              <p>Suhu: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
              <p>Saran: {advice}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
