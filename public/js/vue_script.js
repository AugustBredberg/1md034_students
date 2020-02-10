
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
'use strict';
const socket = io();

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
        gender: "",
        orders: {}
    },
    created: function() {
        /* When the page is loaded, get the current orders stored on the server.
         * (the server's code is in app.js) */
        socket.on('initialize', function(data) {
            this.orders = data.orders;
        }.bind(this));

        /* Whenever an addOrder is emitted by a client (every open map.html is
         * a client), the server responds with a currentQueue message (this is
         * defined in app.js). The message's data payload is the entire updated
         * order object. Here we define what the client should do with it.
         * Spoiler: We replace the current local order object with the new one. */
        socket.on('currentQueue', function(data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            socket.emit('addOrder', {
                orderId: this.getNext(),
                details: {
                    x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y,
                },
                orderItems: ['Beans', 'Curry'],
            });
        },
        markDone: function(namn, email, man, female, nonbinary, secret) {
            let info = [
                namn,
                email

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

            /*
            let gataI = document.createElement("p");
            let gataV = document.createTextNode(gata);
            gataI.appendChild(gataV);
            divElement.appendChild(gataI);

            let husnrI = document.createElement("p");
            let husnrV = document.createTextNode(husnr);
            husnrI.appendChild(husnrV);
            divElement.appendChild(husnrI);

*/


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





