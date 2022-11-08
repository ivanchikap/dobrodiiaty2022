document.addEventListener('DOMContentLoaded', (e) => {

    //nav
    const nav = document.querySelector('.nav');
    const navFooter = document.querySelector('.nav--footer');
    const navSidebar = document.querySelector('.nav--sidebar');

    nav.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.classList.contains('nav__item')) return;
        addActive(e.target, e.currentTarget);

        const footerNav = document.querySelector('.nav--footer');
        const [...footerLinks] = footerNav.querySelectorAll('.nav__item');

        const neededEl = footerLinks.find((link) => link.href === e.target.href);

        addActive(neededEl, footerNav);


        const blockId = e.target.getAttribute('href').substring(1);

        document.getElementById(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    navFooter.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.classList.contains('nav__item')) return;
        addActive(e.target, e.currentTarget);

        const headerNav = document.querySelector('.nav');
        const [...headerLinks] = headerNav.querySelectorAll('.nav__item');

        const neededEl = headerLinks.find((link) => link.href === e.target.href);

        addActive(neededEl, headerNav);


        const blockId = e.target.getAttribute('href').substring(1);

        document.getElementById(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    navSidebar.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.classList.contains('nav__item')) return;
        addActive(e.target, e.currentTarget);

        const footerNav = document.querySelector('.nav--footer');
        const [...footerLinks] = footerNav.querySelectorAll('.nav__item');

        const neededEl = footerLinks.find((link) => link.href === e.target.href);

        addActive(neededEl, footerNav);




        const blockId = e.target.getAttribute('href').substring(1);

        if (blockId) {
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
});