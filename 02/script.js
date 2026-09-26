const button = document.getElementById('search-button');
const input = document.getElementById('city-input');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function fetchWeather(city) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=a5592982275346029b3184754262609&q=${city}&aqi=yes`
    );
    return await promise.json();
};

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await fetchWeather(value);
    console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = `${result.location.localtime}`;
    cityTemp.innerText =  `${result.current.temp_c}°C`;
});

