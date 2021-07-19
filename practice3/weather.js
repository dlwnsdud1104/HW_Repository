const input = document.querySelector('#city')
const button = document.querySelector('#submit')
const weatherBox = document.querySelector('#weatherBox')
const cities = ['London', 'Madrid', 'Paris']

const API_KEY = '0dfb8843f7e30a9db24486ca72e78bae'

button.addEventListener('click', async () => {
  //input의 값을 가져와서 도시이름으로 url에 넣는다.
  const city = input.value

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    // response받아서 weatherBox에 적절하게 넣어준다.

    const { main, description, icon } = res.data.weather[0];
    const temp = Math.round(res.data.main.temp - 273.15);
    const name = res.data.name

    //사용자에게 보여주기
    weatherBox.innerHTML = `
        <div id="weather">
        <img class="icon" src="http://openweathermap.org/img/w/${icon}.png">
        
        <div class="name">${name}</div>
        <br>
        <div class="temp">${temp}°C</div>
        <br>
        <div class="main">${main}</div>
        <br>
        <div class="description">${description}</div>
        </div>
        
      `;

    for (let i = 0; i < cities.length; i++) {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${API_KEY}`);

      const { main, description, icon } = res.data.weather[0];
      const temp = Math.round(res.data.main.temp - 273.15);
      const name = res.data.name;

      //사용자에게 보여주기
      weatherBox.innerHTML += `
        <div id ="weathers">
        <img class="icon" src="http://openweathermap.org/img/w/${icon}.png">
        
        <div class="name">${name}</div>
        <br>
        <div class="temp">${temp}°C</div>
        <br>
        <div class="main">${main}</div>
        <br>
        <div class="description">${description}</div>
        </div>
        
      `;

    }
  } catch (error) {
    console.log(error);
  }
})
