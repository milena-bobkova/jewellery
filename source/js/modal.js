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

  var modalLogin = document.querySelector('.login');
  var loginOverlay = document.querySelector('.login-overlay');
  var loginOpenButton = document.querySelector('.login-open');
  var loginCloseButton = document.querySelector('.login-close');

  var showLogin = function () {
    if (loginOpenButton !== null && loginCloseButton !== null && modalLogin !== 0 && modalLogin.childNodes.length > 0 && loginOverlay !== 0) {
      openModalHandler(loginOpenButton, modalLogin, loginOverlay);
      closeModalHandler(loginCloseButton, modalLogin, loginOverlay);
    }
  }

  var modalFilter = document.querySelector('.filter');
  var filterOverlay = document.querySelector('.filter-overlay');
  var filterOpenButton = document.querySelector('.filter-open');
  var filterCloseButton = document.querySelector('.filter-close');

  var showFilter = function () {
    if (filterOpenButton !== null && filterCloseButton !== null && modalFilter !== 0 && modalFilter.childNodes.length > 0 && filterOverlay !== 0) {
      openModalHandler(filterOpenButton, modalFilter, filterOverlay);
      closeModalHandler(filterCloseButton, modalFilter, filterOverlay);
    }
  }

  var modalAdd = document.querySelector('.add');
  var addOverlay = document.querySelector('.add-overlay');
  var addOpenButton = document.querySelector('.add-open');
  var addCloseButton = document.querySelector('.add-close');

  var showAdd = function () {
    if (addOpenButton !== null && addCloseButton !== null && modalAdd !== 0 && modalAdd.childNodes.length > 0 && addOverlay !== 0) {
      openModalHandler(addOpenButton, modalAdd, addOverlay);
      closeModalHandler(addCloseButton, modalAdd, addOverlay);
    }
  }

  showLogin();
  showFilter();
  showAdd();

})();
