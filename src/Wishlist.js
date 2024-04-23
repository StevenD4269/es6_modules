import Car from "./car";

export default class Wishlist {
  constructor() {
    this.list = [];
    this.nextId = 0;
  }

  add(make, model, year) {
    const car = new Car(++this.nextId, make, model, year);
    this.list.push(car); //adds "const car" to .list [] array
  }
  remove(carId) {
    this.list = this.list.filter((car) => car.id !== carId);
    //targets this.list and filters out and id that matches carId
    // filter does not change the array, creates a new array
    // true = keep, false = remove thing
    // could also use .splice to remove the item:
    // this.list.splice(x, y);, changes the array
  }
}
