const filterButtons = document.querySelectorAll(".subject__item");
const galleryItems = document.querySelectorAll(".teachers__card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue)) {
                item.classList.add("show");
            } else {
                item.classList.remove("show");
            }
        });
    });
});
