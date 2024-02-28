import { useEffect } from "react";
const apiUrl = process.env.REACT_APP_WEATHER_APP_URL;
export default function ShowWeather({place, weatherState, updateWeatherObject}) {
    const fetchDataUpdateState = () => {
        fetch(apiUrl + place)
          .then(response => response.json())
          .then((json) => {
            updateWeatherObject(json);
          })
          .catch(error => console.error(error));
      }
    
      useEffect(() => {fetchDataUpdateState()}); 
    return (
        <>
        {weatherState && weatherState.location && (
        <p className='bg-indigo-500'>{weatherState.location.region}</p>
      )}
        </>
    );
}