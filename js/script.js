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

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
    // options
});