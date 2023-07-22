var car = {
    brand: 'toyoto',
    price: 2333333,
    weight: '4000kg'
}
console.log(car);
console.log(car.weight);

var carPrice = car.price;
console.log(carPrice);

var carBrand = car['brand']
console.log(carBrand);

var propertysName = Object.keys(car);
console.log(propertysName);

var prppertysValue = Object.values(car);
console.log(prppertysValue);

car.weight = 655;
console.log(car);