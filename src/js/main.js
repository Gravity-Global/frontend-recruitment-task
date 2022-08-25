const counterPopup = document.getElementById("popup-1");
const counterText = document.getElementById("counter-text");
const buttonReset = document.getElementById("button-reset");
let clicksCounter = 0;

loadCounter();

function openCounterPopup() {
    clicksCounter++;
    saveCounter();
    counterText.innerHTML = clicksCounter;
    showElement(counterPopup);

    if (clicksCounter >= 5) {
        showElement(buttonReset);
    }
}

function closePopup() {
    hideElement(counterPopup);
}

function resetCounter() {
    clicksCounter = 0;
    saveCounter();
    counterText.innerHTML = clicksCounter;
    hideElement(buttonReset);
}

function hideElement(htmlElement) {
    htmlElement.classList.add("hidden");
}

function showElement(htmlElement) {
    htmlElement.classList.remove("hidden");
}

function saveCounter() {
    localStorage.setItem('clicksCounter', clicksCounter);
}
function loadCounter() {
    clicksCounter = localStorage.getItem('clicksCounter');
}
