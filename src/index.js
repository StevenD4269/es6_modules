console.log("Hello World");

import Wishlist from "./Wishlist";

const carForm = document.getElementById("submitForm");
const carMake = document.getElementById("makeInput");
const carModel = document.getElementById("modelInput");
const carYear = document.getElementById("yearInput");
const paraMake = document.getElementById("car-make");
const paraModel = document.getElementById("car-model");
const paraYear = document.getElementById("car-year");
const rmvButton = document.querySelector(".removeBtn");
const ulList = document.querySelector("#wishListContainer > ul");

const wishlist = new Wishlist();

function showCarDetails(car) {
  paraMake.textContent = `Make: ${car.make}`;
  paraModel.textContent = `Model: ${car.model}`;
  paraYear.textContent = `Year: ${car.year}`;

  rmvButton.disabled = false;
  rmvButton.setAttribute("data-carId", car.id);
}

function updateDOMList() {
  ulList.innerHTML = "";
  wishlist.list.forEach((car) => {
    const newLi = document.createElement("li");
    newLi.textContent = `${car.make} ${car.model}`;
    newLi.addEventListener("click", () => showCarDetails(car));
    ulList.appendChild(newLi);
  });
}

function addCar(event) {
  event.preventDefault();
  const make = carMake.value;
  const model = carModel.value;
  const year = carYear.value;
  wishlist.add(make, model, year);
  updateDOMList();
}

function removeCar() {
  const carId = Number(rmvButton.getAttribute("data-carId"));
  wishlist.remove(carId);
  updateDOMList();
  paraMake.textContent = "";
  paraModel.textContent = "";
  paraYear.textContent = "";
  rmvButton.disabled = true;
}

carForm.addEventListener("submit", addCar);
rmvButton.addEventListener("click", removeCar);
