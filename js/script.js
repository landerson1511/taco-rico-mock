const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

/*-----------------------Menu--------------------*/

const entree = document.querySelector(".entree");
const entreeButton = document.querySelector(".entree-button");
const kids = document.querySelector(".kids");
const kidsButton = document.querySelector(".kids-button");
const sides = document.querySelector(".sides");
const sidesButton = document.querySelector(".sides-button");
const drinks = document.querySelector(".drinks");
const drinksButton = document.querySelector(".drinks-button");
const showAll = document.querySelector(".showall-button");



entreeButton.addEventListener("click", function () {
  entree.classList.remove("hide");
  kids.classList.add("hide");
  sides.classList.add("hide");
  drinks.classList.add("hide");

})

kidsButton.addEventListener("click", function ()
{
  kids.classList.remove("hide");
  entree.classList.add("hide");
  sides.classList.add("hide");
  drinks.classList.add("hide");

  
})

sidesButton.addEventListener("click", function ()
{
  sides.classList.remove("hide");
  entree.classList.add("hide");
  kids.classList.add("hide");
  drinks.classList.add("hide");

})

drinksButton.addEventListener("click", function ()
{
  drinks.classList.remove("hide");
  sides.classList.add("hide");
  entree.classList.add("hide");
  kids.classList.add("hide");

})

showAll.addEventListener("click", function ()
{
  entree.classList.remove("hide");
  kids.classList.remove("hide");
  sides.classList.remove("hide");
  drinks.classList.remove("hide");

})