export const modalToggler = (btn, modal, modal_container, modal_contents, modal_classes, image, image_classes) => {

      const closeNav = () => {
            modal.classList.add(modal_classes)
            if (image && image_classes) image.classList.remove(image_classes)
      };

      btn.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.classList.toggle(modal_classes);
            if (image && image_classes) image.classList.toggle(image_classes)
      });

      if(modal_container) {
            modal_container.addEventListener('click', (e) => e.stopPropagation());
      } else {
            modal.addEventListener('click', (e) => e.stopPropagation());
      }

      ['click', 'scroll']
            .forEach((event) => {
                  const target = event === 'scroll' ? window : document.body;
                  target.removeEventListener(event, closeNav); // Remove previous listener
                  target.addEventListener(event, closeNav); // Add listener
            });


      modal_contents.forEach((el) => {
            el.addEventListener('click', () => {
                  closeNav()
            })
      })

}









// THIS IS BASICALLY WAHT THIS IS


// const toggleNav = document.getElementById('js-nav');
// const toggleNavBtn = document.getElementById('js-nav-btn');

// const links = document.querySelectorAll('#js-nav ul > li > a')
// const linkButton = document.querySelector('#js-nav ul > li > button')

// // Toggle the navigation visibility
// const closeNav = () => toggleNav.classList.add('-translate-y-40');

// // Toggle visibility on button click
// toggleNavBtn.addEventListener('click', (e) => {
//       e.stopPropagation();
//       toggleNav.classList.toggle('-translate-y-40');
// });

// // Prevent closing when clicking inside the nav
// toggleNav.addEventListener('click', (e) => e.stopPropagation());

// // Close nav when clicking outside or scrolling
// ['click', 'scroll']
//       .forEach((event) => {
//             // if the event is [scroll] use [window.addEventListener()] else using [document.body.addEventListener()]
//             (event === 'scroll' ? window : document.body).addEventListener(event, closeNav);
//       });


// // spreads links out into an array and just adding the link button to the array and then looping through it to add an event listener to the individual elements
// [...links, linkButton].forEach((el) => {
//       el.addEventListener('click', () => {
//             closeNav()
//       })
// })
