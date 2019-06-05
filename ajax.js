//send data to nessacry php file and render any response with given document element id
const sendDataToPHP = (method, PHPFilePath, data) => {
    var ajax = new XMLHttpRequest();
    ajax.onload = function() {
        // const onDocumentID = document.getElementById(elementID);
        // onDocumentID.innerHTML = this.responseText
    }

    ajax.open(method, PHPFilePath)
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let sendData = `data=hello`;
    console.log(sendData);
    ajax.send(sendData);

}


const returnProductAll = (xml) => {
    var xmlDoc = xml.responseXML;
    var productList = xmlDoc.getElementsByTagName("car");
    var data = [];

    for (i = 0; i < productList.length; i++) {

            const product = productList[i]

            if (product) {

                //fetch all the details of the product
                const category = product.getElementsByTagName("category")[0].childNodes[0].nodeValue;
                const availability = product.getElementsByTagName("availability")[0].childNodes[0].nodeValue;
                const brand = product.getElementsByTagName("brand")[0].childNodes[0].nodeValue;
                const model = product.getElementsByTagName("model")[0].childNodes[0].nodeValue;
                const modelYear = product.getElementsByTagName("modelYear")[0].childNodes[0].nodeValue;
                const mileage = product.getElementsByTagName("mileage")[0].childNodes[0].nodeValue;

                const fuelType = product.getElementsByTagName("fuelType")[0].childNodes[0].nodeValue;

                const seats = product.getElementsByTagName("seats")[0].childNodes[0].nodeValue;

                const pricePerDay = product.getElementsByTagName("pricePerDay")[0].childNodes[0].nodeValue;

                const description = product.getElementsByTagName("description")[0].childNodes[0].nodeValue;
                const images = product.getElementsByTagName("images")[0].childNodes[0].nodeValue;

                //put all the detail in to array
                const tempData = [
                    {category},
                    {availability},
                    {brand},
                    {mileage},
                    {model},
                    {modelYear},
                    {fuelType},
                    {seats},
                    {pricePerDay},
                    {description},
                    {images}
                ];
                data.push(tempData);
            }
    }

    return data;
}

const loadAllData = () => {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const onDocument = document.getElementById('cars');
                const product = returnProductAll(this);

                product.forEach((element) => {
                    // data.forEach((element) => {
                    sessionStorage.setItem(`${element.find((e) => e.model).model}`, JSON.stringify(element))
                    onDocument.innerHTML += `
                    <div class="car">
                        <!-- <div class="cars-image__box"> -->
                        <img class="cars-image" src="http://www-student.it.uts.edu.au/~ngoanguy/assignment2/public/images/${element.find((e) => e.images).images}" />
                        <!-- </div> -->
                        <h1 class="car__name">${element.find((e) => e.model).model}</h1>
                        <!-- <div class="car__info"> -->
                        <p class="p__align car__price">Price per day: <span class="car__price__value">${element.find((e) => e.pricePerDay).pricePerDay}</span></p>


                        <p class="p__align car__fueltype">Fuel Type: <span class="car__fueltype__value">${element.find((e) => e.fuelType).fuelType}</span> </p>

                        <p class="p__align car__fueltype">Mileage: <span class="car__fueltype__value">${element.find((e) => e.mileage).mileage}</span> </p>


                        <p class="p__align car__fueltype">Price per day: <span class="car__fueltype__value">${element.find((e) => e.pricePerDay).pricePerDay}</span> </p>


                        <p class="full_grid_column car__availability">Description: <span class="car__availability__value">${element.find((e) => e.description).description}</span></p>

                        <p class="full_grid_column car__availability">Available: <span class="car__availability__value">${element.find((e) => e.availability).availability}</span></p>

                        <!-- </div> -->
                        <button class="btn__add_to_cart" id="add_cart" onclick="add_to_cart_check('${element.find((e) => e.model).model}')">Add to cart</button>
                    </div>
                    `
                // })
                })

            }
        };
        xhttp.open("GET", "public/js/car/cars.xml", true);
        xhttp.send();


}

const add_to_cart_check = (data) => {


    let main = JSON.parse(sessionStorage.getItem("cart"));
    let getData = JSON.parse(sessionStorage.getItem(data));

    let checkAvailability = getData.find((e) => e.availability).availability;
    let checkInCart = JSON.parse((sessionStorage.getItem('items-cart')))

    if(checkInCart) {
        let found = checkInCart.find((e) => {
            return e == data;
        })
        if(found) {
            alert("This item has already added")
            return
        }
    } else {
        checkInCart = [];
        sessionStorage.removeItem('cart');
    }





    if(checkAvailability == "False") {
        alert("Sorry, the car is not available now.")
        return
    }


    var ajax = new XMLHttpRequest();

    let tempDATA = [
        {data : getData},
        {name: data},
        {quantity: 1}
    ]


    if(main) {

        main.push(tempDATA);
        sessionStorage.setItem('cart', JSON.stringify(main));
        checkInCart.push(data);

    } else {

        let tempPush = []
            tempPush.push(tempDATA);
        checkInCart.push(data);
        sessionStorage.setItem('cart', JSON.stringify(tempPush));
    }

    alert(data + " is added to cart");
    console.log(JSON.parse(sessionStorage.getItem("cart")));
    sessionStorage.setItem('items-cart', JSON.stringify(checkInCart))
    update_items_cart()
}


const update_items_cart = () => {
    let checkInCart = JSON.parse((sessionStorage.getItem('items-cart')))
    if(checkInCart) {
        document.getElementById('items-cart').innerHTML = checkInCart.length;

    } else {
        document.getElementById('items-cart').innerHTML = 0

    }
}


(function(){
    loadAllData()
    update_items_cart()
})()