let cityName = document.querySelector('.name');
let cityTemp = document.querySelector('.temp');
let cityHumidity = document.querySelector('.humidity')
let cityWS = document.querySelector('.WS')
const iconImg = document.querySelector('img')
let button = document.querySelector('button')
let inputValue = document.querySelector('input')

// let description = document.querySelector('.desc');
// let temp = document.querySelector('.temp');

button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=ba2aac9b1d7724e46122e0527e8241b3'+'&units=imperial'+'&exclude=hourly,daily')
.then(response=> response.json())
.then(data => {


  console.log(data)
  console.log(Object.keys(data))

  cityName.innerHTML = data.name 
  cityTemp.innerHTML = data.main.temp
  cityHumidity.innerHTML = data.main.humidity
  cityWS.innerHTML = data.wind.speed 
const iconCode = data.weather[0].icon
 iconImg.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`

    // let nameValue = data['name'];
    // let tempValue = data['main']['temp'];
    // let descriptionvalue = data['weather'][0]['desc'];

    // name.innerHTML = nameValue;
    // temp.innerHTML = tempValue;
    // description.innerHTML = descriptionValue;
})

.catch(err => alert("Wrong city name!"))
})