import { useEffect } from "react";
const apiUrl = process.env.REACT_APP_WEATHER_APP_URL;
export default function ShowWeather({place, weatherState, updateWeatherObject}) {    
      useEffect(() => 
        {
          if (place) {
            fetch(apiUrl + place)
              .then(response => response.json())
              .then((json) => {
              updateWeatherObject(json);
          })
          .catch(error => console.log("error"));
          }
          }
          , [updateWeatherObject, place]); 
    return (
        <>
        {weatherState && weatherState.location && (
        <p className='bg-indigo-500'>{weatherState.location.region}</p>
      )}
        </>
    );
}