const dropdown = document
      .querySelectorAll("section:nth-child(2) > div > form > div:nth-child(2) > div:nth-child(1) > div > ul, " + "section:nth-child(2) > div > form > div:nth-child(4) > div:nth-child(1) > div > ul");

const dropdownInput = document
      .querySelectorAll("section:nth-child(2) > div > form > div:nth-child(2) > div:nth-child(1) > div > input, " + "section:nth-child(2) > div > form > div:nth-child(4) > div:nth-child(1) > div > input");

const passwordInput = document.querySelector("section:nth-child(2) > div > form > div:nth-child(5) > div > div > input")




const dropdown_gender = dropdown[0]
const dropdown_activity = dropdown[1]
const paswd_image_element = passwordInput.nextElementSibling;









const openDropDown = (index, e, input, img_element) => {
      input.focus()
      img_element.classList.add('rotate');

      dropdown.
            forEach((dropdown) => {
                  dropdown.classList.add('hide_option')
            })

      dropdown[index].classList.remove('hide_option')
}


const closeDropDown = (e, img_element) => {

      dropdown.
            forEach((dropdown) => {
                  dropdown.classList.add('hide_option')
            });

      img_element.classList.remove('rotate');
}


const updateInputs = (el) => {
      activeDropdown(dropdown_gender, el)
      activeDropdown(dropdown_activity, el)
};



function activeDropdown(elements, li_element) {
      // Check if the clicked element is from the gender/activityLevels dropdown

      if (elements.contains(li_element)) {
            elements.querySelectorAll('li')
                  .forEach((li) => {
                        if (li !== li_element) li.removeAttribute('selected');
                  });

            li_element.setAttribute('selected', '');

            const input = elements.previousElementSibling;
            input.value = li_element.textContent;
      }
}



function changeSelected(element, direction, index) {
      const sibling = direction === 'next'
            ? element.nextElementSibling
            : element.previousElementSibling;


      if (sibling) {
            sibling.setAttribute('selected', '');
            element.removeAttribute('selected');

      } else {
            const boundary_li = direction === 'next'
                  ? dropdown[index].querySelector('li')
                  : dropdown[index].querySelector('li:last-of-type')

            boundary_li.setAttribute('selected', '');
            element.removeAttribute('selected');
      }
}




const updateSelectedList = (e, index) => {
      let is_dropdown_is_closed = dropdown[index].classList.contains('hide_option')
      let element = dropdown[index].querySelector('li[selected]');

      let parent_div_element = dropdown[index]?.parentElement;
      let input_element = parent_div_element?.querySelector('input');
      let child_img_element = parent_div_element?.querySelector('img');
      

      openDropDown(index, '', input_element, child_img_element)

      if (!is_dropdown_is_closed) {
            if (e.key === 'Enter' && element) {
                  e.target.value = element.textContent
                  closeDropDown('', child_img_element)
            }


            if (element && (e.key === 'ArrowDown' || e.key === 'ArrowUp') && (element.nextElementSibling || element.previousElementSibling)) {
                  const direction = e.key === 'ArrowDown' ? 'next' : 'previous';
                  changeSelected(element, direction, index);

            }
      }

}






const gender = [{ value: 'male' }, { value: 'female' }]
const activityLevel = [{ value: 'Sedentary', }, { value: 'Lightly Active (light exercise/sports 1-3 days/week)' }, { value: 'Moderately Active (moderate exercise/sports 3-5 days/week)' }, { value: 'Very Active (hard exercise/sports 6-7 days a week)' }, { value: 'Super Active (very hard exercise & physical job or 2x training)' }]

let searchGender = gender;
let searchActivityLevel = activityLevel;



const searchDropdown = (e, index) => {
      if (index === 0) {
            searchGender = gender.filter(({ value }) => {
                  return value.toLowerCase().includes(e.target.value.toLowerCase())
            })

            regenerate(dropdown_gender, searchGender)

      }


      if (index === 1) {
            searchActivityLevel = activityLevel.filter(({ value }) => {
                  return value.toLowerCase().includes(e.target.value.toLowerCase())
            })


            regenerate(dropdown_activity, searchActivityLevel)
      }
}



regenerate(dropdown_gender, searchGender)
regenerate(dropdown_activity, searchActivityLevel)



function regenerate(ul_list, data,) {

      ul_list.replaceChildren();

      const genderFragment = document.createDocumentFragment();
      data.forEach(({ value }) => {
            const newLiElement = document.createElement('li')
            const textNode = document.createTextNode(value);


            newLiElement.append(textNode)
            genderFragment.append(newLiElement);

      })

      ul_list.append(genderFragment);

      const firstLiElement = ul_list.querySelector('li')
      if (firstLiElement)
            firstLiElement.setAttribute('selected', '')

      ul_list.querySelectorAll('li')
            .forEach((el) => {
                  el.addEventListener('click', (e) => updateInputs(el, e))
            })

}



dropdownInput
      .forEach((input, index) => {
            const img_element = input.previousElementSibling;

            input.addEventListener('focus', (e) => openDropDown(index, e, input, img_element))
            input.addEventListener('blur', (e) => closeDropDown(e, img_element))
            input.addEventListener('input', (e) => searchDropdown(e, index))
            input.addEventListener('keydown', (e) => updateSelectedList(e, index));
            img_element.addEventListener('click', (e) => openDropDown(index, e, input, img_element))


      })




paswd_image_element.addEventListener('click', (e) => {
      if (passwordInput.type === 'password') {
            passwordInput.setAttribute('type', 'text')
            paswd_image_element.setAttribute('src', './images/show.png')


      } else {
            passwordInput.setAttribute('type', 'password')
            paswd_image_element.setAttribute('src', './images/hide.png')

      }

})
