let searchFormButton = document.querySelector(".search-of-hotel-button");
let searchForm = document.querySelector(".search-form");
let arrivalDate = searchForm.querySelector(".first-input-text");
let departureDate = searchForm.querySelector(".second-input-text");
let numberAdults = searchForm.querySelector(".first-input-number");
let numberChildren = searchForm.querySelector(".second-input-number");

let isStorageSupport = true;
let storage = "";

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
        searchForm.classList.add("visually-hidden");
    }

    if (storage) {
        arrivalDate.value = storage;
        numberAdults = storage;
        departureDate.focus();
        } else {
        arrivalDate.focus();
    }

});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (!searchForm.classList.contains("visually-hidden")) {
            evt.preventDefault();
            searchForm.classList.remove("visually-on");
            searchForm.classList.add("visually-hidden");
        }
    }
});