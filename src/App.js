import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
const apiUrl = process.env.REACT_APP_WEATHER_APP_URL;
function App() {
  const [weatherObject, updateWeatherObject] = useState({});

  const fetchDataUpdateState = () => {
    fetch(apiUrl + "Boston")
      .then(response => response.json())
      .then((json) => {
        updateWeatherObject(json);
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {fetchDataUpdateState()}, []);

  return (
    <div className='bg-indigo-500'>
      {weatherObject && weatherObject.location && (
        <p>{weatherObject.location.region}</p>
      )}
    </div>
  );
}

export default App;
