

function menuItem(nm, kcl, veg, glut, lact, pth) {
    this.name = nm;
    this.kcal = kcl;
    this.vegan = veg;
    this.gluten = glut;
    this.lactose = lact;
    this.path = pth;

    this.product = function() {
        return this.name + ' ' + this.kcal;
    }


}



let burger1 = new menuItem("BaconBurgaren", 1400, false, true, true, "/img/umamiBacon.jpg");
let burger2 = new menuItem("Låtsas-kycklingburgaren", 1100, true, true, false, "/img/umamiBacon.jpg");
let burger3 = new menuItem("Halloumiburgaren", 1600, true, false, false, "/img/umamiBacon.jpg");

let newBurger1 = new menuItem("Burgare ny 1", 1400, false, true, true, "/img/umamiBacon.jpg");
let newBurger2 = new menuItem("Burgare ny 2", 1400, false, true, true, "/img/umamiBacon.jpg");

/*
document.getElementById("burger1").innerHTML = burger1.product();
document.getElementById("burger2").innerHTML = burger2.product();
document.getElementById("burger3").innerHTML = burger3.product();
document.getElementById("burger4").innerHTML = newBurger1.product();
document.getElementById("burger5").innerHTML = newBurger2.product();
*/
let menu = [
    burger1,
    burger2,
    burger3,
    newBurger1,
    newBurger2

]

let i = 0;
let myElement = document.getElementById("burgerList");
for (i; i < menu.length; i++) {
    // Do something five times
    let listItem = document.createElement("li");
    let listValue = document.createTextNode(menu[i].product());
    listItem.appendChild(listValue);
    myElement.appendChild(listItem);
    //document.getElementById("burger1").innerHTML = i.product();
}