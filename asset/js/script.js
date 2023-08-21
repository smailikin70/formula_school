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



new Accordion('.accordion-container');

function ChangeProgram() {
    let selectedProgram = document.getElementById("program_select").value;

    let optionsToHide = [];

    if (selectedProgram === "Олимпиады") {
        optionsToHide = ["Русский язык", "Информатика", "Химия", "Биология", "Обществознание",
        "История", "Литература", "География"];
    }
    else if (selectedProgram === "ОГЭ") {
        optionsToHide = ["География"];
    }

    let lessonSelect = document.getElementById("lesson_select");
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
}

function ChangeClass() {
    let selectedClass = document.getElementById("class_select").value;
}

function ChangeAddress() {
    let selectedAddress = document.getElementById("address_select").value;
}

$(document).ready(function () {
    PopUpHide();
})

function PopUpShow() {
    $("#popup1").show();
}

function PopUpHide() {
    $("#popup1").hide();
}

let menuBtn = document.querySelector('.burger__btn');
let menu = document.querySelector('.nav__list');
menuBtn.addEventListener('click', function(){
    menu.classList.toggle('nav__active');
})


const programTabs = document.querySelectorAll(".study-program__btn");
const programContents = document.querySelectorAll(".content__display");

for (let i = 0; i < tabs.length; i++) {
    programTabs[i].addEventListener("click", ( event ) => {
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
    additionalTabs[i].addEventListener("click", ( event ) => {
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
    switcher[i].addEventListener("click", ( event ) => {
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

        for(let j = 0; j < tabs.length; j++) {
            if(programTabs[j].parentElement.classList.contains("buttons__area__active")){
                programTabs[j].classList.add("study-program__btn__active");
                const filterBtnValue = tabs[j].getAttribute("data-filter");
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