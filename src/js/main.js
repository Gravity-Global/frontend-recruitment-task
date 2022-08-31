import { createModule } from "/modules/createModule.js";

const clientWidth = window.innerWidth;

const imagePathXs =
  "/images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_480.jpg";
const imagePathS =
  "/images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_720.jpg";
const imagePathM =
  "/images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg";
const imagePathL =
  "/images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg";
let imagePath = "";

if (clientWidth <= 480) imagePath = imagePathXs;
else if (clientWidth <= 768) imagePath = imagePathS;
else if (clientWidth <= 1024) imagePath = imagePathM;
else imagePath = imagePathL;

const titleText = "Lorem Ipsum";
const descriptionText =
  "Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.";
const buttonMainText = "Button";
const alertTitle = "Alert!";

const TABLE_DATA_URL = "https://jsonplaceholder.typicode.com/users/";

createModule(
  imagePath,
  titleText,
  descriptionText,
  buttonMainText,
  alertTitle,
  TABLE_DATA_URL
);
