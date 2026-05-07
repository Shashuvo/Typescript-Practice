// oop : polymorphism

class Shape {
    getArea() {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    length: number;
    width: number;
    constructor(length: number, width: number) {
        super();
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
}

const getAreaInfo = (params: Shape) => {
    return console.log(params.getArea());
}

const shape1 = new Shape();
const circle1 = new Circle(10);
const rectangle1 = new Rectangle(10, 20);


getAreaInfo(shape1);
getAreaInfo(circle1);
getAreaInfo(rectangle1);