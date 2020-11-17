'use strict';

(function () {
  var dropdowns = document.querySelectorAll('.dropdown');
  var dropdownButtons = document.querySelectorAll('.dropdown__click');
  var dropdownIcons = document.querySelectorAll('.dropdown__button');
  var dropdownItems = document.querySelectorAll('.dropdown__item');

  for (var j = 0; j < dropdowns.length; j++) {
    dropdowns[j].classList.remove('dropdown--nojs');
  }

  var dropdownHandler = function (button, item, icon) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      item.classList.toggle('dropdown__item--opened');
      icon.classList.toggle('dropdown__button--opened');
    });
  };

  var dropdownGo = function () {
    if (dropdownButtons.length > 0 && dropdownItems.length > 0) {
      for (var i = 0; i < dropdownItems.length; i++) {
        if (dropdownButtons[i] !== null && dropdownIcons[i] !== null && dropdownItems[i] !== null && dropdownItems[i].childNodes.length > 0) {
          dropdownHandler(dropdownButtons[i], dropdownItems[i], dropdownIcons[i]);
        }
      }
    }
  };

  dropdownGo();

})();
