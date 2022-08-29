function createPopup(titleText) {
  const createElement = (type, className, prop) => {
    const element = document.createElement(type);
    element.classList.add(className);
    if (type === "h1" || type === "p" || type === "button" || type === "span")
      element.textContent = prop;
    else if (type === "img") element.setAttribute("src", prop);
    return element;
  };

  const mainDiv = createElement("div", "blured");
  document.querySelector(".main-container").appendChild(mainDiv);

  mainDiv.addEventListener("click", event => {
    event.stopPropagation();
    if (event.target === xIcon || event.target === mainDiv)
      mainDiv.style.display = "none";
  });

  const popUpDiv = createElement("div", "popup");
  mainDiv.appendChild(popUpDiv);

  const closeDiv = createElement("div", "close");
  const popUpContentDiv = createElement("div", "popUpContent");

  popUpDiv.append(closeDiv, popUpContentDiv);

  const closeButton = createElement("div", "close-button");
  closeDiv.appendChild(closeButton);

  const xIcon = createElement("span", "x-icon", "+");
  closeButton.append(xIcon);

  const title = createElement("h1", "title", titleText);
  const content = createElement("p", "description", "");
  content.setAttribute("id", "alert-content");
  const resetButton = createElement("button", "button", "Reset");
  resetButton.setAttribute("id", "reset-button");
  resetButton.addEventListener("click", onResetButtonClick);

  popUpContentDiv.append(title, content, resetButton);
}
