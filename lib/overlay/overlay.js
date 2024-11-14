const overlay_button = document.querySelector('button.overlay-button');
const overlay_button_image = document.querySelectorAll('button.overlay-button > img');
const overlay = document.querySelector('div.overlay');
const overlay_links = document.querySelectorAll('div.overlay-contents > div > section > div > a');

const toggleOverlay = (event) => {
      overlay.classList.toggle('active')
      overlay.classList.toggle('inactive')

      overlay_button_image.forEach((element) => {
            element.toggleAttribute('hidden')
      })
}

overlay_button.addEventListener('click', toggleOverlay)
overlay_links.forEach((element) => {
      element.addEventListener('click', () => {
            overlay.classList.remove('active')
      })
})