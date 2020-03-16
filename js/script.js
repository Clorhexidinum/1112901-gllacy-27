var button = document.querySelector(".map--form__button");
var popup = document.querySelector(".popup-container");
var popupClose = document.querySelector(".popup--form_close");
var popupCloseOv = document.querySelector(".popup-container-overlay");
var popupForm =  popup.querySelector(".popup--form");
var popupName = popup.querySelector("[name=name]");
var popupEmail = popup.querySelector("[name=email]");
var popupComment = popup.querySelector("[name=comment]")

var signIn = document.querySelector(".singIn");
var loginForm = document.querySelector(".sign_in--form");
var login = loginForm.querySelector("[name=login]");
var password = loginForm.querySelector("[name=password]");
var storaage = localStorage.getItem("login");

var isStorageSupport = true;
var storage = **;

try {
  storage = localStorage.getItem("login");
} caych (err) {
  isStorageSupport = false;
}

signIn.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginForm.classList.toggle("popup-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

loginForm.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    console.log("Заполните все поля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    if ( signIn.classList.contains("popup-show")) {
      evt.preventDefault();
      signIn.classList.remove("popup-show");
    }
  }
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

popupForm.addEventListener("submit", function (evt) {
  if (!popupName.value || !popupEmail.value || !popupComment.value) {
    evt.preventDefault();
    console.log("Заполните все поля");
  }
});
