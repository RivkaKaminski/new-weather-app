import React from 'react';
import '../weatherCard.css'; // עיצוב הכרטיס

function WeatherCard({ name, description, temp, feelsLike, humidity }) {
    return (
        <div className="weather-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>טמפרטורה: {temp}°C</p>
            <p>מורגשת: {feelsLike}°C</p>
            <p>לחות: {humidity}%</p>
            <Icon feelsLike={feelsLike} />
        </div>
    );
}

function Icon({ feelsLike }) {
    if (feelsLike < 20) {
        return <img src="/cloud.png" alt="Cold" />;
    } else if (feelsLike >= 20 && feelsLike <= 30) {
        return <img src="/pleasment.png" alt="Pleasant" />;
    } else {
        return <img src="/sun.png" alt="Hot" />;
    }
}

export default WeatherCard;
