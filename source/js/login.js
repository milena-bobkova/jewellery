'use strict';

(function () {
  var login = document.querySelector('.login');
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

  setFocus();

})();
