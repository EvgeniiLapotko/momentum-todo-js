const COORDS_LS = 'coords';
const API__KEY = 'ca101d69899b6be8da520e2dfd4a2177';
const weather = document.querySelector('.js-weather')


function getWeather(lat, lon){
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API__KEY}&units=metric`)
    .then(function(responce){
        return responce.json()
    })
    .then(data => {
        const tempr = data.main.temp;
        const location = data.name;
        weather.textContent = `Погода ${tempr}℃  ${location}`
    })
}


function savaCoords(coords){
    localStorage.setItem(COORDS_LS, JSON.stringify(coords))
}

function getGeoSuccess(position){
    const widthing = position.coords.latitude;
    const heaghting = position.coords.longitude;
    const positionObject = {
        widthing,
        heaghting
    }
    savaCoords(positionObject);
    getWeather(widthing, heaghting);
}

function getGeoError(position){
    console.log('ошибка');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoError);
}

function getCoords(){
    const coords = localStorage.getItem(COORDS_LS);
    
    if(coords == null){
        askForCoords();
    }else{
        const coordsParse = JSON.parse(coords)
        getWeather(coordsParse.widthing, coordsParse.heaghting)
    }
}

function init(){
    getCoords()
}

init()