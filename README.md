# 🌦️ My Weather API

A simple and interactive comic-style Weather App built using **HTML,
CSS, and JavaScript**.

The project uses our own weather data stored in a local `weather.json`
file instead of an external weather service.

------------------------------------------------------------------------

## 🚀 Features

-   🔑 API key validation
-   🌎 Search weather by city
-   🌡️ Temperature display
-   ☀️ Weather condition display
-   💧 Humidity display
-   💨 Wind speed display
-   ❌ Invalid API key handling
-   ❌ City not found handling
-   🔤 Case-insensitive city search
-   🎨 Comic-book / superhero-inspired UI
-   📱 Responsive design
-   📦 No external weather API required

------------------------------------------------------------------------

## 📁 Project Structure

``` text
My Weather API/
│
├── index.html
├── style.css
├── script.js
└── weather.json
```

### File Description

  -----------------------------------------------------------------------
  File                                Purpose
  ----------------------------------- -----------------------------------
  `index.html`                        Creates the webpage structure and
                                      input fields

  `style.css`                         Provides the comic-book visual
                                      design and responsive layout

  `script.js`                         Handles API-key validation, city
                                      search, and weather display

  `weather.json`                      Contains our own weather data
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 🔑 API Keys

The project currently accepts these API keys:

``` text
MY_WEATHER_API_12345
MY_WEATHER_API_67890
```

### Example

Enter:

``` text
API Key: MY_WEATHER_API_12345
City: Ahmedabad
```

Then click:

``` text
SEARCH!
```

The weather information will be displayed.

> **Important:** These are demonstration API keys implemented in
> frontend JavaScript. They are not secure secret keys because anything
> stored in browser-side JavaScript can be inspected by users.

------------------------------------------------------------------------

## 🌤️ Available Weather Data

The current `weather.json` contains data for:

-   Ahmedabad
-   Mumbai
-   Delhi
-   Bangalore
-   Rajkot

Example data:

``` json
{
    "Ahmedabad": {
        "temperature": 32,
        "weather": "Sunny",
        "humidity": 45,
        "windSpeed": 12
    }
}
```

------------------------------------------------------------------------

## 🔄 How It Works

The application follows this process:

``` text
User enters API Key
        ↓
User enters City
        ↓
User clicks Search
        ↓
API Key is validated
        ↓
City is searched in weather.json
        ↓
Weather data is found
        ↓
Weather information is displayed
```

------------------------------------------------------------------------

## ❌ Error Handling

### Empty API Key

If the user does not enter an API key:

``` text
API Key Required
Please enter your API key first.
```

### Invalid API Key

If the API key is incorrect:

``` text
Error 401
Invalid API key.
```

### Empty City

If the city field is empty:

``` text
City Required
Please enter a city name.
```

### City Not Found

If the city does not exist in `weather.json`:

``` text
Error 404
City not found.
```

------------------------------------------------------------------------

## 🛠️ Technologies Used

-   HTML5
-   CSS3
-   JavaScript
-   JSON
-   Fetch API

No backend framework or external weather API is required.

------------------------------------------------------------------------

## ▶️ How to Run

Because the project loads `weather.json` using `fetch()`, it is
recommended to run it using a local web server.

### Using VS Code

1.  Open the project folder in VS Code.
2.  Install the **Live Server** extension if needed.
3.  Right-click `index.html`.
4.  Select **Open with Live Server**.
5.  The Weather App will open in your browser.

------------------------------------------------------------------------

## 🧪 Test the Application

### Test 1 --- Valid API Key

``` text
API Key:
MY_WEATHER_API_12345

City:
Ahmedabad
```

Expected result:

``` text
Ahmedabad
Temperature: 32°C
Weather: Sunny
Humidity: 45%
Wind Speed: 12 km/h
```

### Test 2 --- Invalid API Key

``` text
API Key:
WRONG_KEY

City:
Ahmedabad
```

Expected result:

``` text
Error 401
Invalid API key.
```

### Test 3 --- City Not Found

``` text
API Key:
MY_WEATHER_API_12345

City:
London
```

Expected result:

``` text
Error 404
City not found.
```

### Test 4 --- Case-Insensitive Search

All of these should work:

``` text
Ahmedabad
ahmedabad
AHMEDABAD
aHmEdAbAd
```

------------------------------------------------------------------------

## 🎨 Design

The interface uses a comic-book-inspired visual style featuring:

-   Bold typography
-   Red, blue, yellow, and black comic aesthetics
-   Comic burst elements
-   Heavy borders
-   Drop shadows
-   Interactive search button
-   Responsive mobile layout

------------------------------------------------------------------------

## ⚠️ Important Note About This API

This project demonstrates the **concept of an API and API-key
authentication entirely on the frontend**.

It is not a secure production API because:

``` text
HTML/CSS/JavaScript
        ↓
Runs in the user's browser
        ↓
JavaScript can be inspected
        ↓
API keys can be viewed
```

A truly secure API would require a backend or serverless function where
the API key and data-access rules can be protected.

For this project, however, the goal is to demonstrate:

-   API key validation
-   Request handling
-   Data lookup
-   JSON data
-   Error status concepts
-   Frontend API interaction

------------------------------------------------------------------------

## 📌 Current API Response Concept

A successful request internally produces a response similar to:

``` json
{
    "success": true,
    "status": 200,
    "data": {
        "city": "Ahmedabad",
        "temperature": 32,
        "weather": "Sunny",
        "humidity": 45,
        "windSpeed": 12
    }
}
```

An invalid API key produces:

``` json
{
    "success": false,
    "status": 401,
    "message": "Invalid API key."
}
```

A missing city produces:

``` json
{
    "success": false,
    "status": 404,
    "message": "City not found."
}
```

------------------------------------------------------------------------

## 👨‍💻 Project Summary

**My Weather API** is a frontend weather application that demonstrates
how an application can:

1.  Accept an API key.
2.  Validate the API key.
3.  Accept a city name.
4.  Search locally stored weather data.
5.  Return weather information.
6.  Display the result interactively.
7.  Handle errors using API-style status codes.

------------------------------------------------------------------------

## 📄 License

This project is intended for learning and educational purposes.
