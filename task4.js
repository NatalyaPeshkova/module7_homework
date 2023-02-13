
function ElectricalAppliance(deviceName, getStatus){
    this.zone = 'kitchen',
    this.color = 'grey',
    this.name = deviceName,
    this.getStatus = function(getStatus){
    this.status = getStatus;
    }
    }
    function KitchenAppliance(deviceName, devicePower,weight, brand){
        this.name = deviceName,
        this.power = devicePower,
        this.weight = weight,
        this.brand = brand
}

    KitchenAppliance.prototype = new ElectricalAppliance();

    const firstAppliance = new KitchenAppliance('fridge', 550, 70, 'philips');
    const secondAppliance = new KitchenAppliance('microwave stove', 900, 10, 'lg');
    console.log(firstAppliance, secondAppliance);

let fridgeStatus = prompt('Turn on fridge - 1, Turn off fridge - 0');
let microwaveStatus = prompt('Turn on microwave - 1, Turn off microwave - 0');
firstAppliance.getStatus(+fridgeStatus);
secondAppliance.getStatus(+microwaveStatus);

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