const overlay = document.querySelector('div.overlay');
const overlay_links = document.querySelectorAll('div.overlay div.overlay_items div.overlay_grid div.overlay_grid_items a');

const overlay_button = document.querySelector('button.toggle_overlay');
const overlay_button_image = document.querySelectorAll('button.toggle_overlay > img');




const toggleOverlay = () => {
      overlay.classList.toggle('active')
      overlay.classList.toggle('inactive')
      document.body.classList.toggle('overflow_hidden')

      if (overlay_button_image) {
            overlay_button_image.forEach((element) => {
                  element.toggleAttribute('hidden')
            })
      }
}

if (overlay_button) overlay_button.addEventListener('click', toggleOverlay);

function func() {
      
      overlay_links.forEach((el) => {
            const parent_div_element = el.closest('div')

            if (window.location.pathname === el.getAttribute('href')) {
                  // const parent_div_element = el.closest('div')
                  
                  return parent_div_element.classList.add('active_link')
                  
            }
            
            parent_div_element.classList.remove('active_link')
            
      })
}

func()