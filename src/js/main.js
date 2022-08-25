let popup = document.getElementById("Popup");
let btn = document.getElementById("showPopupButton");
let reset = document.getElementById("resetButton");
let popupCloseButton = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  popup.style.display = "block";
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }

  if (localStorage.clickcount <= 4) {
    document.getElementById("resetButton").style.display = "none";
  } else if (localStorage.clickcount >= 4) {
    document.getElementById("resetButton").style.display = "block";
  }
  document.getElementsByClassName(
    "popUpClick"
  )[0].innerHTML = `You have clicked ${localStorage.clickcount} times to related button`;
};

reset.onclick = function () {
  localStorage.clickcount = 0;
  popup.style.display = "none";
};

popupCloseButton.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
