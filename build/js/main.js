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

(function () {
  var formFilter = document.querySelector('.catalog__filter-form');
  var filterClear = document.querySelector('.catalog__filter-clear');
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
        openMenu();
      }
    });
  }
  var escPressHandler = function (evt) {
    if (evt.key === 'Escape') {
      closeMenu();
    }
  };
  var menuItems = menu.querySelectorAll('.page-header__link');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function () {
      closeMenu();
    });
  }
})();

(function () {
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
    if (loginOpenButton !== null && loginCloseButton !== null && modalLogin !== null && modalLogin.childNodes.length > 0 && loginOverlay !== null) {
      openModalHandler(loginOpenButton, modalLogin, loginOverlay);
      closeModalHandler(loginCloseButton, modalLogin, loginOverlay);
    }
  };
  var modalFilter = document.querySelector('.filter');
  var filterOverlay = document.querySelector('.filter-overlay');
  var filterOpenButton = document.querySelector('.filter-open');
  var filterCloseButton = document.querySelector('.filter-close');
  if (modalFilter !== null && modalFilter.classList.contains('catalog__filter--nojs')) {
    modalFilter.classList.remove('catalog__filter--nojs');
  }
  if (filterOpenButton !== null) {
    filterOpenButton.classList.remove('catalog__filter-btn--nojs');
  }
  var showFilter = function () {
    if (filterOpenButton !== null && filterCloseButton !== null && modalFilter !== null && modalFilter.childNodes.length > 0 && filterOverlay !== null) {
      openModalHandler(filterOpenButton, modalFilter, filterOverlay);
      closeModalHandler(filterCloseButton, modalFilter, filterOverlay);
    }
  };
  var modalAdd = document.querySelector('.add');
  var addOverlay = document.querySelector('.add-overlay');
  var addOpenButton = document.querySelector('.add-open');
  var addCloseButton = document.querySelector('.add-close');
  var showAdd = function () {
    if (addOpenButton !== null && addCloseButton !== null && modalAdd !== null && modalAdd.childNodes.length > 0 && addOverlay !== null) {
      openModalHandler(addOpenButton, modalAdd, addOverlay);
      closeModalHandler(addCloseButton, modalAdd, addOverlay);
    }
  };
  showLogin();
  showFilter();
  showAdd();
})();

(function () {
  var smallPictures = document.querySelectorAll('.card__photo-wrap');
  var picturesContainer = document.querySelector('.card__photos-wrap-small');
  var bigPictures = document.querySelectorAll('.card__photo-wrap-big');
  var hideBigPicturesHandler = function (a) {
    for (var i = a; i < bigPictures.length; i++) {
      bigPictures[i].classList.remove('card__photo-wrap-big--show');
      bigPictures[i].classList.add('card__photo-wrap-big--hide');
    }
  };
  hideBigPicturesHandler(1);
  var showBigPicturesHandler = function (b) {
    if (bigPictures[b].classList.contains('card__photo-wrap-big--hide')) {
      bigPictures[b].classList.remove('card__photo-wrap-big--hide');
      bigPictures[b].classList.add('card__photo-wrap-big--show');
    }
  };
  if (picturesContainer !== null && smallPictures.length > 0 && bigPictures.length > 0) {
    picturesContainer.addEventListener('click', function (evt) {
      var targetPicture = (evt.target.parentNode).parentNode;
      if (targetPicture && targetPicture.classList.contains('card__photo-wrap')) {
        for (var i = 0; i < smallPictures.length; i++) {
          if (targetPicture === smallPictures[i]) {
            hideBigPicturesHandler(0);
            showBigPicturesHandler(i);
          }
        }
      }
    });
  }
})();

(function () {
  var slider = {
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        pagination: {
          type: 'bullets',
        },
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        pagination: {
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + ' of ' + total;
          },
        },
      },
    },
  };
  var astivateSlider = function () {
    slider = new window.Swiper('.swiper-container', slider);
  };
  astivateSlider();
})();
