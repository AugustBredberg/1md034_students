
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



let burger1 = new menuItem("BaconBurgaren", "1400 kcal", false, true, true, "/img/umamiBacon.jpg");
let burger2 = new menuItem("Låtsas-kycklingburgaren", "1100 kcal", true, true, false, "/img/nochick.jpg");
let burger3 = new menuItem("Halloumiburgaren", "1600 kcal", true, false, false, "/img/halloumi.jpg");

let newBurger1 = new menuItem("Burgare ny 1", "1400 kcal", false, true, true, "/img/umamiBacon.jpg");
let newBurger2 = new menuItem("Burgare ny 2", "1400 kcal", false, true, true, "/img/umamiBacon.jpg");


let array = [burger1, burger2, burger3, newBurger1, newBurger2];

**/


const vm = new Vue({
    el: '#burgers',
    data: {
        array: food,
        burgerChoice: []


    },
    methods: {
        getBurgerChoice: function( ) {
            /* Add your function's code just like in
            pure JavaScript within these curly braces */

            return this.burgerChoice;
        }
    }

})

const cont = new Vue({
    el: '#contact',
    data: {
        namn:"",
        email:"",
        gata: "",
        husnr:"",
        man: false,
        female: false,
        nonbinary: false,
        secret: false,
        gender: ""
    },
    methods: {
        markDone: function(namn, email, gata, husnr, man, female, nonbinary, secret) {
            let info = [
                namn,
                email,
                gata,
                husnr
            ]

            let orderInfo = document.getElementById("orderInfo");

            let divElement = document.createElement("div");
            let gender = "";
            if(man){
                console.log("man");
                let genderI = document.createElement("p");
                let genderV = document.createTextNode("man");
                genderI.appendChild(genderV);
                divElement.appendChild(genderI);
            }
            if(female){
                console.log("woman");
                let genderI = document.createElement("p");
                let genderV = document.createTextNode("woman");
                genderI.appendChild(genderV);
                divElement.appendChild(genderI);
            }
            if(nonbinary){
                console.log("nonbinary");
                let genderI = document.createElement("p");
                let genderV = document.createTextNode("nonbinary");
                genderI.appendChild(genderV);
                divElement.appendChild(genderI);
            }
            if(secret){
                console.log("secret");
                let genderI = document.createElement("p");
                let genderV = document.createTextNode("secret");
                genderI.appendChild(genderV);
                divElement.appendChild(genderI);
            }

            for(x in info){
                console.log(info[x]);
            }


            //let custInfo = document.createElement("h2");
          //  custInfo.innerHTML = "Customer Info Given";
            //sdivElement.appendChild(custInfo);

            let nameI = document.createElement("p");
            let nameV = document.createTextNode(namn);
            //nameI.innerHTML = "test";
            nameI.appendChild(nameV);
            divElement.appendChild(nameI);

            let mailI = document.createElement("p");
            let mailV = document.createTextNode(email);
            mailI.appendChild(mailV);
            divElement.appendChild(mailI);

            let gataI = document.createElement("p");
            let gataV = document.createTextNode(gata);
            gataI.appendChild(gataV);
            divElement.appendChild(gataI);

            let husnrI = document.createElement("p");
            let husnrV = document.createTextNode(husnr);
            husnrI.appendChild(husnrV);
            divElement.appendChild(husnrI);




            /* Add your function's code just like in
            pure JavaScript within these curly braces */
            let burgersChecked = vm.getBurgerChoice();
            console.log(burgersChecked);

            for(burg in burgersChecked){
                let burgerI = document.createElement("p");
                let burgerV = document.createTextNode(burgersChecked[burg]);
                burgerI.appendChild(burgerV);
                divElement.appendChild(burgerI);
            }

            orderInfo.appendChild(divElement);
        }

    }

})





