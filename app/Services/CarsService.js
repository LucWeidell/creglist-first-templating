import { ProxyState } from "../AppState.js"
//NOTE why does service need to know car class to make one : THINK I KNOW WHU
import Car from "../Models/Car.js"



class CarsService {
  constructor(){}


  createCar(rawCar){
    debugger
    ProxyState.cars = [...ProxyState.cars, new Car(rawCar)]
  }
}

// NOTE you are using all the services not change the object
// Singleton: only gets instantiated once and just passed around
export const carsService = new CarsService()