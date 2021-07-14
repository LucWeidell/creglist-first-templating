import Car from "./Models/Car.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // @type {Value[]} */
  //values = []
  /** @type {Car[]} */
  cars = [
    new Car({make: 'Ford', model: 'Pinto', year: 1987, price: 1200, description: 'This Car is HOT!', imgURL: '//placebeard.it/750x547'}),
    new Car({make: 'VW', model: 'Gremlin', year: 1988, price: 3400, description: 'Lime Green! You gonna love it', imgURL:'//placebeard.it/750x547'})]
  houses = [
    new House
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
