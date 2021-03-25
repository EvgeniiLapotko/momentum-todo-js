
const title = document.querySelector('.title-time-js')
const form = document.querySelector('.form-js')
const input = form.querySelector('.input-name-js')
const hello = document.querySelector('.hello-js')
const URL_KEY = 'currentName'

    let hour; 
    let minute; 
    let second ;



function getDate(){
    const data = new Date()
    hour = data.getHours();
    minute = data.getMinutes();
    second = data.getSeconds();


    title.innerHTML = `${hour < 10 ? '0' + hour : hour} : ${minute < 10 ? '0'+minute : minute} : ${second < 10 ? '0'+second : second}`
}



function greetingUser(text){
    if(hour>=0 && hour<7){
        hello.textContent = `Доброй ночи ${text}`;
    } else if(hour>7 && hour<12) {
        hello.textContent = `Доброе утро ${text}`;
    }else if(hour>=12 && hour<17) {
        hello.textContent = `Добрый день ${text}`;
    }else if(hour>17 && hour<=23) {
        hello.textContent = `Добрый вечер ${text}`;
    }
    
    hello.classList.add('showing')
    form.classList.remove('showing')
}


const submitHundler = (e) => {
    e.preventDefault()
    
    let inputName = input.value;
    localStorage.setItem(URL_KEY, inputName)
    greetingUser(inputName)
   
    console.log(inputName);
}

function ascUserName() {
    form.classList.add('showing')
    form.addEventListener('submit', submitHundler)
}


function loaderName(){
    const userName = localStorage.getItem(URL_KEY)
    if ( userName === null){
        
        ascUserName()

    } else {
        greetingUser(userName)
    }
}









function init(){
    getDate()
    setInterval(getDate, 1000);
    loaderName()
}

init()
