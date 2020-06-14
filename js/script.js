let searchFormButton = document.querySelector(".search-of-hotel-button");
let searchForm = document.querySelector(".search-form");
let arrivalDate = searchForm.querySelector("[name=arrival-date]");
let departureDate = searchForm.querySelector("[name=departure-date]");
let numberAdults = searchForm.querySelector("[name=number-of-adults]");
let numberChildren = searchForm.querySelector("[name=number-of-children]");

let isStorageSupport = true;
let storage = "";

searchForm.classList.add("visually-hidden");

try {
    storage = localStorage.getItem("arrivalDate");
    } catch (err) {
    isStorageSupport = false;
}

searchFormButton.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (searchForm.classList.contains("visually-hidden")) {
        searchForm.classList.remove("visually-hidden");
        searchForm.classList.add("visually-on");
    } else {
        searchForm.classList.remove("visually-on");
        searchForm.classList.remove("search-form-error");
        searchForm.classList.add("visually-hidden");
    }

    if (storage) {
        arrivalDate.value = storage;
        departureDate.focus();
      } 
});

searchForm.addEventListener("submit", function(evt) {
    if (!arrivalDate.value || !numberAdults.value) {
        evt.preventDefault();
        searchForm.classList.remove("search-form-error");
        searchForm.offsetWidth = searchForm.offsetWidth;
        searchForm.classList.add("search-form-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("arrivalDate", arrivalDate.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (!searchForm.classList.contains("visually-hidden")) {
            evt.preventDefault();
            searchForm.classList.remove("visually-on");
            searchForm.classList.remove("search-form-error");
            searchForm.classList.add("visually-hidden");
        }
    }
});