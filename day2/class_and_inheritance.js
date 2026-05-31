//class:blueprint of real object

class Car{
    //CONSTRUCTOR
    constructor(name, brand, color, engine){
        //properties
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.engine = engine;

    }
    move(){
    console.log(`${this.name} is moving`)
    }
    start(){
    console.log(`${this.name} has started`)
    }
    stop(){
    console.log(`${this.name} has stopped`)
    }
}


//making object of car
let myNewCar = new Car("Swift", "Maruti", "Red", "Petrol")
myNewCar.start()
myNewCar.move()
myNewCar.stop("color of car is: ", myNewCar.color)