const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': PUT_YOUR_API_KEY_HERE,
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = async (city) => {
    try {
        const response = await fetch(url+city, options);
        const result = await response.json();
        cityName.innerHTML=city 
        heading1.innerHTML=result.temp
        heading2.innerHTML=result.cloud_pct
        heading3.innerHTML=result.wind_speed
        Cloud_pct.innerHTML = result.cloud_pct
        Temp.innerHTML = result.temp
        Feels_like.innerHTML = result.feels_like
        Humidity.innerHTML = result.humidity
        Min_temp.innerHTML = result.min_temp
        Max_temp.innerHTML = result.max_temp
        Wind_speed.innerHTML = result.wind_speed
        Wind_degrees.innerHTML = result.wind_degrees
        Sunrise.innerHTML = result.sunrise
    } catch (error) {
        console.error(error);
    }
}
const getWeather1 = async (city) => {
    try {
        const response = await fetch(url+city, options);
        const result = await response.json();
        Cloud_pct1.innerHTML = result.cloud_pct
        Temp1.innerHTML = result.temp
        Feels_like1.innerHTML = result.feels_like
        Humidity1.innerHTML = result.humidity
        Min_temp1.innerHTML = result.min_temp
        Max_temp1.innerHTML = result.max_temp
        Wind_speed1.innerHTML = result.wind_speed
        Wind_degrees1.innerHTML = result.wind_degrees
        Sunrise1.innerHTML = result.sunrise
    } catch (error) {
        console.error(error);
    }
}
const getWeather2 = async (city) => {
    try {
        const response = await fetch(url+city, options);
        const result = await response.json();
        Cloud_pct2.innerHTML = result.cloud_pct
        Temp2.innerHTML = result.temp
        Feels_like2.innerHTML = result.feels_like
        Humidity2.innerHTML = result.humidity
        Min_temp2.innerHTML = result.min_temp
        Max_temp2.innerHTML = result.max_temp
        Wind_speed2.innerHTML = result.wind_speed
        Wind_degrees2.innerHTML = result.wind_degrees
        Sunrise2.innerHTML = result.sunrise
    } catch (error) {
        console.error(error);
    }
}
const getWeather3 = async (city) => {
    try {
        const response = await fetch(url+city, options);
        const result = await response.json();
        Cloud_pct3.innerHTML = result.cloud_pct
        Temp3.innerHTML = result.temp
        Feels_like3.innerHTML = result.feels_like
        Humidity3.innerHTML = result.humidity
        Min_temp3.innerHTML = result.min_temp
        Max_temp3.innerHTML = result.max_temp
        Wind_speed3.innerHTML = result.wind_speed
        Wind_degrees3.innerHTML = result.wind_degrees
        Sunrise3.innerHTML = result.sunrise
    } catch (error) {
        console.error(error);
    }
}
const getWeather4 = async (city) => {
    try {
        const response = await fetch(url+city, options);
        const result = await response.json();
        Cloud_pct4.innerHTML = result.cloud_pct
        Temp4.innerHTML = result.temp
        Feels_like4.innerHTML = result.feels_like
        Humidity4.innerHTML = result.humidity
        Min_temp4.innerHTML = result.min_temp
        Max_temp4.innerHTML = result.max_temp
        Wind_speed4.innerHTML = result.wind_speed
        Wind_degrees4.innerHTML = result.wind_degrees
        Sunrise4.innerHTML = result.sunrise
    } catch (error) {
        console.error(error);
    }
}
getWeather("Delhi")
let submit = document.getElementById("submit")
submit.addEventListener("click",(e)=>{
    e.preventDefault() 
    getWeather(city.value)
})
getWeather1("Shanghai")
getWeather2("Boston")
getWeather3("Lucknow")
getWeather4("Kolkata")
