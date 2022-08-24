const openBtn = document.querySelector(".content_pop_up_btn");
const closeBtn = document.querySelector(".close_pop_up_btn");
const modal = document.getElementById("modal");
const resetBtn = document.querySelector(".reset_btn");
const counter = document.querySelector(".span_counter");

// Popup logic - START
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

// Popup accessibility logic - escape key for closing

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" || (e.keyCode === 27 && !modal.classList.contains("hidden"))) {
    closePopUp();
  }
});

// Popup logic - END

openBtn.addEventListener("click", openPopUp);
closeBtn.addEventListener("click", closePopUp);
