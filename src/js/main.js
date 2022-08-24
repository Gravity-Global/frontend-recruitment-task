var counterPopup = document.getElementById("popup-1");
var counterText = document.getElementById("counter-text");
var buttonReset = document.getElementById("button-reset");
var clicksCounter = 0;

function openCounterPopup() {
    clicksCounter++;
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
    counterText.innerHTML = clicksCounter;
    hideElement(buttonReset);
}

function hideElement(htmlElement) {
    htmlElement.classList.add("hidden");
}

function showElement(htmlElement) {
    htmlElement.classList.remove("hidden");
}
