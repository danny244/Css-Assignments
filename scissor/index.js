import { modalToggler } from '/lib/lib.js';


document.addEventListener('DOMContentLoaded', () => {


    const features = document.querySelectorAll('.js_features');




    const largeScreenNavigationFeaturesFunction = () => {


        const features_large_screen = features[0]

        const large_screen_features_modal = features_large_screen.querySelector('.features');
        const large_screen_features_modal_li = features_large_screen.querySelectorAll('.features ul li');
        const large_screen_features_modal_image = features_large_screen.querySelector('.js-features-img');

        modalToggler(features_large_screen, large_screen_features_modal, null, large_screen_features_modal_li, 'hide_features', large_screen_features_modal_image, 'rotate-180')


    }



    const smallScreenNavigationFunction = () => {
        const small_screen_navigation_button = document.getElementById('js-navigation-btn');
        const small_screen_navigation_bar = document.querySelector('nav.small_screen');
        const small_screen_navigation_bar_content = document.querySelector('nav.small_screen > div:first-child');
        const small_screen_navigation_bar_content_lists = document.querySelectorAll('nav.small_screen > div:first-child .links_li');
        const body = document.body;


        const closeSmallScreenNavigation = () => {
            body.classList.remove('overflow-hidden')
            small_screen_navigation_bar.classList.add('-translate-y-[150vh]')
        }

        const toggleSmallScreenNavigation = () => {
            document.body.classList.toggle('overflow-hidden')
            small_screen_navigation_bar.classList.toggle('-translate-y-[150vh]')
        }

        [small_screen_navigation_button,
            small_screen_navigation_bar,
            small_screen_navigation_bar_content,
            body]
            .forEach(element => {
                element.addEventListener('click', (e) => {
                    if (element === small_screen_navigation_button) {
                        e.stopPropagation()
                        toggleSmallScreenNavigation()
                    }

                    if (element === body) closeSmallScreenNavigation()


                    if (element === small_screen_navigation_bar_content) e.stopPropagation()



                })
            });


        small_screen_navigation_bar_content_lists.forEach((element) => {
            element.addEventListener('click', (e) => {
                closeSmallScreenNavigation()
            })
        })
    }



    const smallScreenNavigationFeaturesFunction = () => {

        const features_small_screen = features[1]

        const small_screen_features_modal = features_small_screen.querySelector('.features');
        const small_screen_features_modal_li = features_small_screen.querySelectorAll('.features ul li');
        const small_screen_features_modal_image = features_small_screen.querySelector('.js-features-img');


        modalToggler(features_small_screen, small_screen_features_modal, null, small_screen_features_modal_li, 'hide_features', small_screen_features_modal_image, 'rotate-180')

    }



    const trimUrlInputFunction = () => {
        const trim_url_domain_input = document.querySelector('.js-trim_url_domain > input');
        const trim_url_domain_icon = document.querySelector('.js-trim_url_domain > .icon');


        function showOptions() {
            let option = document.querySelector('.js-trim_url_domain > ul')

            trim_url_domain_icon.classList.add('rotate-180')

            option.classList.remove('hide_trim_url_domain_dropdown')
            option.classList.add('show_trim_url_domain_dropdown')
        };

        function hideOptions() {
            let option = document.querySelector('.js-trim_url_domain > ul')


            setTimeout(() => {
                option.classList.add('hide_trim_url_domain_dropdown')
                option.classList.remove('show_trim_url_domain_dropdown')
                trim_url_domain_icon.classList.remove('rotate-180')
            }, 500)

        };

        trim_url_domain_input.addEventListener('focus', showOptions)
        trim_url_domain_input.addEventListener('blur', hideOptions)



        let option = document.querySelector('.js-trim_url_domain > ul')
        let optionChildren = option.children;

        function selectOption(event) {
            const text = event.target;

            trim_url_domain_input.value = text.textContent.trim();
        }

        // Convert HTMLCollection to an array
        Array.from(optionChildren).forEach(child => {
            child.addEventListener('click', selectOption)
        });
    }



    const faqFunction = () => {
        const faq_questions = document.querySelectorAll('.faq_container > .faq_questions');


        faq_questions.forEach((faq_question) => {
            faq_question.addEventListener('click', () => {
                const faq_open_close_icon = faq_question.querySelectorAll('img')
                const faq_answers = faq_question.querySelector('.faq_answers')


                faq_open_close_icon.forEach((img_el) => {
                    img_el.toggleAttribute('hidden')
                })

                faq_answers.classList.toggle('active');


                faq_questions.forEach((el) => {
                    const faq_answers = el.querySelector('.faq_answers');
                    const faq_open_close_icon = el.querySelectorAll('img');

                    if (el !== faq_question && faq_answers.classList.contains('active')) {
                        faq_answers.classList.remove('active')

                        faq_open_close_icon.forEach((img_el) => {
                            img_el.toggleAttribute('hidden')
                        })

                    }

                })


            })
        })
    }


    largeScreenNavigationFeaturesFunction()
    smallScreenNavigationFunction()
    smallScreenNavigationFeaturesFunction()
    trimUrlInputFunction()
    faqFunction()





    const navbar = document.querySelector('main nav.large_screen');

    const navbarStatus = () => {
        if (window.scrollY >= 10) {
            navbar.classList.add('active');
            navbar.classList.remove('inactive');

        } else {
            navbar.classList.remove('active');
            navbar.classList.add('inactive');

        }
    }

    window.addEventListener('scroll', navbarStatus)
    navbarStatus()

})