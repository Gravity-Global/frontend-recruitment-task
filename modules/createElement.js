export const createElement = (type, className, prop) => {
  const element = document.createElement(type);
  element.classList.add(className);
  if (type === "h1" || type === "p" || type === "button" || type === "span")
    element.textContent = prop;
  else if (type === "img") element.setAttribute("src", prop);
  return element;
};
