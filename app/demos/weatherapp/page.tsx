'use client';

import { useState, useEffect } from 'react';
import styles from './weather.module.css';

export default function WeatherApp() {
    const [city, setCity] = useState('Dallas');
    const [weatherData, setWeatherData] = useState<any>(null);
    const [search, setSearch] = useState('');

    const apiKey = "ca2b050c1672b5e5969c355d3226d3e5";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";

    async function checkWeather(cityName: string) {
        try {
            const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
            if (response.status === 404) {
                console.error("City not found");
                return;
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        checkWeather('Dallas');
    }, []);

    const handleSearch = () => {
        if (search) {
            checkWeather(search);
        }
    };

    const getWeatherIcon = (main: string) => {
        switch (main) {
            case "Clouds": return "/demos/weatherapp/images/clouds.png";
            case "Clear": return "/demos/weatherapp/images/clear.png";
            case "Rain": return "/demos/weatherapp/images/rain.png";
            case "Drizzle": return "/demos/weatherapp/images/drizzle.png";
            case "Mist": return "/demos/weatherapp/images/mist.png";
            default: return "/demos/weatherapp/images/rain.png";
        }
    };

    return (
        <div className={styles.container}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '50px',
                    marginBottom: '50px',
                }}
            >
                <h1>Weather App</h1>
            </div>
            <div className={styles.card}>
                <div className={styles.search}>
                    <input
                        type="text"
                        placeholder="Enter city name"
                        spellCheck="false"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <button onClick={handleSearch}>
                        <img src="/demos/weatherapp/images/search.png" alt="Search Icon" />
                    </button>
                </div>

                {weatherData ? (
                    <div className={styles.weather}>
                        <img src={getWeatherIcon(weatherData.weather[0].main)} alt="Weather Icon" className={styles['weather-icon']} />
                        <h1 className={styles.temp}>{Math.round(weatherData.main.temp)}°F</h1>
                        <h2 className={styles.city}>{weatherData.name}</h2>
                        <div className={styles.details}>
                            <div className={styles.col}>
                                <img src="/demos/weatherapp/images/humidity.png" alt="Humidity Image" />
                                <div>
                                    <p className={styles.humidity}>{weatherData.main.humidity}%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className={styles.col}>
                                <img src="/demos/weatherapp/images/wind.png" alt="Wind Image" />
                                <div>
                                    <p className={styles.wind}>{weatherData.wind.speed} mph</p>
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.weather}>
                        <h1 className={styles.temp}>Loading...</h1>
                    </div>
                )}
            </div>
        </div>
    );
}
