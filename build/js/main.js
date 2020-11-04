'use strict';

(function () {
  var dropdowns = document.querySelectorAll('.dropdown');
  var dropdownButtons = document.querySelectorAll('.dropdown__button');
  var dropdownItems = document.querySelectorAll('.dropdown__item');

  dropdowns.forEach(function (dropdown) {
    dropdown.classList.remove('dropdown--nojs');
  });

  var dropdownHandler = function (button, item) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      item.classList.toggle('dropdown__item--opened')
      button.classList.toggle('dropdown__button--opened')
    });
  }

  var dropdownGo = function () {
    if (dropdownButtons.length > 0 && dropdownItems.length > 0) {
      for (var i = 0; i < dropdownItems.length; i++) {
        if (dropdownButtons[i] !== null && dropdownItems[i] !== null && dropdownItems[i].childNodes.length > 0) {
          dropdownHandler(dropdownButtons[i], dropdownItems[i]);
        }
      }
    }
  }

  dropdownGo();

})();

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

'use strict';

(function () {

  var menu = document.querySelector('.page-header');
  var toggle = document.querySelector('.page-header__toggle');

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

'use strict';

(function () {

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  swiper();

})();
