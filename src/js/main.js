const showBtn = document.querySelector(".first-section__btn");
const countDisplay = document.querySelector(".count-display");
const popUpWindow = document.querySelector(".pop-up");
const popUpCloseBtn = document.querySelector(".pop-up__close-btn");
const popUpCloseOutside = document.querySelector(".pop-up__background");
const popUpResetBtn = document.querySelector(".pop-up__reset-btn");

let clickCounter = localStorage.getItem("clickCounter") || 0;

const countUp = () => {
  clickCounter++;
  countDisplay.innerHTML = clickCounter;
  localStorage.setItem("clickCounter", clickCounter);
}

const openPopUp = () => {
  popUpWindow.style.display = 'block';
  popUpCloseBtn.focus();
}

const closePopUp = () => {
  popUpWindow.style.display = 'none';
}

const resetCounter = () => {
  localStorage.clear();
  clickCounter = 0;
  countDisplay.innerHTML = clickCounter;
  closePopUp();
}

showBtn.addEventListener("click", () => {
  countUp();
  openPopUp();
  popUpResetBtn.style.display = (clickCounter <= 5) ? 'none' : 'block';
});

popUpCloseBtn.addEventListener("click", () => {
  closePopUp();
})

popUpCloseOutside.addEventListener("click", () => {
  closePopUp();
})

popUpResetBtn.addEventListener("click", () => {
  resetCounter();
})