const overlay_button = document.querySelector('button.overlay-button');
const overlay_button_wp_pusher = document.querySelector('#overlay-button');

const overlay_button_image = document.querySelectorAll('button.overlay-button > img');
const overlay_button_image_wp_pusher = document.querySelectorAll('buttonoverlay-button > img');

const overlay = document.querySelector('div.overlay');
const overlay_links = document.querySelectorAll('div.overlay-contents > div > section > div > a');

const toggleOverlay = (event) => {
      overlay.classList.toggle('active')
      overlay.classList.toggle('inactive')

      if (overlay_button_image) {
            overlay_button_image.forEach((element) => {
                  element.toggleAttribute('hidden')
            })
      }

      if (overlay_button_image_wp_pusher) {
            overlay_button_image_wp_pusher.forEach((element) => {
                  element.toggleAttribute('hidden')
            })
      }
}

if (overlay_button) overlay_button.addEventListener('click', toggleOverlay);
if (overlay_button_wp_pusher) overlay_button_wp_pusher.addEventListener('click', toggleOverlay);