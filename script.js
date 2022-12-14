// ------- Slider Vertical -------
let mySlider = slider('.slides');


// ---- Modal Wraith -----
const modalContainer = document.querySelector('.modal--wraith');
const modalTriggers = document.querySelectorAll('.js-trigger-wraith');

modalTriggers.forEach(trigger => trigger.addEventListener('click', toggleModal));

function toggleModal() {
    modalContainer.classList.toggle("active");
}

// ---- Modal Zombie -----
const modalContainerZombie = document.querySelector('.modal--zombie');
const modalTriggersZombie = document.querySelectorAll('.js-trigger-zombie');

modalTriggersZombie.forEach(trigger => trigger.addEventListener('click', toggleModalZombie));

function toggleModalZombie() {
    modalContainerZombie.classList.toggle("active");
}

// ----------------------------------------------