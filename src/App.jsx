import { useState } from 'react';
import './App.css';
import ShowWeather from './ShowWeather';
import InputPlace from './InputPlace';
function App() {
  const [weatherObject, updateWeatherObject] = useState({});
  const [tempLocation, updateTempLocation] = useState('Boston');
  const [finalLocation, updateFinalLocation] = useState('');

  const handleButtonClick = () => {
    updateFinalLocation(tempLocation)
  };
  return (
    <div className='h-24'>
      <InputPlace value={tempLocation} 
        onChange={updateTempLocation}
        updateValue={updateTempLocation}
        />
        <button className="bg-blue-100" onClick={handleButtonClick}>Hello</button>
      <ShowWeather 
        place={finalLocation} 
        weatherState={weatherObject} 
        updateWeatherObject={updateWeatherObject}
      />
    </div>
    
  );
}

export default App;
