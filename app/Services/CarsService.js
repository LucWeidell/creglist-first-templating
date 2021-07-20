import { ProxyState } from "../AppState.js"
//NOTE why does service need to know car class to make one : THINK I KNOW WHU
import Car from "../Models/Car.js"
import {api} from "./AxiosService.js"



class CarsService {
  constructor(
  ){
    this.getAllCars()
  }


  async createCar(rawCar){
    try {
    console.log('creating car step 2:')
    // NOTE can say new Car(rawCar) to catch errors
    const res = await api.post('cars', new Car(rawCar))
    ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
    console.log('your new car to server:', res.data)
    } catch (error) {
      console.log(error)
    }
  }

  async deleteCar(carId){
    try{
      const res = await api.delete('car/' + carId)
      console.log(res.data)
      ProxyState.cars = ProxyState.cars.filter(c => c.id != carId)
      //NOTE this also works just slower calling server
      //ProxyState.cars = this.getAllCars()
    } catch (error){
      console.error(error)
    }
  }

  async getAllCars() {
    try {
    //res = responce from api
    //NOTE if not awaited the res returns the promise =
    const res = await api.get('cars')
    ProxyState.cars = res.data.map(c => new Car(c))

    } catch (error) {
      console.error(error)
    }
  }


  async bidCar(carId){
    try{
      console.log('Bid Car:', carId)
      foundCar.price+=100
      const res = await api.put('cars/'+ carId, foundCar)
      console.log('updated car',res.data)
      ProxyState.cars = ProxyState.cars

      //NOTE this also works just slower calling server
      //this.getAllCars()
    } catch (error){
      console.error(error)
    }
  }

}

// NOTE you are using all the services not change the object
// Singleton: only gets instantiated once and just passed around
export const carsService = new CarsService()