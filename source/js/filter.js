'use strict';

(function () {

  var filter = document.querySelector('.catalog__filter');
  var filterToggle = document.querySelector('.catalog__filter-btn');

  var closeFilter = function () {
    filter.classList.add('catalog__filter--closed');
    filter.classList.remove('catalog__filter--opened');
    document.body.classList.remove('catalog__filter-fix');
  };

  var openFilter = function () {
    filter.classList.remove('catalog__filter--closed');
    filter.classList.add('catalog__filter--opened');
    document.body.classList.add('catalog__filter-fix');
  };

  var toggleFilterClickHandler = function (evt) {
    if (filter !== null && filter.childNodes.length > 0) {
      evt.preventDefault();
      if (filter.classList.contains('catalog__filter--closed')) {
        openFilter();
      } else {
        closeFilter();
      }
    }
  };

  if (filterToggle !== null) {
    filterToggle.addEventListener('click', toggleFilterClickHandler);
  }
})();
