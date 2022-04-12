import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"
import { sandboxApi } from "./AxiosService.js"

class CarsService {

  async getAllCars(params = {}) {
    // Gets have an optional 2nd parameter that takes a query
    // that argument must be an object, with a property called params, that also must be an object
    const res = await sandboxApi.get('cars', { params })
    const cars = res.data.map(c => new Car(c))
    ProxyState.cars = cars
  }

  async addCar(formData) {
    // NOTE post request takes 2 arguments, the url extension, and the data
    const res = await sandboxApi.post('cars', formData)
    const newCar = new Car(res.data)
    ProxyState.cars = [newCar, ...ProxyState.cars]
  }

  async editCar(formData) {
    // NOTE put request is colleciton/id as first argument, and updated object as 2nd
    const res = await sandboxApi.put('cars/' + formData.id, formData)
    const car = new Car(res.data)
    // find the cars index
    const index = ProxyState.cars.findIndex(c => c.id == car.id)
    // NOTE replace car with updated car from database
    ProxyState.cars.splice(index, 1, car)
    ProxyState.cars = ProxyState.cars

  }


  async removeCar(id) {
    // NOTE deletes only take one argument
    // the collection / id
    const res = await sandboxApi.delete('cars/' + id)
    ProxyState.cars = ProxyState.cars.filter(c => c.id !== id)
  }
}

export const carsService = new CarsService()