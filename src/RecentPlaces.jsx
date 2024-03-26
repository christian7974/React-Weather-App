export default function RecentPlaces({recentPlaces, setSelectedFromList, updateFinalLocation}) {
    return (
        <>
            <ul className="bg-blue">
                {recentPlaces.map((place) => {
                    return (<li 
                            key={place}
                            className="hover:cursor-pointer margin-y-2"
                            onClick={() => {
                                setSelectedFromList(place);
                                updateFinalLocation(null);
                                }}>{place}
                        </li>)
                })}
            </ul>
        </>
    )
}