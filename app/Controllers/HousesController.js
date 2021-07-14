import { ProxyState } from "../AppState.js";


_draw(){
  template = ''
  let houses = ProxyState.houses
  houses.forEach(house => {
    template += house.getTemplate()
  });
}

export default class HousesController{

  constructor(){
    ProxyState.on['houses', _draw]
    _draw()
  }
}