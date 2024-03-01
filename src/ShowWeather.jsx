import { useEffect } from "react";
const apiUrl = process.env.REACT_APP_WEATHER_APP_URL;
export default function ShowWeather({place, weatherState, updateWeatherObject, unit}) {  
      useEffect(() => 
        {
          if (place) {
            fetch(apiUrl + place)
              .then(response => response.json())
              .then((json) => {
              updateWeatherObject(json);
              console.log(json);
              if (json.error) {
                updateWeatherObject({error: "Something went wrong. Please try again."})
              }
          })
          .catch(error => console.log("Error"));
          }
          }
          , [updateWeatherObject, place]); 
    return (
        <>
          {weatherState && weatherState.location && (
            <>
              <p className='bg-indigo-500'>{weatherState.location.name}</p>
              <p className='bg-indigo-500'>{weatherState.location.region}</p> 
              {unit === "C" ? 
                <p className='bg-indigo-500'>{weatherState.current.temp_c}&#176;C</p> : 
                <p className='bg-indigo-500'>{weatherState.current.temp_f}&#176;F</p>
              }
              <img src={weatherState.current.condition.icon} alt={weatherState.current.condition.text} />
            </> 
          )}
          {weatherState.error && (
            <p className="bg-indigo-500">{weatherState.error}</p>
          )}
        </>
    );
}

/*
{
    "location": {
        "name": "Boston",
        "region": "Massachusetts",
        "country": "United States of America",
        "lat": 42.36,
        "lon": -71.06,
        "tz_id": "America/New_York",
        "localtime_epoch": 1709213954,
        "localtime": "2024-02-29 8:39"
    },
    "current": {
        "last_updated_epoch": 1709213400,
        "last_updated": "2024-02-29 08:30",
        "temp_c": -2.2,
        "temp_f": 28,
        "is_day": 1,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
        },
        "wind_mph": 15,
        "wind_kph": 24.1,
        "wind_degree": 280,
        "wind_dir": "W",
        "pressure_mb": 1019,
        "pressure_in": 30.1,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 39,
        "cloud": 25,
        "feelslike_c": -8.8,
        "feelslike_f": 16.2,
        "vis_km": 16,
        "vis_miles": 9,
        "uv": 2,
        "gust_mph": 18.9,
        "gust_kph": 30.3
    }
}
*/