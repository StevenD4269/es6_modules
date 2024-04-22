console.log("Hello World");

// TODO
import { Wishlist } from "./Wishlist";
const carForm = document.getElementById("submitForm");
//creates a variable i can use to select that specific id
const carMake = document.getElementById("makeInput");
const carModel = document.getElementById("modelInput");
const carYear = document.getElementById("yearInput");
const paraMake = document.getElementById("car-make");
const paraModel = document.getElementById("car-model");
const paraYear = document.getElementById("car-year");
const rmvButton = document.getElementsByClassName("btn");
const ulList = document.getElementsByName("ul");

const wishlist = new Wishlist();

function showCarDetails(car) {
  // Take the variables I made and reset the elements
  // index.html shows makeInput is "Make: "
  paraMake.textContent = `Make: ${car.make}`; //reset the elements
  paraModel.textContent = `Model: ${car.model}`;
  paraYear.textContent = `Year: ${car.year}`;

  removeBtn.disabled = false; //to disable a button you set it to true
  removeBtn.setAttribute("data-carId", car.id);
  // "call" setAttributes: sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.
}

function updateDOMList() {
  ulList.innerHTML = "";
  //innerHTML removes all of the element's descendants and replaces them with nodes constructed by parsing the HTML given in the string
  //ulList is a collection of elements, not a single element, so you can't do say
  //ulList.textcontent("")
  wishlist.list.forEach((car) => {
    // for each element in the array create a list item
    const newLi = document.createElement("li"); //use create element to make li
    newLi.textContent = `${car.make}, ${car.model}`; //textcontent & string interpolation  will put make/model on every list
    newLi.addEventListener("click", () => showCarDetails(car));
    // Syntax example: ele.addEventListener("click", () => func(obj))
    ulList.appendChild(newLi); //append li to uL, appendChild adds node to END of the list
  });
}
function addCar(event) {
  event.preventDefault();
  //1. get the variables you need
  const make = carMake.value; //value gets the value passed in
  const model = carModel.value;
  const year = carYear.value;
  wishlist.add(make, model, year);
  updateDOMList;
}
function removeCar() {
  const carId = Number(removeBtn.getAttribute("data-carId"));
  return carId;
  wishlist.remove(carId); // removes carId
  updateDOMList;
  paraMake.textContent = ""; //edits my original variable to insert blanks
  paraModel.textContent = "";
  paraYear.textContent = "";
  const removeBtn = document.querySelector(".removeBtn"); // needs to look and select the button outside the function
  removeBtn.disabled = true; //true disables the button
}
