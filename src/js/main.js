console.log("Oddzielny plik JavaScript");

function popupFunction() {
  // alert("popupFunction została wywołana");
  console.log("test przycisku popup");

  var element = document.getElementById("myContainer");
  element.classList.toggle("shadow");
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function closeFunction() {
  console.log("test zamykania");
  var element = document.getElementById("myContainer");
  element.classList.remove("shadow");
  var popup = document.getElementById("myPopup");
  popup.classList.remove("show");
}
