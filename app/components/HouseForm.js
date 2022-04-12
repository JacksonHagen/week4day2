import { House } from "../Models/House.js"

//REVIEW line 22 placeholder function && listeners
export function getHouseForm(house) {
  house = house || new House({})
  console.log(house);
  return /*html*/ `
  <form onsubmit="app.housesController.addHouse('${house.id}')">
  <div class="input-group mb-3">
    <input class="form-control text-center" type="number" name="bedrooms" id="bedrooms" min="1" max="10" placeholder="Bedrooms" required value="${house.bedrooms}">
    <input class="form-control mx-3 text-center" type="number" name="bathrooms" id="bathrooms" min="1" max="10" placeholder="Bathrooms" required value="${house.bathrooms}">
    <input class="form-control text-center" type="number" name="stories" id="stories" min="1" max="5"  placeholder="Stories" required value="${house.levels}">
  </div>
  <div class="input-group mb-3">
    <input class="form-control" type="url" name="imgUrl" id="imgUrl" placeholder="Image URL" required value="${house.imgUrl}">
  </div>
  <div class="input-group mb-3">
    <textarea class="form-control textarea" name="description" id="description" cols="30" rows="3" placeholder="Description">${house.description}</textarea>
  </div>
  <div class="d-flex justify-content-between">
    <input class="form-control" type="number" name="price" id="price" placeholder="Price" required value="${house.price}" max="999999999">
    <input class="form-control mx-3" type="number" name="year" id="year" placeholder="Year" required value="${house.year}">  
    <button class="btn btn-primary" type="submit">Submit</button>
  </div>
</form> 
  `
  
}