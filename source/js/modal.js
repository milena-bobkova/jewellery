'use strict';

(function () {

  var modals = document.querySelectorAll('.modal');
  var modalOverlays = document.querySelectorAll('.overlay');
  var modalOpenButtons = document.querySelectorAll('.modal-open');
  var modalCloseButtons = document.querySelectorAll('.modal-close');

  var loginForm = document.querySelector('.login__form');
  var userEmail = document.querySelector('[name=user-email]');

  var isStorageSupport = true;
  var storage = {};

  try {
    storage.email = localStorage.getItem('userEmail');
  } catch (err) {
    isStorageSupport = false;
  }

  if (loginForm !== null) {
    loginForm.addEventListener('submit', function (evt) {
      if (!userEmail.value) {
        evt.preventDefault();
      } else {
        if (isStorageSupport) {
          localStorage.setItem('email', userEmail.value);
        }
      }
    });
  }

  var setFocus = function () {
    userEmail.focus();
    if (isStorageSupport) {
      if (localStorage.getItem('userEmail')) {
        userEmail.value = localStorage.getItem('userEmail');
      }
    }
  };

  var closeModal = function (modal, overlay) {
    modal.classList.remove('modal--show');
    overlay.classList.remove('overlay--show');
    document.body.classList.remove('modal__fix');
    overlay.removeEventListener('click', function () {
      closeModal(modal, overlay);
    });
  };

  var openModal = function (modal, overlay) {
    if (modal !== null && overlay !== null) {
      modal.classList.add('modal--show');
      overlay.classList.add('overlay--show');
      document.body.classList.add('modal__fix');
      overlay.addEventListener('click', function () {
        closeModal(modal, overlay);
      });
      if (modal.classList.contains('modal--login')) {
        setFocus();
      }
    }
  };

  var openModalHandler = function (button, modal, overlay) {
    if (button !== null) {
      button.addEventListener('click', function (evt) {
        evt.preventDefault();
        openModal(modal, overlay);
      });

      button.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
          openModal(modal, overlay);
        }
      });
    }

    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        closeModal(modal, overlay);
      }
    });
  };

  var closeModalHandler = function (button, modal, overlay) {
    if (button !== null) {
      button.addEventListener('click', function (evt) {
        evt.preventDefault();
        closeModal(modal, overlay);
      });

      button.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
          closeModal(modal, overlay);
        }
      });
    }

    document.removeEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        closeModal(modal, overlay);
      }
    });
  };

  var showModals = function () {
    if (modalOpenButtons.length > 0 && modals.length > 0 && modalOverlays.length > 0) {
      for (var i = 0; i < modals.length; i++) {
        if (modalOpenButtons[i] !== null && modalCloseButtons[i] !== null && modals[i] !== 0 && modals[i].childNodes.length > 0 && modalOverlays[i] !== 0) {
          openModalHandler(modalOpenButtons[i], modals[i], modalOverlays[i]);
          closeModalHandler(modalCloseButtons[i], modals[i], modalOverlays[i]);
        }
      }
    }
  };

  showModals();

})();
