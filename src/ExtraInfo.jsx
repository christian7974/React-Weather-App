export default function ExtraInfo({weatherState, unit}) {
    return (
        <div className="bg-orange-200">
            <p>Humidity: {weatherState.current.humidity}%</p>
            <p>Wind Direction: {weatherState.current.wind_dir}</p>
            <p>UV Index: {weatherState.current.uv}</p>
            {unit === "Customary" ? 
                <p>Windspeed: {weatherState.current.wind_kph} KPH</p> : 
                <p>Windspeed: {weatherState.current.wind_mph} MPH</p>
            }
            
        </div>
    )
}

