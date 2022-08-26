export function createModule(imageUrl) {
  const createDiv = () => document.createElement("div");
  const addClass = (element, className) => element.classList.add(className);
  const appendChild = (element, container) =>
    document.querySelector(container).appendChild(element);

  const createBox = className => {
    const div = createDiv();
    addClass(div, className);
    return appendChild(div, ".main-container");
  };

  //adding two columns to main-container
  createBox("image-section");
  createBox("content-section");

  //adding image to image-section
  const image = document.createElement("img");
  addClass(image, "image");
  image.setAttribute("src", imageUrl);
  document.querySelector(".image-section").appendChild(image);
  appendChild(image, ".image-section");
}
