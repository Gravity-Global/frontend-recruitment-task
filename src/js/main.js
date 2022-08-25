// getting vars
const showPopupBtn = document.querySelector('.art__btn');
const modalWrap = document.querySelector('.modal-wrap');
const closeBtn = document.querySelector('.modal-wrap__closeBtn');
const showCounter = document.querySelector('.click-counter');
const resetBtn = document.querySelector('.modal-wrap__resetBtn');

//showing popup window;
showPopupBtn.addEventListener('click', () => {
    modalWrap.style.visibility = 'visible';

    //showing clicks number
    let showClicks = localStorage.getItem('localClicks');
    localStorage.setItem('localClicks', ++showClicks);
    showCounter.textContent = showClicks;


    // showing resetBtn if condition is met;
    resetBtn.style.display = showClicks > 5 ? 'block' : 'none';
});


// function for hiding popup

const hideModal = () => modalWrap.style.visibility = 'hidden';

modalWrap.addEventListener('click', e => {
    if (e.target.className === 'modal-wrap') hideModal();

})
closeBtn.addEventListener('click', e =>  {
    if (e.target.className === 'modal-wrap__closeBtn') hideModal()
});



//reseting local clicks; hiding popup window


resetBtn.addEventListener('click', () => {
    showCounter.textContent = '0';
    localStorage.clear();
    hideModal();
})


