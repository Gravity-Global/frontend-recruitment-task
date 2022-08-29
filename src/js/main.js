let counter = 0;

const imagePath =
  "/images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg";

const titleText = "Lorem Ipsum";
const descriptionText = `Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.`;
const buttonMainText = "Button";

const alertTitle = "Alert!";

const onMainButtonClick = () => {
  counter = Number(localStorage.getItem("counter")) + 1;
  localStorage.setItem("counter", counter);

  let timeString = "";
  let displayResetButton = "";

  counter === 1 ? (timeString = "time") : (timeString = "times");
  counter >= 5 ? (displayResetButton = "block") : (displayResetButton = "none");

  document.getElementById(
    "alert-content"
  ).textContent = `You have clicked ${counter} ${timeString} to related button`;

  document.getElementsByClassName("blured")[0].style.display = "flex";

  document.getElementById("reset-button").style.display = displayResetButton;
};

const onResetButtonClick = () => {
  localStorage.setItem("counter", 0);
  counter = Number(localStorage.getItem("counter"));
  document.getElementById("alert-content").textContent =
    "No click detected to related button";
};

createPopup(alertTitle);

createModule(imagePath, titleText, descriptionText, buttonMainText);
