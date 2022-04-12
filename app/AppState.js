import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
 
class AppState extends EventEmitter {

  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({
      bedrooms: 2, 
      bathrooms: 3, 
      levels: 2, 
      imgUrl: 'https://www.theplancollection.com/Upload/Designers/108/1944/Plan1081944MainImage_13_8_2019_13_891_593.jpg', 
      year: 2000, 
      price: 500000, 
      description: 'A nice house'
    })
    ]
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({
      color: 'red',
      description: 'This is my test car',
      // @ts-ignore
      img: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/03/1988_Accord_3rd_Generation.jpg?resize=980:*',
      make: 'Honda',
      model: 'Accord',
      mileage: '289000',
      price: 5500,
      year: 1988
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
