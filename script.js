const cityInput = document.getElementById("cityInput");
const apiKeyInput = document.getElementById("apiKeyInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");


// ========================================
// OUR API KEYS
// ========================================

const API_KEYS = [
    "MY_WEATHER_API_12345",
    "MY_WEATHER_API_67890"
];


// ========================================
// WEATHER DATA
// ========================================

let weatherData = {};


// ========================================
// LOAD WEATHER DATA
// ========================================

fetch("weather.json")

    .then(function (response) {

        if (!response.ok) {

            throw new Error(
                "Weather data could not be loaded."
            );

        }

        return response.json();

    })

    .then(function (data) {

        weatherData = data;

        console.log(
            "Weather data loaded successfully."
        );

    })

    .catch(function (error) {

        console.error(error);

    });


// ========================================
// OUR WEATHER API
// ========================================

function getWeather(city, apiKey) {


    // Check API key
    if (!API_KEYS.includes(apiKey)) {

        return {

            success: false,

            status: 401,

            message: "Invalid API key."

        };

    }


    // Find city
    let cityFound = null;


    for (const cityName in weatherData) {

        if (
            cityName.toLowerCase() ===
            city.toLowerCase()
        ) {

            cityFound = cityName;

            break;

        }

    }


    // City not found
    if (cityFound === null) {

        return {

            success: false,

            status: 404,

            message: "City not found."

        };

    }


    // Get weather
    const weather = weatherData[cityFound];


    // Return weather
    return {

        success: true,

        status: 200,

        data: {

            city: cityFound,

            temperature: weather.temperature,

            weather: weather.weather,

            humidity: weather.humidity,

            windSpeed: weather.windSpeed

        }

    };

}


// ========================================
// SEARCH BUTTON
// ========================================

searchBtn.addEventListener(
    "click",
    function () {


        const apiKey = apiKeyInput.value.trim();

        const city = cityInput.value.trim();


        // ====================================
        // API KEY REQUIRED
        // ====================================

        if (apiKey === "") {

            weatherResult.innerHTML = `

                <div class="welcome">

                    <div class="weather-icon">
                        🔑
                    </div>

                    <h2>API KEY!</h2>

                    <p>
                        ENTER YOUR API KEY FIRST!
                    </p>

                </div>

            `;

            return;

        }


        // ====================================
        // CITY REQUIRED
        // ====================================

        if (city === "") {

            weatherResult.innerHTML = `

                <div class="welcome">

                    <div class="weather-icon">
                        🌎
                    </div>

                    <h2>CITY!</h2>

                    <p>
                        ENTER A CITY NAME!
                    </p>

                </div>

            `;

            return;

        }


        // ====================================
        // CALL OUR API
        // ====================================

        const response = getWeather(
            city,
            apiKey
        );


        // ====================================
        // API ERROR
        // ====================================

        if (!response.success) {

            weatherResult.innerHTML = `

                <div class="welcome">

                    <div class="weather-icon">
                        💥
                    </div>

                    <h2>
                        ERROR ${response.status}
                    </h2>

                    <p>
                        ${response.message}
                    </p>

                </div>

            `;

            return;

        }


        // ====================================
        // WEATHER DATA
        // ====================================

        const data = response.data;


        // ====================================
        // DISPLAY WEATHER
        // ====================================

        weatherResult.innerHTML = `

            <h2>
                ${data.city}
            </h2>

            <p>
                🌡️ Temperature:
                ${data.temperature}°C
            </p>

            <p>
                ☀️ Weather:
                ${data.weather}
            </p>

            <p>
                💧 Humidity:
                ${data.humidity}%
            </p>

            <p>
                💨 Wind Speed:
                ${data.windSpeed} km/h
            </p>

        `;

    }
);