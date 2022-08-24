const openBtn = document.querySelector(".content_pop_up_btn");
const closeBtn = document.querySelector(".close_pop_up_btn");
const modal = document.getElementById("modal");
const resetBtn = document.querySelector(".reset_btn");
const counter = document.querySelector(".span_counter");

const openPopUp = () => {
  modal.classList.add("fade");
  setTimeout(() => {
    modal.classList.remove("hidden");
    modal.classList.remove("fade");
  }, 250);
};
const closePopUp = () => {
  modal.classList.add("fade_out");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("fade_out");
  }, 450);
};

openBtn.addEventListener("click", openPopUp);
closeBtn.addEventListener("click", closePopUp);
