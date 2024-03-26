export default function RecentPlaces({recentPlaces}) {
    return (
        <>
            <ul className="bg-blue">
                {recentPlaces.map((place) => {
                    return <li key={place}>{place}</li>
                })}
            </ul>
        </>
    )
}