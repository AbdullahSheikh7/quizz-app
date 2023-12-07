let cookies = {};
let correct = 0;
let incorrect = 0;

let correctContainer = document.getElementById("correct-container");
let incorrectContainer = document.getElementById("incorrect-container");

const makeCookieObject = (cookieObject) => {
    let cookie = document.cookie.split("; ");
    for (i = 0; i < cookie.length; i++) {
        let name = cookie[i].split("=")[0];
        let value = cookie[i].split("=")[1];
        cookieObject[name] = value;
    }
}

const seperateCorrectAndIncorrect = (cookieObject) => {
    for (const i in cookieObject) {
        if (cookieObject[i] == 'true') {
            correct += 1;
        } else {
            incorrect += 1;
        }
    }
}

makeCookieObject(cookies);
seperateCorrectAndIncorrect(cookies);

correctContainer.innerText = `${correct} correct answer`;
incorrectContainer.innerText = `${incorrect} incorrect answer`;
