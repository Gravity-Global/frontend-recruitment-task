const openBtn=document.querySelector(".content_pop_up_btn"),closeBtn=document.querySelector(".close_pop_up_btn"),modal=document.getElementById("modal"),resetBtn=document.querySelector(".reset_btn"),counter=document.querySelector(".span_counter"),openPopUp=()=>{modal.classList.add("fade"),setTimeout(()=>{modal.classList.remove("hidden"),modal.classList.remove("fade")},250)},closePopUp=()=>{modal.classList.add("fade_out"),setTimeout(()=>{modal.classList.add("hidden"),modal.classList.remove("fade_out")},450)};openBtn.addEventListener("click",openPopUp),closeBtn.addEventListener("click",closePopUp);