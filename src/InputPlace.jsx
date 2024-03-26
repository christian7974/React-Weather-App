export default function InputPlace({value, updateValue}) {
    function handleInputChange(event) {
      updateValue(event.target.value);
    } 
    return (<>
        <input 
            className='border-2 border-gray-400 bg-white mx-2' 
            type='text' 
            value={value} 
            onChange={handleInputChange}
            placeholder="Enter a place"
        />
    </>)
}