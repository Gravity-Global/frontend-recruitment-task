import { createElement, createPopup, createTable } from "/modules/helpers.js";

export function createModule(
  imageUrl,
  titleText,
  descriptionText,
  buttonText,
  alertTitle,
  TABLE_DATA_URL
) {
  const onMainButtonClick = async () => {
    const counter = Number(localStorage.getItem("counter")) + 1;
    localStorage.setItem("counter", counter);

    const timeString = counter === 1 ? "time" : "times";
    const displayResetButton = counter >= 5 ? "block" : "none";

    document.getElementById(
      "alertContent"
    ).textContent = `You have clicked ${counter} ${timeString} to related button`;

    document.getElementById("blured").style.display = "flex";
    document.getElementById("resetButton").style.display = displayResetButton;

    const fetchData = async DATA_URL => {
      const response = await fetch(DATA_URL);
      const data = await response.json();
      return data;
    };

    document.getElementById("loader").style.display = "inline-block";
    const people = await fetchData(TABLE_DATA_URL);
    document.getElementById("loader").style.display = "none";

    const table = createTable(
      people.map(
        ({
          name,
          email,
          address: { city, street, suite },
          phone,
          company: { name: companyName },
        }) => [name, email, `${city}, ${street}, ${suite}`, phone, companyName]
      )
    );
    document.querySelector("#popUpContent").appendChild(table);
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
