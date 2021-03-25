const body = document.querySelector('body')
const IMAGE__NUM = 3

function getRandom() {
    const a = Math.ceil(Math.random() * IMAGE__NUM)
    return a
}

function showImage(num) {
    // const img = new Image();
    // img.src = `/images/photo-${num}.jpg`;
    
    // body.prependChild(img)
    // img.classList.add('bg-image')
    body.style.backgroundImage = `url(images/photo-${num}.jpg)`

}

function init() {
const randomNumber = getRandom();
showImage(randomNumber)
}

init()