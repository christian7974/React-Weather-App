export default function RecentPlaceButton({place, onClick}) {
    return (
        <button 
            className="bg-blue-100 px-4 rounded-xl bg-blue mx-2"
            onClick={onClick}
        >
            {place}
        </button>
    )
}