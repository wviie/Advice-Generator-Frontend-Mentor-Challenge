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
        // set random id
        let API_URL_ID = API_URL + `/${Math.floor(Math.random() * 224).toString()}`;
        const response = await fetch(API_URL_ID);
        if (!response.ok) throw 'Error';
        const adviceObj = await response.json();
        // if advice doesn't exist for a certain id then recall the function
        if (adviceObj.message) return fetchAdvice();
        const advice = adviceObj.slip.advice;
        const adviceId = adviceObj.slip.id;

        clearElementText(adviceElement);
        clearElementText(adviceIdElement);

        addTextToElement(adviceElement, advice);
        addTextToElement(adviceIdElement, adviceId);
    }
    catch(err){
        addTextToElement(adviceElement, err);
    }
}

fetchAdvice();