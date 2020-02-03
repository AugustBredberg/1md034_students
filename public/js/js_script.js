

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

console.log(burger1.product() );
console.log(burger2.product() );
console.log(burger3.product() );
console.log(newBurger1.product() );
console.log(newBurger2.product() );

