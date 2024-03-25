import { useState, useEffect } from 'react';
import './App.css';
import ShowWeather from './ShowWeather';
import InputPlace from './InputPlace';
import UnitButton from './UnitButton';

function App() {
  const [weatherObject, updateWeatherObject] = useState({});
  const [tempLocation, updateTempLocation] = useState('');
  const [finalLocation, updateFinalLocation] = useState('');
  const [extraInfoVisible, setExtraInfoVisible] = useState(false);

  const recentPlace = localStorage.getItem('recentPlace') || '';

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        setExtraInfoVisible(visible => !visible);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  

  const handleButtonClick = () => {
    updateFinalLocation(tempLocation);
    localStorage.setItem('recentPlace', tempLocation);
  };

  const [unit, changeUnit] = useState("Customary");

  const handleClick = () => {
    changeUnit(value => value === "Metric" ? "Customary" : "Metric");
  };
  return (
    <div className='h-screen text-base text-center space-x-5 bg-slate'>
      <h1 className='text-white'>Enter a place to search the weather at:</h1>

      <InputPlace 
        value={tempLocation} 
        updateValue={updateTempLocation}
      />

      <button 
        className="px-4 bg-green rounded-xl" 
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
        showExtraInfo={extraInfoVisible}
      />
    </div>
    
  );
}

export default App;
