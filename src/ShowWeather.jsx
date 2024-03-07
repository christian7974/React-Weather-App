import { useEffect } from "react";
import ExtraInfo from "./ExtraInfo";

const apiUrl = process.env.REACT_APP_WEATHER_APP_URL;

export default function ShowWeather({place, weatherState, updateWeatherObject, unit, showExtraInfo}) {
      useEffect(() => 
        {
          if (place) {
            fetch(apiUrl + place)
              .then(response => response.json())
              .then((json) => {
                updateWeatherObject(json);
                if (json.error) {
                  updateWeatherObject({error: "Something went wrong. Please try again."})
                }
          })
          .catch(error => console.log("Error"));
          }
          }
          , [updateWeatherObject, place]);
    return (
        <div className="pt-4">
          {weatherState && weatherState.location && (
            <div className="bg-grey p-4 space-y-4 font-sans text-center">
              <p className="mb-4">{weatherState.location.name}</p>
              <p className="mb-4">{weatherState.location.region}</p> 
              {unit === "Customary" ? 
                <p className="mb-4">{weatherState.current.temp_c}&#176;C</p> : 
                <p className="mb-4">{weatherState.current.temp_f}&#176;F</p>
              }
              <img src={weatherState.current.condition.icon} alt={"Icon showing the weather as " + weatherState.current.condition.text} className="mx-auto h-35" />
              <p className="mb-4">{weatherState.current.condition.text}</p>
            </div> 
          )}
          {weatherState.error && (
            <p className="bg-indigo-500">{weatherState.error}</p>
          )}
          
          {weatherState && weatherState.current && showExtraInfo &&(
            <ExtraInfo weatherState={weatherState} unit={unit} />
          )}
        </div>
    );
}