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
            <div className="bg-red-100 p-4 space-y-4 font-sans">
              <p className="mb-4">{weatherState.location.name}</p>
              <p className="mb-4">{weatherState.location.region}</p> 
              {unit === "C" ? 
                <p className="mb-4">{weatherState.current.temp_c}&#176;C</p> : 
                <p className="mb-4">{weatherState.current.temp_f}&#176;F</p>
              }
              <img src={weatherState.current.condition.icon} alt={weatherState.current.condition.text} />
            </div> 
          )}
          {weatherState.error && (
            <p className="bg-indigo-500">{weatherState.error}</p>
          )}
        </>
    );
}