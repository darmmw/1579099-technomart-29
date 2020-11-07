const modalLink = document.querySelector(".company__button-contacts");
const linkPopup = document.querySelector(".modal-link");
const linkClose = linkPopup.querySelector(".modal-close");
const linkName = linkPopup.querySelector(".modal-link__form-name");
const linkForm = linkPopup.querySelector(".link-form");
const linkEmail = linkPopup.querySelector(".modal-link__form-email");
const linkMessage = linkPopup.querySelector(".modal-link__form-message");
const mapLink = document.querySelector(".company__contact-card");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("message");
} catch (err) {
  isStorageSupport = false;
}

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  linkPopup.classList.add("modal-show");

  if (storage) {
    linkEmail.value = storage;
    linkMessage.focus();
  } else {
    linkName.focus();
  }
});

linkClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  linkPopup.classList.remove("modal-show");
  linkPopup.classList.remove("modal-error");
});

linkForm.addEventListener("submit", function (evt) {
  if (!linkName.value || !linkEmail.value || !linkMessage.value) {
    evt.preventDefault();
    linkPopup.classList.remove("modal-error");
    linkPopup.offsetWidth = linkPopup.offsetWidth;
    linkPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("message", linkEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (linkPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      linkPopup.classList.remove("modal-show");
      linkPopup.classList.remove("modal-error");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
