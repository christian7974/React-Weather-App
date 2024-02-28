export default function InputPlace({value, updateValue}) {
    // write code to handle the input change event
    function handleInputChange(event) {
      updateValue(event.target.value);
    } 
    return (<>
        <input 
            className='border-2 border-gray-400 bg-white' 
            type='text' 
            value={value} 
            onChange={handleInputChange}
        />
    </>)
}