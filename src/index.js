console.log("Hello World");

// TODO
import { Wishlist } from "./Wishlist";
const carForm = document.getElementById("submitForm");
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
  // Selecting the paragraph elements for car details
  const paraMake = document.getElementById("car-make");
  const paraModel = document.getElementById("car-model");
  const paraYear = document.getElementById("car-year");

  // Updating the content of the paragraph elements with car details
  paraMake.textContent = `Make: ${car.make}`; //reset the elements
  paraModel.textContent = `Model: ${car.model}`;
  paraYear.textContent = `Year: ${car.year}`;

  removeBtn.disabled = false; //to disable a button you set it to true
  removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
  const newUl = ulList.textContent("");
  wishlist.list.forEach((car) => {
    // for each element in the array create a list item
    const newLi = document.createElement("li"); //use create element to make li
    li.textContent = `${car.make}, ${car.model}`; //textcontent & string interpolation  will put make/model on every list
  });
}
