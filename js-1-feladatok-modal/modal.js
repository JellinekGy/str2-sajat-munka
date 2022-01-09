const modal = document.querySelector('.modal-background');
const modalOpener = document.querySelector('.modal-opener');
const modalCloser1 = document.querySelector('span.modal-closer');
const modalCloser2 = document.querySelector('button.ok-button');
const modalCloser3 = document.querySelector('button.cancel-button');
const openClass = document.querySelector('.open');
const closeClass = document.querySelector('.close');

function openModal() {    
  if (!openClass) {
    modal.classList.remove("closed");
    modal.classList.add("open");
  }    
}

modalOpener.addEventListener('click', openModal);

function closeModal() {
    if (!closeClass) {
        modal.classList.remove("open");
        modal.classList.add("close");
      } 
}

modalCloser1.addEventListener('click', closeModal);
modalCloser2.addEventListener('click', closeModal);
modalCloser3.addEventListener('click', closeModal);
window.addEventListener('click', event => {
    if (event.target.className === 'modal') {
        modal.classList.remove("open");
        modal.classList.add("close");
    }
});