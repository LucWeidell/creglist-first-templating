

export default class House{

    /**
   * Constructor for house:
   * @param {*} House represents a house
   */
     constructor({year, floor, beds, bath, squareFt, price, description, imgUrl}){
      this.year = year,
      this.floor = floor,
      this.beds = beds,
      this.bath = bath,
      this.squareFt = squareFt,
      this.price = price,
      this.description = description || 'No House Description',
      this.imgUrl == imgUrl || '//placebeard.it/300x300'
    }

    getTemplate(){
      let template = ''
      template += /*html*/`

      `
    }


}