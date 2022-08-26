const popupQuerySelector = "#alert";
const popup = document.querySelector(popupQuerySelector);
const popupbutton = document.querySelector("#button");

function count(){
    if(sessionStorage.clickcount){
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    }
    else{
        sessionStorage.clickcount = 1 ;
    }
    document.getElementById("clicks").innerHTML = sessionStorage.clickcount;
}
const resetQuerySelector = "#reset";
const reset = document.querySelector(resetQuerySelector);
reset.addEventListener("click", ()=>{
    sessionStorage.clickcount = 0;
    popup.classList.remove("show");
    document.getElementById('button').style.opacity="1";
    document.getElementById('opacity').style.display="none";
})
popupbutton.addEventListener("click", () =>{
    setTimeout(() => {
        if(sessionStorage.clickcount>5)
        {
            if(!reset.classList.contains("show"))
            {
                reset.classList.add("show")
            }
        }
        else if(sessionStorage.clickcount<5)
            {
                reset.classList.remove("show")
            }    
    }, (250));
});
const x = document.getElementById('icon');
x.addEventListener("click",()=>{
    popup.classList.remove("show");
        document.getElementById('button').style.opacity="1";
        document.getElementById('opacity').style.display="none";
})
popupbutton.addEventListener("click", () =>{
    setTimeout(() => {
        if(!popup.classList.contains("show")){
            popup.classList.add("show");
            document.getElementById('button').style.opacity="0.5";
            document.getElementById('opacity').style.display="block";
        }
    }, (250));
});
document.addEventListener("click", (e) => {
    const Closest = e.target.closest(popupQuerySelector);
    if (!Closest && popup.classList.contains("show")) {
        popup.classList.remove("show");
        document.getElementById('button').style.opacity="1";
        document.getElementById('opacity').style.display="none";
    }
  });


