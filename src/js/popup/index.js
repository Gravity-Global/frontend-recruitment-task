export function createPopup() {
  const createElement = (type, className, prop) => {
    const element = document.createElement(type);
    element.classList.add(className);
    if (type === "h1" || type === "p" || type === "button")
      element.textContent = prop;
    else if (type === "img") element.setAttribute("src", prop);
    return element;
  };

  const mainDiv = createElement("div", "blured");
  document.querySelector(".main-container").appendChild(mainDiv);

  const popUpDiv = createElement("div", "popup");
  mainDiv.appendChild(popUpDiv);

  const closeDiv = createElement("div", "close");
  const popUpContentDiv = createElement("div", "popUpContent");

  popUpDiv.append(closeDiv, popUpContentDiv);
}
