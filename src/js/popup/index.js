export function createPopup() {
  const createDiv = () => document.createElement("div");
  const addClass = (element, className) => element.classList.add(className);

  const mainDiv = createDiv();
  addClass(mainDiv, "blured");
  document.querySelector(".main-container").appendChild(mainDiv);

  const popUpDiv = createDiv();
  addClass(popUpDiv, "popup");
  mainDiv.appendChild(popUpDiv);

  const closeDiv = createDiv();
  addClass(closeDiv, "close");
  const popUpContentDiv = createDiv();
  addClass(popUpContentDiv, "popUpContent");

  popUpDiv.append(closeDiv, popUpContentDiv);
}
