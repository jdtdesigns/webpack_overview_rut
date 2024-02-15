require('../css/header.scss');

function openModal() {
  console.log('clicked');
  // const modal = document.querySelector('#modal');

  // modal.classList.remove('hide');
}

function initHeader() {
  const modalBtn = document.querySelector('#modal-btn');

  modalBtn.addEventListener('click', openModal);
}

module.exports = initHeader;