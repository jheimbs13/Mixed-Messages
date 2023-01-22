let quote = ['Do or do not, there is no try.', 'Never tell me the odds!', 'Your focus determines your reality.', 'The greatest teacher failure is', 'Feel, do not think. Trust your instincts.']
let quoteImages = ['./images/yodal.png', './image/han.webp', './image/qui1.webp', './image/yoda.jpg', './image/qui.png']

//Set up events to be changed
const button = document.getElementById('button');

const getQuote = document.getElementById('get-quote');
const getMeal = () => {
    let choice = Math.floor(Math.random()*quote.length)
    let quoteChoice = quote[choice]
    quoteTarget.innerHTML = quoteChoice;
    quoteImages.src = quoteImages[choice];
}
 

//Makes button active

button.addEventListener('click', chooseQuote)