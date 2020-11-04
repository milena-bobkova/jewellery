'use strict';

(function () {

  var filterClear = document.querySelector('.catalog__filter-clear');
  var form = document.querySelector('.catalog__filter-form');
  var inputs = document.querySelectorAll('[name=filter]');

  var clearForm = function (button, form) {
    if (button !== null && form !== null && form.childNodes.length > 0 && inputs.length > 0) {
      button.addEventListener('click', function () {
        form.reset();

        for (var i = 0; i < inputs.length; i++) {
          var fieldType = inputs[i].type.toLowerCase();

          switch (fieldType) {
            case 'number':
              inputs[i].value === "";
              break;

            case 'checkbox':
              if (inputs[i].checked) {
                inputs[i].checked = false;
              }
              break;

            default:
              break;
          }
        }
      });
    }
  };

  clearForm(filterClear, form);

})();
