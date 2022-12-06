document.addEventListener('DOMContentLoaded', (e) => {

    //nav
    const nav = document.querySelector('.nav--header');
    const navFooter = document.querySelector('.nav--footer');
    const navSidebar = document.querySelector('.nav--sidebar');

    nav.addEventListener('click', (e) => {
        const firstChar =  e.target.getAttribute('href')[0];

        if (firstChar === '#') {
            e.preventDefault();
        }
        if (!e.target.classList.contains('nav__item')) return;
        addActive(e.target, e.currentTarget);

        const footerNav = document.querySelector('.nav--footer');
        const [...footerLinks] = footerNav.querySelectorAll('.nav__item');

        const neededEl = footerLinks.find((link) => link.href === e.target.href);

        addActive(neededEl, footerNav);


        const blockId = e.target.getAttribute('href').substring(1);

        if (firstChar === '#') {
            document.getElementById(blockId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });


    navFooter.addEventListener('click', (e) => {
        const firstChar =  e.target.getAttribute('href')[0];
        if (firstChar === '#') {
            e.preventDefault();
        }

        if (!e.target.classList.contains('nav__item')) return;
        addActive(e.target, e.currentTarget);

        const headerNav = document.querySelector('.nav');
        const [...headerLinks] = headerNav.querySelectorAll('.nav__item');

        const neededEl = headerLinks.find((link) => link.href === e.target.href);

        addActive(neededEl, headerNav);


        const blockId = e.target.getAttribute('href').substring(1);


        if (firstChar === '#') {
            document.getElementById(blockId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

    navSidebar.addEventListener('click', (e) => {
        const firstChar =  e.target.getAttribute('href')[0];
        if (firstChar === '#') {
            e.preventDefault();
        }
        if (!e.target.classList.contains('nav__item')) return;
        addActive(e.target, e.currentTarget);

        const footerNav = document.querySelector('.nav--footer');
        const [...footerLinks] = footerNav.querySelectorAll('.nav__item');

        const neededEl = footerLinks.find((link) => link.href === e.target.href);

        addActive(neededEl, footerNav);


        const blockId = e.target.getAttribute('href').substring(1);

        if (firstChar === '#') {
            document.getElementById(blockId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        //hide sidebar
        let bodyS = document.body;
        bodyS.classList.remove("show-sidebar");
    });

    function addActive(element, parent, classOfItems = 'nav__item') {
        const items = parent.querySelectorAll(`.${classOfItems}`);
        items.forEach((item) => {
            item.classList.remove('active');
        });
        element.classList.add('active');
    }

    //calculate gradient in activity section
    const activity = document.getElementById('activity');
    const activitySlider = document.querySelector('.activity__slider');

    if (activitySlider) {
        const activityHeight = Number.parseFloat(window.getComputedStyle(activity, null).height);

        const sliderHeight = Number.parseFloat(window.getComputedStyle(activitySlider, null).height);

        const percentage = Number.parseInt((sliderHeight/activityHeight)*100);

        const screenWidth = window.screen.width;
        if (screenWidth < 993) {
            activity.style.backgroundImage = `linear-gradient(to top, #f2effa 0, #f2effa ${percentage}%, #fff ${percentage}%, #fff 100%)`;
        }
    }
});