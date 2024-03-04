export default function extraInfo({weatherState}) {
    return (
        <>
            <h2>Extra Info</h2>
            <p>Humidity: {weatherState.main.humidity}%</p>
            <p>Pressure: {weatherState.main.pressure} hPa</p>
            <p>Wind: {weatherState.wind.speed} m/s</p>
        </>
    )
}