'use strict';

(function () {
  var tabs = document.querySelectorAll('.card__info-list-link');
  var info = document.querySelector('.card__info-tabs');
  var content = document.querySelectorAll('.card__info-description');

  var hideTabContentHandler = function (a) {
    for (var i = a; i < content.length; i++) {
      content[i].classList.remove('card__info-description--show');
      content[i].classList.add('card__info-description--hide');
      tabs[i].classList.remove('card__info-list-link--active');
    }
  };

  hideTabContentHandler(1);

  var showTabContentHandler = function (b) {
    if (content[b].classList.contains('card__info-description--hide')) {
      content[b].classList.remove('card__info-description--hide');
      content[b].classList.add('card__info-description--show');
      tabs[b].classList.add('card__info-list-link--active');
    }
  };

  var clickTab = function () {
    if (info !== null && tabs.length > 0 && content.length > 0) {
      info.addEventListener('click', function (evt) {
        var target = evt.target;
        if (target && target.classList.contains('card__info-list-link')) {
          for (var i = 0; i < tabs.length; i++) {
            if (target === tabs[i]) {
              hideTabContentHandler(0);
              showTabContentHandler(i);
            }
          }
        }
      });
    }
  };

  clickTab();

})();
