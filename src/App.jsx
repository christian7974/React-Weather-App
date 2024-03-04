import { useState } from 'react';
import './App.css';
import ShowWeather from './ShowWeather';
import InputPlace from './InputPlace';
import UnitButton from './UnitButton';

function App() {
  const [weatherObject, updateWeatherObject] = useState({});
  const [tempLocation, updateTempLocation] = useState('Boston');
  const [finalLocation, updateFinalLocation] = useState('');

  const handleButtonClick = () => {
    updateFinalLocation(tempLocation);
  };

  const [unit, changeUnit] = useState("F");

  const handleClick = () => {
    changeUnit(value => value === "C" ? "F" : "C");
  };
  console.log(weatherObject)
  return (
    <div className='h-24 text-base text-center space-x-5'>
      <h1>Enter a place to search the weather at:</h1>

      <InputPlace 
        value={tempLocation} 
        updateValue={updateTempLocation}
      />

      <button 
        className="bg-blue-100 px-4" 
        onClick={handleButtonClick}>
        Search Place
      </button>

      <UnitButton 
        onUnitClick={handleClick}
        unit={unit}
      />

      <ShowWeather 
        place={finalLocation} 
        weatherState={weatherObject} 
        updateWeatherObject={updateWeatherObject}
        unit={unit}
      />
    </div>
    
  );
}

export default App;
