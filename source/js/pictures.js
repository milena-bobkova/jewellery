'use strict';

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
