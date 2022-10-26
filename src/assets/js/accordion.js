document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.getElementById('accordion');

    accordion.addEventListener('click', (e) => {
        const target = e.target;
        const accordionItems = accordion.querySelectorAll(".action__item");
        const isAccordionHead = target.classList.contains("action__head");
        const isAccordionHeadSpan = target.tagName === 'SPAN';

        if (isAccordionHead || isAccordionHeadSpan) {
            const accordionItem = target.closest(".action__item");

            accordionItems.forEach((item) => {
                item.classList.remove("active");
            });

            accordionItem.classList.toggle('active');
        }
    })
});