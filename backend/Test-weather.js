require('dotenv').config();
const axios = require('axios');

console.log('🌤️  Testing OpenWeather API...\n');

// Check if API key exists
const apiKey = process.env.OPENWEATHER_API_KEY;
const latitude = process.env.LATITUDE || 34.3450;
const longitude = process.env.LONGITUDE || 72.3588;

if (!apiKey) {
  console.error('❌ OPENWEATHER_API_KEY not found in .env file!');
  process.exit(1);
}



console.log('🔑 API Key:', apiKey.substring(0, 8) + '...' + apiKey.substring(apiKey.length - 4));
console.log('📍 Location: Lat=' + latitude + ', Lon=' + longitude);
console.log('');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

console.log('📡 Testing API call...');
console.log('URL:', url.replace(apiKey, 'API_KEY_HIDDEN'));
console.log('');

axios.get(url)
  .then((response) => {
    console.log('✅ SUCCESS! Weather API is working!\n');
    console.log('📊 Response Data:');
    console.log('   Location:', response.data.name);
    console.log('   Country:', response.data.sys.country);
    console.log('   Temperature:', response.data.main.temp + '°C');
    console.log('   Feels Like:', response.data.main.feels_like + '°C');
    console.log('   Humidity:', response.data.main.humidity + '%');
    console.log('   Weather:', response.data.weather[0].description);
    console.log('   Cloud Coverage:', response.data.clouds.all + '%');
    console.log('   Wind Speed:', response.data.wind.speed + ' m/s');
    console.log('\n🎉 Your Weather API is working perfectly!');
  })
  .catch((err) => {
    console.error('❌ FAILED! Weather API Error:\n');
    
    if (err.response) {
      console.error('Status Code:', err.response.status);
      console.error('Error Message:', err.response.data.message || err.response.statusText);
      console.error('');
      
      if (err.response.status === 401) {
        console.error('🔧 Problem: Invalid API Key');
        console.error('Solutions:');
        console.error('1. Check if API key is correct in .env file');
        console.error('2. API key takes 10-120 minutes to activate after creation');
        console.error('3. Get new API key from: https://home.openweathermap.org/api_keys');
      } else if (err.response.status === 429) {
        console.error('🔧 Problem: Too many requests (Rate limit exceeded)');
        console.error('Solutions:');
        console.error('1. Wait a few minutes and try again');
        console.error('2. Free tier allows 60 calls/minute');
      } else if (err.response.status === 404) {
        console.error('🔧 Problem: Invalid coordinates or city not found');
        console.error('Solutions:');
        console.error('1. Check latitude and longitude values');
        console.error('2. Current: Lat=' + latitude + ', Lon=' + longitude);
      }
    } else if (err.request) {
      console.error('🔧 Problem: No response from server');
      console.error('Solutions:');
      console.error('1. Check your internet connection');
      console.error('2. Check if firewall is blocking the request');
      console.error('3. Try again in a few moments');
    } else {
      console.error('Error:', err.message);
    }
    
    process.exit(1);
  });