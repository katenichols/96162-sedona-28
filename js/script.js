let searchFormButton = document.querySelector(".search-of-hotel-button");
let searchForm = document.querySelector(".search-form");
let arrivalDate = searchForm.querySelector("[name=arrival-date]");
let departureDate = searchForm.querySelector("[name=departure-date]");
let numberAdults = searchForm.querySelector("[name=number-of-adults]");
let numberChildren = searchForm.querySelector("[name=number-of-children]");

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

    if (storage === "") {
        arrivalDate.focus();
      } else {
            arrivalDate.value = storage;
            departureDate.focus();
      }
});

searchForm.addEventListener("sumbit", function(evt) {
    if (!arrivalDate.value && !numberAdults.value) {
        evt.preventDefault();
        console.log("Нужно ввести количество взрослых");
    } else {
        if (!numberAdults.value) {
            evt.preventDefault();
            console.log("Нужно ввести дату заезда и количество взрослых");
        } else {
            if (!arrivalDate.value) {
                evt.preventDefault();
                console.log("Нужно ввести дату заезда");
            } else {
                console.log("Счастливого пути!");
            }
        }
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