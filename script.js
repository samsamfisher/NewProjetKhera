let mySlider = slider('.slides');


// ---- Modal Wraith -----
const modalContainer = document.querySelector('.modal__container');
const modalTriggers = document.querySelectorAll('.modal__trigger');

modalTriggers.forEach(trigger => trigger.addEventListener('click', toggleModal(modalContainer)));


// ---- Modal Zombie -----
const modalContainerZombie = document.querySelector('.modal__zombie__container');
const modalTriggersZombie = document.querySelectorAll('.modal__zombie__trigger');

modalTriggersZombie.forEach(trigger => trigger.addEventListener('click', toggleModal(modalContainerZombie)));


// ----------------------------------------------
function toggleModal(container) {
    container.classList.toggle("active");
}