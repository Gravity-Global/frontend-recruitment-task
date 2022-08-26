export function createModule() {
  const createDiv = () => document.createElement("div");
  const addClass = (element, className) => element.classList.add(className);
  const appendChild = (element, container) =>
    document.querySelector(container).appendChild(element);

  const createBox = className => {
    const div = createDiv();
    addClass(div, className);
    return appendChild(div, ".main-container");
  };

  createBox("section");
  createBox("section");
}
