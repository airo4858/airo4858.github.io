const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const oldBtn = document.querySelector('#js-tweet').addEventListener('click', getAnswer);

const endpoint ='https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote(){
    //console.log('Test');

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json);
        displayQuote(json['question']);
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch da thingie');
    }
}

function displayQuote(question) {
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;

}

async function getAnswer(){
    //console.log('Test');

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json);
        displayAnswer(json['answer']);
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch da thingie');
    }
}

function displayAnswer(answer) {
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = answer;

}

getQuote();