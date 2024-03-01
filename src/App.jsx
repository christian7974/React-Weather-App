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

  const [unit, changeUnit] = useState("C");

  const handleClick = () => {
    changeUnit(value => value === "C" ? "F" : "C");
  };

  return (
    <div className='h-24'>
      <InputPlace 
        value={tempLocation} 
        updateValue={updateTempLocation}
      />

      <UnitButton 
        onUnitClick={handleClick}
        unit={unit}
      />

      <button 
        className="bg-blue-100" 
        onClick={handleButtonClick}>
        Search Place
      </button>
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
