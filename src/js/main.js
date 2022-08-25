const openBtn = document.querySelector(".content_pop_up_btn");
const closeBtn = document.querySelector(".close_pop_up_btn");
const modal = document.getElementById("modal");
const resetBtn = document.querySelector(".reset_btn");
const counter = document.querySelector(".span_counter");
const image = document.querySelector(".img");
let counts = 0;

// Counts checker - START

function checkCounts() {
  if (counts > 5) {
    resetBtn.parentElement.style.display = "flex";
  }
}

function checkSessionStorage() {
  countsInStorage = sessionStorage.getItem("NOC");
  countsInStorage > 0 ? (counts = countsInStorage) : null;
}
// Counts checker - END

// Reset button logic - START

function resetCounter() {
  counts = 0;
  sessionStorage.setItem("NOC", 0);
  closePopUp();
  setTimeout(() => {
    resetBtn.parentElement.style.display = "none";
  }, 300);
}

// Reset button logic - END

// Popup logic - START

function openPopUp() {
  counts++;
  sessionStorage.setItem("NOC", counts);
  modal.classList.add("fade");
  setTimeout(() => {
    modal.classList.remove("hidden");
    modal.classList.remove("fade");
  }, 250);
  counter.textContent = sessionStorage.getItem("NOC");
  checkCounts(counts);
  //   Prevent from clicking when modal is open
  openBtn.setAttribute("disabled", "");
}

function closePopUp() {
  modal.classList.add("fade_out");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("fade_out");
  }, 400);
  //   Remove disabled attribute
  openBtn.disabled = false;
}

// Popup accessibility logic - escape key for closing

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" || (e.keyCode === 27 && !modal.classList.contains("hidden"))) {
    closePopUp();
  }
});

document.addEventListener("click", (e) => {
  if (e.target === modal && !modal.classList.contains("hidden")) {
    closePopUp();
  }
});

// Popup logic - END

// Window Resize
window.addEventListener("resize", () => {
  let size = window.innerWidth;
  if (size < 768) {
    console.log("elo");
    image.src = "images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_480.jpg";
  } else if (size >= 768 && size < 1440) {
    image.src = "images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg";
  } else if (size >= 1440) {
    image.src = "images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg";
  }
});

document.addEventListener("DOMContentLoaded", checkSessionStorage);
resetBtn.addEventListener("click", resetCounter);
openBtn.addEventListener("click", openPopUp);
closeBtn.addEventListener("click", closePopUp);
