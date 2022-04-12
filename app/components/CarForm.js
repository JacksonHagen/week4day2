import { Car } from "../Models/Car.js"

export function getCarform(car) {
  car = car || new Car({})
  return /*html*/`
  <form onsubmit="app.carsController.handleSubmit('${car.id}')">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="make" class="form-label">Make</label>
        <input type="text" class="form-control" name="make" id="make" aria-describedby="make"
          placeholder="Make..." required value="${car.make}">
      </div>
      <div>
        <label for="model" class="form-label">Model</label>
        <input type="text" class="form-control" name="model" id="model" aria-describedby="model"
          placeholder="Model..." required value="${car.model}">
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="year" class="form-label">Year</label>
        <input type="number" class="form-control" name="year" id="year" aria-describedby="year"
          placeholder="Year..." min="1950" max="2022" required value="${car.year}">
      </div>
      <div>
        <label for="color" class="form-label">Color</label>
        <input type="color" class="form-control" name="color" id="color" aria-describedby="color" required value="${car.color}">
      </div>
      <div>
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
          placeholder="Price..." min='1' required value="${car.price}">
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="img" class="form-label">Image Url</label>
        <input type="url" class="form-control" name="img" id="img" aria-describedby="img"
          placeholder="Image Url..." required value="${car.imgUrl}">
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="description" class="form-label">Description</label>
        <textarea type="text" class="form-control" name="description" id="description"
          aria-describedby="description" placeholder="Description..." min="5" max="250" required >${car.description}</textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">${car.id ? 'Save' : 'Create'}</button>
    </div>
  </form>`
}