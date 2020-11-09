'use strict';

(function () {

  var filterClear = document.querySelector('.catalog__filter-clear');
  var formFilter = document.querySelector('.catalog__filter-form');
  var inputs = document.querySelectorAll('[name=filter]');

  var clearForm = function (button, form) {
    if (button !== null && form !== null && form.childNodes.length > 0 && inputs.length > 0) {
      button.addEventListener('click', function () {
        form.reset();

        for (var i = 0; i < inputs.length; i++) {
          var fieldType = inputs[i].type.toLowerCase();

          var setFieldValue = function (field) {
            return field.value === '';
          };

          switch (fieldType) {
            case 'number':
              setFieldValue(inputs[i]);
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

  clearForm(filterClear, formFilter);

})();
