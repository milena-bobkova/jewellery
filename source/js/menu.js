'use strict';

(function () {

  var menu = document.querySelector('.page-header');
  var toggle = document.querySelector('.page-header__toggle');

  menu.classList.remove('page-header--nojs');

  var closeMenu = function () {
    menu.classList.add('page-header--closed');
    menu.classList.remove('page-header--opened');
    document.body.classList.remove('page-header__fix');
    document.removeEventListener('keydown', escPressHandler);
  };

  var openMenu = function () {
    menu.classList.remove('page-header--closed');
    menu.classList.add('page-header--opened');
    document.body.classList.add('page-header__fix');
    document.addEventListener('keydown', escPressHandler);
  };

  var toggleClickHandler = function () {
    if (menu !== null && menu.childNodes.length > 0) {
      if (menu.classList.contains('page-header--closed')) {
        openMenu();
      } else {
        closeMenu();
      }
    }
  };

  if (toggle !== null) {
    toggle.addEventListener('click', toggleClickHandler);

    toggle.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        openModal();
      }
    });
  }

  var escPressHandler = function (evt) {
    if (evt.key === 'Escape') {
      closeMenu();
    }
  };

  var menuItems = menu.querySelectorAll('.page-header__link');

  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      closeMenu();
    });
  });
})();
