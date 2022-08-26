function createModule(imageUrl, titleText, descriptionText, buttonText) {
  const createDiv = () => document.createElement("div");
  const addClass = (element, className) => element.classList.add(className);

  const createSection = className => {
    const div = createDiv();
    addClass(div, className);
    return document.querySelector(".main-container").appendChild(div);
  };

  //adding two columns to main-container
  const imageDiv = createSection("image-section");
  const contentDiv = createSection("content-section");

  //adding image to image-section
  const image = document.createElement("img");
  addClass(image, "image");
  image.setAttribute("src", imageUrl);
  imageDiv.appendChild(image);

  //adding content to content-section
  const title = document.createElement("h1");
  addClass(title, "title");
  title.textContent = titleText;

  const description = document.createElement("p");
  addClass(description, "description");
  description.textContent = descriptionText;

  const button = document.createElement("button");
  addClass(button, "button");
  button.textContent = buttonText;

  contentDiv.append(title, description, button);
}
