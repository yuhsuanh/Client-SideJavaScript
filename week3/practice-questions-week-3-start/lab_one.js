// JavaScript Document

//Error 1. Using single quote / dougle quote
let para = document.querySelector('p');

let  select = document.querySelector('select');
//Error 2. Missing a closing bracket
select.addEventListener('change', setWeather);

//Error 3. setweather -> setWeather
function setWeather() {
  let choice = select.value;
  
  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast': 
      //Error 4. Escape Character need to use slash
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  //Error 5. Missing a closing bracket
  }
}