/*
	Weather Api From Weather Unlocked
		https://developer.weatherunlocked.com/

	How to use the Weather Unlocked API?
		Document https://developer.weatherunlocked.com/documentation/localweather
*/

let marquee = document.getElementById('weather_marquee');

if (navigator.geolocation) {
	marquee.textContent = 'Can not locate your position!!!';
	navigator.geolocation.getCurrentPosition(setMarquee);
} else {
	marquee.textContent = 'Can not locate your position!!!';
}

//get response from api
function setMarquee(position) {
	const apiUrl = 'http://api.weatherunlocked.com/api/current/';
	const appId = '?app_id=fc03c2d2';
	const appKey = '&app_key=f79242dc9c84df29e47a3ae18a949685';

	let fullUrl = apiUrl
					 + round2DecimalPlace(position.coords.latitude) + ','
					 + round2DecimalPlace(position.coords.longitude)
					 + appId + appKey;

	var request = new XMLHttpRequest();
	request.addEventListener("load", parseWeather);
	request.open("GET", fullUrl);
	request.responseType = "json";
	request.send();
}

//set weather information to marquee
function parseWeather(xmlObj) {
	const space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

	data = xmlObj.currentTarget.response;

	marqueeText = "<span class='red'>Current Weather Report near Your Place:</span>" + space
					+ "Weather: " + "<img style='vertical-align: middle;' alt='weather icon' src='img/"+ data.wx_icon+"'>" + data.wx_desc + space
					+ "Temperature: " + data.temp_c + "°C" + space
					+ "Feel Like: " + data.feelslike_c + "°C" + space
					+ "Humidity: " + data.humid_pct + "%" + space
					+ "Amount of Total Cloud: " + data.cloudtotal_pct;

	marquee.innerHTML = marqueeText;
}

//Round decimal to 2 decimal value
function round2DecimalPlace(value) {
	return Math.round(value * 100) / 100;
}