

class CarsService {
  constructor(){}
}

// NOTE you are using all the services not change the object
// Singleton: only gets instantiated once and just passed around
export const carsService = new CarsService()