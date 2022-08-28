let counter = 0;

const imagePath =
  "/images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg";

const titleText = "Lorem Ipsum";
const descriptionText = `Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.`;
const buttonMainText = "Button";

const alertTitle = "Alert!";

const onMainButtonClick = () => {
  counter += 1;
  const alertText = `You have clicked ${counter} times to related button`;
  createPopup(alertTitle, alertText);
};

createModule(imagePath, titleText, descriptionText, buttonMainText);
