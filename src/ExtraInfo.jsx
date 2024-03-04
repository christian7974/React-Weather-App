export default function ExtraInfo({weatherState}) {
    // TODO: Add more informationt to display
    return (
        <div className="bg-orange-200">
            <p>Humidity: {weatherState.current.humidity}%</p>
        </div>
    )
}

