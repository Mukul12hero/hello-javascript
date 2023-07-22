function run(miles) {
    const kilometers = miles * 1.609;
    return kilometers;
}

const iRunMiles = 12;
const iRunKilometers = run(iRunMiles);
console.log('I run everyday : ', iRunKilometers, 'kilometers.');



// practice 2

function distance(miles) {
    const kilometers = miles * 1.60934;
    return kilometers;
}

const distanceMile = 2;
const distanceKilometers = distance(distanceMile);
console.log(distanceKilometers);