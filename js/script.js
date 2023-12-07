let buttons = document.getElementsByClassName("buttons");
let options = document.getElementsByClassName("options");

const isTrueSelected = (optionsDOMClass) => {
    let response = false;
    Array.from(optionsDOMClass[0].children).forEach((e) => {
        if (e.firstElementChild.classList.contains("border") && e.firstElementChild.classList.contains("correct")) {
            response = true
        }
    })
    return response;
}

const checkIfSelected = (optionsDOMClass) => {
    let response;
    Array.from(optionsDOMClass[0].children).forEach((e) => {
        if (e.firstElementChild.classList.contains("border")) {
            response = true;
        }
    })
    return response;
}

const removeOtherBorders = (optionsDOMClass) => {
    Array.from(optionsDOMClass[0].children).forEach((e) => {
        e.firstElementChild.classList.remove("border");
        e.firstElementChild.classList.remove("border-danger");
    });
}

// next button
buttons[0].lastElementChild.addEventListener("click", (e) => {
    if (checkIfSelected(options)) {
        if ((document.title.slice(document.title.length - 2)).trim() != 10) {
            window.location.href = `../questions/${parseInt((document.title.slice(document.title.length - 2)).trim()) + 1}.html`;
            if (isTrueSelected(options)) {
                document.cookie = `q${(document.title.slice(document.title.length - 2)).trim()}=true; path=/`;
            } else {
                document.cookie = `q${(document.title.slice(document.title.length - 2)).trim()}=false; path=/`;
            }
        } else {
            window.location.href = "../result.html";
            if (isTrueSelected(options)) {
                document.cookie = `q${(document.title.slice(document.title.length - 2)).trim()}=true; path=/`;
            } else {
                document.cookie = `q${(document.title.slice(document.title.length - 2)).trim()}=false; path=/`;
            }
        }
    }
});

// restart button
buttons[0].firstElementChild.addEventListener("click", (e) => {
    let confirmed = confirm("Are you sure want to restart the game");
    if (confirmed) {
        window.location.href = "../";
    }
});

Array.from(options[0].children).forEach((e) => {
    e.firstElementChild.addEventListener("click", (k) => {
        removeOtherBorders(options);
        k.target.classList.add("border");
        k.target.classList.add("border-danger");
        buttons[0].lastElementChild.classList.remove("disabled");
    });
});
