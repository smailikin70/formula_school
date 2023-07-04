const tabsBtn = document.querySelectorAll('.nav_link');
const tabsItem = document.querySelectorAll('.pages');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) {
            btn.classList.remove('nav_link_active')
        });
        e.currentTarget.classList.add('nav_link_active');

        tabsItem.forEach(function (element) {
            element.classList.remove('pages_active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('pages_active');
    })
})
