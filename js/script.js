let searchFormButton = document.querySelector(".search-of-hotel-button");
let searchForm = document.querySelector(".search-form");

searchFormButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (searchForm.classList.contains("visually-hidden")) {
        searchForm.classList.remove("visually-hidden");
        searchForm.classList.add("visually-visible");
    } else {
        searchForm.classList.remove("visually-visible");
        searchForm.classList.add("visually-hidden");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (!searchForm.classList.contains("visually-hidden")) {
            evt.preventDefault();
            searchForm.classList.remove("visually-visible");
            searchForm.classList.add("visually-hidden");
        }
    }
});