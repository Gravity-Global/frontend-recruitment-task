import { createModule } from "/modules/createModule.js";

const imagePath = getImagePath();

createModule(
  imagePath,
  titleText,
  descriptionText,
  buttonMainText,
  alertTitle,
  fetchUsersData
);
