let popup = document.getElementsByClassName("Popup")[0];
let reset = document.getElementsByClassName("resetButton")[0];
let popupCloseButton = document.getElementsByClassName("close")[0];

function showPopup() {
  popup.style.display = "block";
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }

  if (localStorage.clickcount <= 4) {
    document.getElementsByClassName("resetButton")[0].style.display = "none";
  } else if (localStorage.clickcount >= 4) {
    document.getElementsByClassName("resetButton")[0].style.display = "block";
  }
  document.getElementsByClassName(
    "popUpClick"
  )[0].innerHTML = `You have clicked ${localStorage.clickcount} times to related button`;
}

reset.onclick = function () {
  localStorage.clickcount = 0;
  popup.style.display = "none";
};

popupCloseButton.onclick = function () {
  popup.style.display = "none";
};

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popup.style.display = "none";
  }
});

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
