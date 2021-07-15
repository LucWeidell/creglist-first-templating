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
    new House({year: 1986, floor: 2, beds: 3, bath: 3, squareFt: 2500, price: 1000000, description:'Its cheap!', imgUrl}),
    new House({year: 2000, floor: 1, beds: 2, bath: 1, squareFt: 800, price: 750000, description:'Great young couples place.', imgUrl})
  ]
  jobs = [
    new House({salary:100000, position:'Software Engineer', remote:false, city:'Boise', hrWeek:70, overTime: 1.5, imgUrl:'//placebeard.it/500x500'}),
    new House({year: 2000, floor: 1, beds: 2, bath: 1, squareFt: 800, price: 750000, description:'Great young couples place.', imgUrl:'//placebeard.it/400x500'})
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
