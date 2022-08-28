function createModule(imageUrl, titleText, descriptionText, buttonText) {
  const createElement = (type, className, prop) => {
    const element = document.createElement(type);
    element.classList.add(className);
    if (type === "h1" || type === "p" || type === "button" || type === "span")
      element.textContent = prop;
    else if (type === "img") element.setAttribute("src", prop);
    return element;
  };

  const imageDiv = createElement("div", "image-section");
  const contentDiv = createElement("div", "content-section");
  document.querySelector(".main-container").append(imageDiv, contentDiv);

  const image = createElement("img", "image", imageUrl);
  imageDiv.appendChild(image);

  const title = createElement("h1", "title", titleText);
  const description = createElement("p", "description", descriptionText);
  const button = createElement("button", "button", buttonText);

  contentDiv.append(title, description, button);
}
