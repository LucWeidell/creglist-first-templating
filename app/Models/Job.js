

export default class Job{


      /**
   * Constructor for Jobs:
   * @param {*} Job represents a Job
   */
    constructor({ salary, position, remote, city, hrWeek, overTime, imgUrl}){
      this.salary = salary,
      this.position = position,
      this.remote = remote || false,
      this.city = city,
      this.hrWeek = hrWeek,
      this.overTime = overTime || '0',
      this.imgUrl = imgUrl || '//placebeard.it/300x300'
      }

      getTemplate(){
        let template = ''
        template += /*html*/`

        `
      }
}
