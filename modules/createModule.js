import { createElement } from "./createElement.js";
import { createPopup } from "./createPopup.js";

let counter = 0;

export function createModule(imageUrl, titleText, descriptionText, buttonText) {
  const alertTitle = "Alert!";

  const onMainButtonClick = () => {
    counter = Number(localStorage.getItem("counter")) + 1;
    localStorage.setItem("counter", counter);

    let timeString = counter === 1 ? "time" : "times";
    let displayResetButton = counter >= 5 ? "block" : "none";

    document.getElementById(
      "alertContent"
    ).textContent = `You have clicked ${counter} ${timeString} to related button`;

    document.getElementsByClassName("blured")[0].style.display = "flex";

    document.getElementById("resetButton").style.display = displayResetButton;
  };

  const imageDiv = createElement("div", "imageSection");
  const contentDiv = createElement("div", "contentSection");
  document.querySelector(".mainContainer").append(imageDiv, contentDiv);

  const image = createElement("img", "image", imageUrl);
  imageDiv.appendChild(image);

  const title = createElement("h1", "title", titleText);
  const description = createElement("p", "description", descriptionText);
  const button = createElement("button", "button", buttonText);

  contentDiv.append(title, description, button);

  button.addEventListener("click", onMainButtonClick);

  createPopup(alertTitle);
}
