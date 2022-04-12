import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";


function _drawHouses() {
  let houseCardsTemplate = ''
  ProxyState.houses.forEach(h => houseCardsTemplate += h.CardTemplate)
  document.getElementById('listings').innerHTML = `
    <div class="row houses">
      ${houseCardsTemplate}
    </div>
  `

  document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add House 🏠'
}

async function _getAllHouses() {
  try {
    await housesService.getAllHouses()
  } catch (error) {
    console.error('[Could not find house]',error.message)
    Pop.toast(error.message, 'error')
  }
}



export class HousesController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses)
    _getAllHouses()
  }
  async addHouse(id) {
    // DO THIS like always
    try {
      window.event.preventDefault()
      /**@type {HTMLFormElement} */
      // @ts-ignore
      const form = window.event.target 
      const formData = {
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        levels: form.stories.value,
        imgUrl: form.imgUrl.value,
        year: form.year.value,
        price: form.price.value,
        description: form.description.value
      }
      form.reset()
      if (id == 'undefined') {
          await housesService.addHouse(formData)
      } else {
          formData.id = id
          await housesService.editHouse(formData)
      }
    } catch (error) {
      console.error('[Couldnt add house]',error.message)
      Pop.toast(error.message, 'error')
    }
  }

  clearForm() {
    document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
  }

  openEditor(id) {
    let house = ProxyState.houses.find(h => h.id === id)
    if(!house) {
      Pop.toast('Invalid House ID', 'error')
      return
    }
    
    document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm(house)
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).show()
  }
  async removeHouse(id) {
    try {
      if(await Pop.confirm())
        await housesService.removeHouse(id)
    } catch (error) {
      console.error('[Could not remove house]', error.message)
      Pop.toast(error.message, 'error')
    }
  }
  drawHouses() {
    _drawHouses()
    // REVIEW [epic=Mark] How could we refactor this? 
    // @ts-ignore
    // bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}