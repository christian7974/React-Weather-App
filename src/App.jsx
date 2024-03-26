import { useState, useEffect } from 'react';
import './App.css';
import ShowWeather from './ShowWeather';
import InputPlace from './InputPlace';
import UnitButton from './UnitButton';
import RecentPlaceButton from './RecentPlaceButton';
import RecentPlaces from './RecentPlaces';

function App() {
  const [weatherObject, updateWeatherObject] = useState({});
  const [tempLocation, updateTempLocation] = useState('');
  const [finalLocation, updateFinalLocation] = useState('');
  const [extraInfoVisible, setExtraInfoVisible] = useState(false);

  const recentPlacesArray = JSON.parse(localStorage.getItem('recentPlaces')) || [];
  const recentPlace = recentPlacesArray[recentPlacesArray.length - 2] || '';

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

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

  

  const handleSearchPlaceClick = () => {
    updateFinalLocation(tempLocation);
    if (!recentPlacesArray.includes(toTitleCase(tempLocation))) {
      recentPlacesArray.push(toTitleCase(tempLocation));
    }
    localStorage.setItem('recentPlaces', JSON.stringify(recentPlacesArray));
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
        onClick={handleSearchPlaceClick}>
        Search Place
      </button>

      <UnitButton 
        onUnitClick={handleClick}
        unit={unit}
      />
      {recentPlace && 
        <RecentPlaceButton
        place={recentPlace}
        onClick={() => updateFinalLocation(recentPlace)}
        />}
      

      <ShowWeather 
        place={finalLocation} 
        weatherState={weatherObject} 
        updateWeatherObject={updateWeatherObject}
        unit={unit}
        showExtraInfo={extraInfoVisible}
      />
      <RecentPlaces recentPlaces={recentPlacesArray} />
    </div>
    
  );
}

export default App;
