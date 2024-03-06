# React Weather App
## Christian Tropeano

## Description
This is a weather app developed in React that can display the weather in different parts of the world. I used React and Tailwind to style the app, along with an API that I used to get the information on the weather. 

I wanted to get comfortable working with React and I felt that a simple project like this would be an excellent way to hone my skills using React and Tailwind.

## Usage
While this app is not public anywhere yet, this section will be updated accordingly when the app is published.

## Features
The app can show the user multiple pieces of information on the weather in different parts of the world and the user can toggle between metric or customary units. The user also has the ability to show or hide extra information (including the humidity, wind direction and wind speed) by clicking cmd + k on Mac or ctrl + k on Windows.

### Error Handling
When a user enters in an incorrect location (either they mispelled something or the location does not exist), a different JSON object is returned and the error message is displayed on the page, prompting the user to enter the location again.

## Future Enhancements/Features
- One thing that I want to **fix is that the App component is re-rendered** evertime a keystroke is entered and when the user presses the "Metric/Customary" button or the keystroke to show extra info. This leads to extra, unnecessary API calls.

- I also want to add the option to **compare two places and show the differences between the two** (for instance,show the different in temperature, windspeed, etc) so that way if the user wants to travel somewhere, they can compare multiple places before going there.

- I also want to experiment with the Context API to manage state, as I feel like I am managing too many states in my App component and I feel like I could make that component leaner by using the Context API or managing state in child components rather than in the App component.

## Challenges Faced
One challenge that I faced was working with the Fetch API and the useEffect hook in React. I knew that I needed to call the API in that component, however I needed to get the API from an .env file and the place that the user entered from a different component. I had to pass the props into the correct component and also learn how to get the .env variables from the .env file which I did not know before. 

Another challenge that I faced was displaying the information. When the app first opens, there is no object to display, so the app would crash when it first opened. I solved this by adding this line of code ```weatherState && weatherState.location``` when I output the weather information. This code ensures that weather object exists before displaying anything. If it does not exist, then nothing will display and the app would not crash.

## Credits
I learned React through the Udemy Course *React - The Complete Guide 2024* where I worked on multiple guided projects and is where I first started to learn React among other topics (including Tailwind, Styled Components, the Context API, etc). 

The API that I used was from [weatherAPI.com](https://www.weatherapi.com/)
, an API whose GET method retrieves information about a specified place.