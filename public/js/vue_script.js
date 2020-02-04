
/**
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


let menu = [
    burger1,
    burger2,
    burger3,
    newBurger1,
    newBurger2
]




const vm = new Vue({
    el: '#myID',
    data: {
        burgers: menu
    }

})
**/