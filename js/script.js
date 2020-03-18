var button = document.querySelector(".map--form__button");
var popup = document.querySelector(".popup-container");
var popupClose = document.querySelector(".popup--form_close");
var popupCloseOv = document.querySelector(".popup-container-overlay");
var popupForm =  popup.querySelector(".popup--form");
var popupName = popup.querySelector("[name=name]");
var popupEmail = popup.querySelector("[name=email]");
var popupComment = popup.querySelector("[name=comment]")

document.addEventListener("DOMContentLoaded", function(event) {
  //do work
});

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  popupName.focus()
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
});

popupCloseOv.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    if ( popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
    }
  }
});
