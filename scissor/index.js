import {modalToggler} from '/lib/lib.js';


const features = document.querySelector('.js_features');
const feturesModal = document.querySelector('.js_features .features');
const feturesModalLi = document.querySelectorAll('.js_features .features ul li');
const featuresImg = document.querySelector('.js_features .js-features-img');


modalToggler(features, feturesModal, null, feturesModalLi, 'hide_features', featuresImg, 'rotate-180')









const hide_trim_url_domain_dropdown = document.querySelector('.js-trim_url_domain > ul');
const trim_url_domain_input = document.querySelector('.js-trim_url_domain > input');

trim_url_domain_input.addEventListener('focus', (e) => {
        hide_trim_url_domain_dropdown.classList.remove('hide_trim_url_domain_dropdown');

})

trim_url_domain_input.addEventListener('blur', (e) => {
    setTimeout(() => {
        hide_trim_url_domain_dropdown.classList.add('hide_trim_url_domain_dropdown');

    }, 200)

})






document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        // const showIcon1 = item.querySelector(".show-icon1");
        // const showIcon2 = item.querySelector(".show-icon2");

        question.addEventListener("click", function () {
            // Toggle the active class to hide/show the answer
            item.classList.toggle("active");

            // Toggle the visibility classes for showIcon1 and showIcon2
            // showIcon1.classList.toggle("hidden");
            // showIcon2.classList.toggle("hidden");

            // Close other FAQ items
            faqItems.forEach(function (otherItem) {
                if (
                    otherItem !== item &&
                    otherItem.classList.contains("active")
                ) {
                    // If other item is active, hide its answer and adjust icons
                    otherItem.classList.remove("active");
                    otherItem
                        .querySelector(".show-icon1")
                        .classList.remove("hidden");
                    otherItem.querySelector(".show-icon2").classList.add("hidden");
                }
            });
        });
    });
});