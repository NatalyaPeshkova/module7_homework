class ElectricalAppliance {
    constructor(deviceName, getStatus){
    this.zone = 'kitchen',
    this.color = 'white',
    this.name = deviceName,
    this.getStatus = function(getStatus){
    this.status = getStatus;
    }
}
}

class KitchenAppliance extends ElectricalAppliance {
    constructor (deviceName, devicePower,weight, brand){
        super(deviceName),
        this.power = devicePower,
        this.weight = weight,
        this.brand = brand
}
}

    KitchenAppliance.prototype = new ElectricalAppliance()

    const firstAppliance = new KitchenAppliance('teapot', 550, 70, 'philips');
    const secondAppliance = new KitchenAppliance('coffeemaker', 900, 10, 'lg');
    console.log(firstAppliance, secondAppliance);

let teapotStatus = prompt('Turn on teapot - 1, Turn off teapot - 0');
let coffeemakerStatus = prompt('Turn on coffeemaker - 1, Turn off coffeemaker - 0');
firstAppliance.getStatus(+teapotStatus);
secondAppliance.getStatus(+coffeemakerStatus);

function getSumElectricalAppliancesPower(x, y){
    let a = x.power;
    let b = y.power;
    if(x.status === 0){
    a = 0;
    }
    if(y.status === 0){
    b = 0;
    }
    console.log('Total energy consuption - '+(a + b));
}
getSumElectricalAppliancesPower(firstAppliance, secondAppliance);