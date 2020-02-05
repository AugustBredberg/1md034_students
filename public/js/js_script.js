
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


let menu = [
    burger1,
    burger2,
    burger3,
    newBurger1,
    newBurger2

]

let i = 0;
let burgerGrid = document.getElementById("burgerGrid");
for (i; i < menu.length; i++) {
    // Do something five times
    let divElement = document.createElement("div");

    let imgValue = document.createElement("img");
    let burgerTitle = document.createElement("h2");
    burgerTitle.innerHTML = menu[i].name;
    imgValue.setAttribute('src', menu[i].path);
    divElement.appendChild(burgerTitle);
    divElement.appendChild(imgValue);

    let listItem = document.createElement("li");
    let listValue1 = document.createTextNode(menu[i].kcal);
    let listValue2 = document.createTextNode(menu[i].vegan);
    let listValue3 = document.createTextNode(menu[i].gluten);
    let listValue4 = document.createTextNode(menu[i].lactose);
    listItem.appendChild(listValue1);
    //listItem.appendChild(listValue2);
    //listItem.appendChild(listValue3);
    //listItem.appendChild(listValue4);
    divElement.appendChild(listItem);

    if (menu[i].vegan)
    {
        let listItem = document.createElement("li");
        let listValue = document.createTextNode("VEGAN");
        listItem.style.color = "red";
        listItem.appendChild(listValue);
        divElement.appendChild(listItem);
    }
    if (menu[i].lactose)
    {
        let listItem = document.createElement("li");
        let listValue = document.createTextNode("Contains LACTOSE");
        listItem.style.color = "red";
        listItem.appendChild(listValue);
        divElement.appendChild(listItem);
    }
    if (menu[i].gluten)
    {
        let listItem = document.createElement("li");
        let listValue = document.createTextNode("Contains GLUTEN");
        listItem.style.color = "red";
        listItem.appendChild(listValue);
        divElement.appendChild(listItem);
    }

    burgerGrid.appendChild(divElement);
    //document.getElementById("burger1").innerHTML = i.product();
}



let myButton = document.getElementById('finish');
let paymeth = document.getElementsByName('paymethod');
// In JavaScript you can either trigger an event directly on an object
//myButton.onclick = functionName;

// Or using the event handler function
//myButton.addEventListener("click", functionName);

// You can pass a defined function as above (no parentheses), or provide an anonymous function
myButton.onclick = function () {
    console.log("Button clicked!");
    const name = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const street = document.getElementById("gata").value;
    const houseNr = document.getElementById("husnr").value;

    const man = document.getElementById("man");
    const woman = document.getElementById("woman");
    const nonbinary = document.getElementById("nonbinary");
    const secret = document.getElementById("secret");

    const visa = document.getElementById("visa");
    const mastercard = document.getElementById("mastercard");
    const paypal = document.getElementById("paypal");
    const bitcoin = document.getElementById("bitcoin");

    let ans = [
        name,
        mail,
        street,
        houseNr
    ];
    if(man.checked){
        ans.push("man");
    }
    if(woman.checked){
        ans.push("woman");
    }
    if(nonbinary.checked){
        ans.push("nonbinary");
    }
    if(secret.checked){
        ans.push("secret");
    }

    if(visa.checked){
        ans.push("visa");
    }
    if(woman.checked){
        ans.push("woman");
    }
    if(nonbinary.checked){
        ans.push("nonbinary");
    }
    if(secret.checked){
        ans.push("secret");
    }

    for(x in ans){
        console.log(ans[x]);
    }
}
**/