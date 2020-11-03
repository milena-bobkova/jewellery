'use strict';

(function () {

  var modal = document.querySelector('.modal');
  var modalOverlay = document.querySelector('.overlay');
  var modalOpen = document.querySelector('.modal-open');
  var modalClose = document.querySelector('.modal-close');

  var closeModal = function () {
    modal.classList.remove('modal--show');
    modalOverlay.classList.remove('overlay--show');
    document.body.classList.remove('modal__fix');
    document.removeEventListener('keydown', escPressHandler);
    modalOverlay.removeEventListener('click', function () {
      closeModal();
    });
  };

  var escPressHandler = function (evt) {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };

  var openModal = function () {
    if (modal !== null && modalOverlay !== null) {
      modal.classList.add('modal--show');
      modalOverlay.classList.add('overlay--show');
      document.body.classList.add('modal__fix');
      document.addEventListener('keydown', escPressHandler);
      modalOverlay.addEventListener('click', function () {
        closeModal();
      });
    }
  };

  if (modalOpen !== null) {
    modalOpen.addEventListener('click', function (evt) {
      evt.preventDefault();
      openModal();
    });

    modalOpen.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        openModal();
      }
    });
  }

  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModal();
  });

  modalClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closeModal();
    }
  });

})();
