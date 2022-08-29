import { createElement } from "./createElement.js";

export function createPopup(titleText) {
  const onResetButtonClick = () => {
    localStorage.setItem("counter", 0);
    document.getElementById("alertContent").textContent =
      "No click detected to related button";
  };

  const mainDiv = createElement("div", "blured");
  document.querySelector(".mainContainer").appendChild(mainDiv);

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

  const closeButton = createElement("div", "closeButton");
  closeDiv.appendChild(closeButton);

  const xIcon = createElement("span", "x-icon", "+");
  closeButton.append(xIcon);

  const title = createElement("h1", "title", titleText);
  const content = createElement("p", "description", "");
  content.setAttribute("id", "alertContent");
  const resetButton = createElement("button", "button", "Reset");
  resetButton.setAttribute("id", "resetButton");
  resetButton.addEventListener("click", onResetButtonClick);

  popUpContentDiv.append(title, content, resetButton);
}
