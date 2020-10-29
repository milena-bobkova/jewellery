'use strict';

(function () {

  var menu = document.querySelector('.page-header');
  var toggle = document.querySelector('.page-header__toggle');

  var closeMenu = function () {
    menu.classList.add('page-header--closed');
    menu.classList.remove('page-header--opened');
    document.body.classList.remove('page-header__fix');
  };

  var openMenu = function () {
    menu.classList.remove('page-header--closed');
    menu.classList.add('page-header--opened');
    document.body.classList.add('page-header__fix');
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
  }

  var menuItems = menu.querySelectorAll('.page-header__link');

  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      closeMenu();
    });
  });
})();
