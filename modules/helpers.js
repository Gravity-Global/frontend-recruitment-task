export const createElement = (type, className, prop) => {
  const element = document.createElement(type);
  element.classList.add(className);
  if (type === "h1" || type === "p" || type === "button" || type === "span")
    element.textContent = prop;
  else if (type === "img") element.setAttribute("src", prop);
  return element;
};

export async function createPopup(titleText) {
  const onResetButtonClick = () => {
    localStorage.setItem("counter", 0);
    document.getElementById("alertContent").textContent =
      "No click detected to related button";
    document.getElementById("resetButton").style.display = "none";
  };

  const mainDiv = createElement("div", "blured");
  mainDiv.setAttribute("id", "blured");
  document.querySelector(".mainContainer").appendChild(mainDiv);

  mainDiv.addEventListener("click", event => {
    if (event.target === xIcon || event.target === mainDiv) {
      mainDiv.style.display = "none";
      popUpContentDiv.removeChild(document.querySelector(".table"));
    }
  });

  const popUpDiv = createElement("div", "popup");
  mainDiv.appendChild(popUpDiv);

  const closeDiv = createElement("div", "close");
  const popUpContentDiv = createElement("div", "popUpContent");
  popUpContentDiv.setAttribute("id", "popUpContent");

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

  const loaderDiv = createElement("div", "loaderDiv");

  popUpContentDiv.append(title, content, resetButton, loaderDiv);

  const loader = createElement("span", "loader");
  loader.setAttribute("id", "loader");

  loaderDiv.appendChild(loader);
}

export function createTable(tableData) {
  const table = document.createElement("table");
  table.classList.add("table");
  let row = {};
  let cell = {};

  tableData.forEach(rowData => {
    row = table.insertRow(-1);
    rowData.forEach(cellData => {
      cell = row.insertCell();
      cell.textContent = cellData;
    });
  });
  return table;
}
