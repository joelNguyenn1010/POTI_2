let items = JSON.parse(sessionStorage.getItem('cart'));

items.forEach((item) => {
    let tempData = item[0].data
    let tempName = item[1].name
    let tempRentDay = item[2].quantity
    document.getElementById("hidden-post").innerHTML +=
        `
          <input type="hidden" name="${tempName}[model]" value="${tempData.find((e) => e.model).model}"/>
          <input type="hidden" name="${tempName}[modelYear]" value="${tempData.find((e) => e.modelYear).modelYear}"/>
          <input type="hidden" name="${tempName}[fuelType]" value="${tempData.find((e) => e.fuelType).fuelType}"/>
          <input type="hidden" name="${tempName}[pricePerDay]" value="${tempData.find((e) => e.pricePerDay).pricePerDay}"/>
          <input type="hidden" name="${tempName}[seats]" value="${tempData.find((e) => e.seats).seats}"/>
          <input type="hidden" name="${tempName}[mileage]" value="${tempData.find((e) => e.mileage).mileage}"/>
          <input type="hidden" name="${tempName}[description]" value="${tempData.find((e) => e.description).description}"/>
          <input type="hidden" name="${tempName}[tempRentDay]" value="${tempRentDay}"/>
        `
})



document.getElementById('booking-form').addEventListener('submit', () => {
    alert("Thank you for booking our services");
})