window.addEventListener('DOMContentLoaded', () => {
    const headerPlace = document.getElementById('header__place');
    const footerPlace = document.getElementById('footer__place');

    fetch('header.html')
        .then(response => response.text())
        .then(header => {
            headerPlace.innerHTML = header + headerPlace.innerHTML;
            toggleBurger();
            underlineNavItem();
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(footer => {
            footerPlace.innerHTML += footer;
        });
});

function toggleBurger() {
    try {
        let menuBtn = document.querySelector('.burger__btn');
        let menu = document.querySelector('.nav__list');
        menuBtn.addEventListener('click', function(){
            menu.classList.toggle('nav__active');
        })
    } catch (error) {
        console.log("Произошла ошибка");
    }
}


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 15,
    slidesPerView: 1,
    autoplay: 200,
    breakpoints: {
        1020: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});

function underlineNavItem() {
    const pageTitle = document.title;
    let navMenu = document.querySelectorAll(".nav__link");
    navMenu.forEach((e) => {
        let text = e.innerHTML;
        if(text === pageTitle) {
            e.parentElement.classList.add("active");
        }
    });
}

new Accordion('.accordion-container');

$(".input__phone").mask("+7(999)999-9999");

function ChangeProgram() {
    let selectedProgram = document.getElementById("program_select").value;
    let lessonSelect = document.getElementById("lesson_select");
    let classSelect = document.getElementById("class_select");
    let addressSelect = document.getElementById("address_select");

    let optionsToHide = [];

    if (selectedProgram === "Олимпиады") {
        optionsToHide = ["Русский язык", "Информатика", "Химия", "Биология", "Обществознание",
        "История", "Литература", "География"];
        let classOptions = document.getElementById("class_select").options;
        for (let i = 0; i < classOptions.length; i++) {
            let option = classOptions[i];
            if (option.value === "11") {
                option.style.display = "none";
            } else {
                option.style.display = "block";
            }
        }
        lessonSelect.style.display = "block";
        classSelect.style.display = "block";
        addressSelect.style.display = "block";
        let addressOptions = addressSelect.options;
        for (let i = 0; i < addressOptions.length; i++) {
            addressOptions[i].style.display = "block";
        }
    }
    else if (selectedProgram === "ОГЭ") {
        optionsToHide = ["География"];
        lessonSelect.style.display = "block";
        classSelect.style.display = "block";
        addressSelect.style.display = "block";
        let addressOptions = addressSelect.options;
        for (let i = 0; i < addressOptions.length; i++) {
            addressOptions[i].style.display = "block";
        }
    }
    else if(selectedProgram === "EГЭ" || selectedProgram === "Репетиторские услуги") {
        lessonSelect.style.display = "block";
        classSelect.style.display = "block";
        addressSelect.style.display = "block";
        let addressOptions = addressSelect.options;
        for (let i = 0; i < addressOptions.length; i++) {
            addressOptions[i].style.display = "block";
        }
    }
    else if (selectedProgram === "Профориентация") {
        lessonSelect.style.display = "none";
        classSelect.style.display = "none";
        addressSelect.style.display = "none";
        let addressOptions = addressSelect.options;
        for (let i = 0; i < addressOptions.length; i++) {
            addressOptions[i].style.display = "block";
        }
    }
    else if (selectedProgram === "Практические и лабораторные") {
        lessonSelect.style.display = "block";
        classSelect.style.display = "block";
        addressSelect.style.display = "block";
        let addressOptions = addressSelect.options;
        for (let i = 0; i < addressOptions.length; i++) {
            let option = addressOptions[i];
            if (option.value !== "Ивановская 6/4") {
                option.style.display = "none";
            } else {
                option.style.display = "block";
            }
        }
    }

    let lessonOptions = lessonSelect.options;

    for (let i = 0; i < lessonOptions.length; i++) {
        let option = lessonOptions[i];
        if (optionsToHide.includes(option.value)) {
            option.style.display = "none";
        } else {
            option.style.display = "block";
        }
    }
}

function ChangeLesson() {
    let selectedLesson = document.getElementById("lesson_select").value;
    let optionsToHide = [];

    if (selectedLesson === "Химия") {
        optionsToHide = ["7"];
    }
    else if (selectedLesson === "Биология") {
        optionsToHide = ["7", "8"];
    }
    else if (selectedLesson === "Обществознание") {
        optionsToHide = ["7", "8"];
    }
    else if (selectedLesson === "История") {
        optionsToHide = ["7", "8"];
    }
    else if (selectedLesson === "Информатика") {
        optionsToHide = ["7", "8"];
    }
    else if (selectedLesson === "География") {
        optionsToHide = ["7", "8", "10"];
    }
    else if (selectedLesson === "Литература") {
        optionsToHide = ["7", "8", "10"];
    }

    let classSelect = document.getElementById("class_select");
    let classOptions = classSelect.options;

    for (let i = 0; i < classOptions.length; i++) {
        let option = classOptions[i];
        if (optionsToHide.includes(option.value)) {
            option.style.display = "none";
        } else {
            option.style.display = "block";
        }
    }
}

function ChangeClass() {
    let selectedClass = document.getElementById("class_select").value;
}

function ChangeAddress() {
    let selectedAddress = document.getElementById("address_select").value;
}


const programTabs = document.querySelectorAll(".study-program__btn");
const programContents = document.querySelectorAll(".content__display");

for (let i = 0; i < programTabs.length; i++) {
    programTabs[i].addEventListener("click", () => {
        programTabs.forEach((btn) => btn.classList.remove("study-program__btn__active"));
        programTabs[i].classList.add("study-program__btn__active");

        const filterValue = programTabs[i].getAttribute("data-filter");

        programContents.forEach((item) => {
            if (item.classList.contains(filterValue)) {
                item.classList.add("content__display__active");
            } else {
                item.classList.remove("content__display__active");
            }
        });

    });
}

const additionalTabs = document.querySelectorAll(".additional-program__btn");
const additionalContents = document.querySelectorAll(".additional__display");

for (let i = 0; i < additionalTabs.length; i++) {
    additionalTabs[i].addEventListener("click", () => {
        additionalTabs.forEach((btn) => btn.classList.remove("additional-program__btn__active"));
        additionalTabs[i].classList.add("additional-program__btn__active");

        const filterValue = additionalTabs[i].getAttribute("data-filter");

        additionalContents.forEach((item) => {
            if (item.classList.contains(filterValue)) {
                item.classList.add("additional__display__active");
            } else {
                item.classList.remove("additional__display__active");
            }
        });

    });
}

const switcher = document.querySelectorAll(".switch");
const switchContent = document.querySelectorAll(".buttons__area");

for (let i = 0; i < switcher.length; i++) {
    switcher[i].addEventListener("click", () => {
        switcher.forEach((btn) => btn.classList.remove("switch__active"));
        switcher[i].classList.add("switch__active");

        const filterValue = switcher[i].getAttribute("data-filter");

        switchContent.forEach((item) => {
            if (item.classList.contains(filterValue)) {
                item.classList.add("buttons__area__active");
            } else {
                item.classList.remove("buttons__area__active");
            }
        });

        for(let j = 0; j < programTabs.length; j++) {
            if(programTabs[j].parentElement.classList.contains("buttons__area__active")){
                programTabs[j].classList.add("study-program__btn__active");
                const filterBtnValue = programTabs[j].getAttribute("data-filter");
                programContents.forEach((content) => {
                    if (content.classList.contains(filterBtnValue)) {
                        content.classList.add("content__display__active");
                    } else {
                        content.classList.remove("content__display__active");
                    }
                });
                break;
            }
        }

    });
}