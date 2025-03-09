const apiKey='4f8d0fb5d195fafa51572cac154b8777';
let city='bhagalpur';
let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4f8d0fb5d195fafa51572cac154b8777&units=metric`;

document.querySelector('.searchImg').addEventListener('click',()=>{
  city=document.querySelector('input').value;
  api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4f8d0fb5d195fafa51572cac154b8777&units=metric`;
  fillWeatherInfo();
})
let weatherConditionImg = {
  'Clear': 'clear.png',      // For clear sky
  'Rain': 'rain.png',        // For any rain condition
  'Mist': 'mist.png',        // For mist/fog/haze
  'Snow': 'snow.png',        // For snow and sleet conditions
  'Drizzle': 'drizzle.png',  // For drizzle
  'Clouds': 'clouds.png' ,    // For any cloud condition
  'Haze':'mist.png'
};

var weatherData;
async function fetchWeather(){
  await fetch(api)
  .then(response => response.json())  // Parse the response as JSON
  .then(data => {
    weatherData=data;
  })    // Handle the data
  .catch(error => console.error('Error:', error)); // Handle any errors 
}
async function fillWeatherInfo() {
  await fetchWeather();
  let weatherCondition;
  try {
    weatherCondition=weatherData.weather[0].main;
  } catch (e) {
    alert('Please Enter a Valid City Name');
  
  }
  console.log(weatherCondition);
  let temp=weatherData.main.temp+'°c';
  let windSpeed=weatherData.wind.speed +'m/s';
  let humidity=weatherData.main.humidity+'%';
  let weatherImg=weatherConditionImg[weatherCondition];
  console.log(weatherImg);
  document.querySelector('.weatherImg').querySelector('img').src=weatherImg;
  document.querySelector('.cityName').innerHTML=weatherData.name;
  document.querySelector('.temperature').innerHTML=temp;
  document.querySelector('.windSpeed').querySelector('h3').innerHTML=windSpeed;
  document.querySelector('.humidity').querySelector('h3').innerHTML=humidity;
}
fillWeatherInfo();