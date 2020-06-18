var searchFormButton = document.querySelector(".search-of-hotel-button");
var searchForm = document.querySelector(".search-form");
var searchFormSubmit = document.querySelector(".search-form-button");
var arrivalDate = searchForm.querySelector("[name=arrival-date]");
var departureDate = searchForm.querySelector("[name=departure-date]");
var numberAdults = searchForm.querySelector("[name=number-of-adults]");
var numberChildren = searchForm.querySelector("[name=number-of-children]");
var modalMap = document.querySelector(".modal-map");
var modalMapImg = document.querySelector(".modal-map-img");
var modalMapiFrame = document.createElement("iframe");
 
var isStorageSupport = true;
var storage = "";


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
        arrivalDate.style.outline = "5px solid rgb(214, 9, 118, 0.5)";
        numberAdults.style.outline = "5px solid rgb(214, 9, 118, 0.5)";
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

modalMapImg.remove();
modalMap.appendChild(modalMapiFrame);
modalMapiFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1674119.8949708052!2d-112.9370305085306!3d34.962487740912074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0LjQt9C-0L3QsCA4NjMzNiwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1592137564780!5m2!1sru!2sru";
modalMapiFrame.width = "1200px";
modalMapiFrame.height = "594px";
modalMapiFrame.frameBorder = "0";
modalMapiFrame.style="border:0;"
modalMapiFrame.allowFullscreen = "";
modalMapiFrame.ariaHidden = "false";
