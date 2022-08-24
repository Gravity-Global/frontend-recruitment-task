function popupFunction() {
  var element = document.getElementById("myContainer");
  element.classList.toggle("shadow");
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function closeFunction() {
  var element = document.getElementById("myContainer");
  element.classList.remove("shadow");
  var popup = document.getElementById("myPopup");
  popup.classList.remove("show");
}

let counter = 0;

const spanCounter = document.querySelector("span.counter");
const btn = document.getElementById("clickButton");
const btnReset = document.getElementById("reset");

function btnClick() {
  counter++;
  spanCounter.textContent = counter;
  if (counter >= 5) {
    btn.removeEventListener("click", btnClick);
    const resetBtn = document.getElementById("reset");
    resetBtn.classList.remove("reset");
  }
}

function resetFunction() {
  counter--;
  spanCounter.textContent = 0;
  const resetBtn = document.getElementById("reset");
  resetBtn.classList.add("reset");
}

btnReset.addEventListener("click", resetFunction);
btn.addEventListener("click", btnClick);
