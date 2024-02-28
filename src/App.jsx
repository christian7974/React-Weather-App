import { useState } from 'react';
import './App.css';
import ShowWeather from './ShowWeather';
function App() {
  const [weatherObject, updateWeatherObject] = useState({});
  
  return (
    <div className='h-24'>
      <ShowWeather 
        place={"London"} 
        weatherState={weatherObject} 
        updateWeatherObject={updateWeatherObject}
      />
      <input className='bg-white' />
    </div>
    
  );
}

export default App;
