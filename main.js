const API_URL = 'https://api.adviceslip.com/advice';

const adviceElement = document.querySelector('.advice');
const adviceIdElement = document.querySelector('.advice-id p');

const addTextToElement = (element, text) => {
    element.innerText += text;
}

const clearElementText = (element) => {
    element.innerText = '';
}

const fetchAdvice = async() => {
    try{
    const response = await fetch(API_URL);
    const adviceObj = await response.json();
    const advice = adviceObj.slip.advice;
    const adviceId = adviceObj.slip.id;

    clearElementText(adviceElement);
    clearElementText(adviceIdElement);

    addTextToElement(adviceElement, advice);
    addTextToElement(adviceIdElement, adviceId);
    }
    catch(err){
        console.log(err);
    }
}

fetchAdvice();