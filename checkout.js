(function init() {

    (function renderAllCart() {

        let items = JSON.parse(sessionStorage.getItem('cart'));
        // console.log(items)
        if(items) {
            items.forEach((item, index) => {
                let temp = item[0].data;

                document.getElementById('carts').innerHTML += `
                        <tr>
                        <td class="w-25"><img class="img-thumbnail" src="http://www-student.it.uts.edu.au/~ngoanguy/assignment2/public/images/${temp.find((e) => e.images).images}"></td>
                             <td>${temp.find((e) => e.model).model}</td>                            
                             <td>${temp.find((e) => e.pricePerDay).pricePerDay}</td>
                             <td class="w-25">
                             <form onsubmit="updateRentDate(${index});">
                                <input class="form-control w-50" id="rentalDate" value="${item[2].quantity}" onchange='onChangeValue(${index}, this)' />
                             </form>
                             </td>
                             
                             <td>
                             <form>
                             <button id="delete-item" onclick="deleteItem('${index}')" class="btn__add_to_cart">Delete</button>
                             </form>
                             </td>
                        </tr>
                
                `;

            })
        }


    })()

if(JSON.parse(sessionStorage.getItem('items-cart')).length > 0) {
        document.getElementById('checkoutForm').innerHTML = `
<a href="completeForm.php" id="process-to-checkout" class="float-right btn btn-lg btn-dark">Checkout</a>
`

} else {
    alert("No car has been reserved")
}


})()



function onChangeValue(index, e) {
    let value = e.value

    if(value > 1) {
        let items = JSON.parse(sessionStorage.getItem('cart'));
        console.log(value)
        items[index].splice(2,1, {quantity: parseInt(value)})
        console.log(items[index])
        // alert(items)

        sessionStorage.setItem('cart', JSON.stringify(items));

        alert("Rental date set")
    }
    else {
        alert("The rental date must greater 1");
    }
}

function updateRentDate(index) {



}

function deleteItem(data) {
    let checkInCart = JSON.parse((sessionStorage.getItem('items-cart')))

    let items = JSON.parse(sessionStorage.getItem('cart'));

    //get the item
    let temp = items.slice(data, data+1);
    items.splice(data, 1);
    let findItemModel = temp[0][0].data.find((e) => e.model).model;

    //remove it
    checkInCart.splice(checkInCart.indexOf(findItemModel),1)

    // console.log(checkInCart)
    sessionStorage.setItem('items-cart', JSON.stringify(checkInCart))
    sessionStorage.setItem('cart', JSON.stringify(items));


}



