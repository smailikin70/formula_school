function createTabs(buttons, contents) {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            contents.forEach((item) => {
                const contentValue = item.getAttribute("data-filter");
                if (contentValue === filterValue) {
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                }
            });
        });
    });
}

const filterButtons = document.querySelectorAll(".template__item");
const galleryItems = document.querySelectorAll(".section__content");

createTabs(filterButtons, galleryItems);

