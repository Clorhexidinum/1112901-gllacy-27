var button = document.querySelector(".map--form__button");
var popup = document.querySelector(".popup-container");
var popupClose = document.querySelector(".popup--form_close");
var popupCloseOv = document.querySelector(".popup-container-overlay");
var popupForm =  popup.querySelector(".popup--form");
var popupName = popup.querySelector("[name=name]");
var popupEmail = popup.querySelector("[name=email]");
var popupComment = popup.querySelector("[name=comment]")

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("popupName");
} catch (err) {
  isStorageSupport = false;
}

document.addEventListener("DOMContentLoaded", function(event) {
  //do work
});

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  popupForm.classList.add("popup--form-show");
  if (storage) {
    popupName.value = storage;
    password.focus();
  } else {
    popupName.focus();
  }
});

popupClose.addEventListener("click", function(a) {
  a.preventDefault(),
    popup.classList.remove("popup-show"),
    popupForm.classList.remove("popup-error");
    popupForm.classList.remove("popup--form-show");
});

popupCloseOv.addEventListener("click", function(a) {
  a.preventDefault(),
    popup.classList.remove("popup-show"),
    popupForm.classList.remove("popup-error");
    popupForm.classList.remove("popup--form-show");
});

popupForm.addEventListener("submit", function(a) {
  if (popupName.value && popupEmail.value && popupComment.value) {
    isStorageSupport && localStorage.setItem("popupName", login.value);
  } else {
    a.preventDefault(),
      popupForm.classList.remove("popup-error"),
      (popupForm.offsetWidth = popup.offsetWidth),
      popupForm.classList.add("popup-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    if ( popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});
