interface Point2D{
    x: number;
    y: number;
}

let cursor: Point2D = {
    x : 2,
    y : 11
}

type Point3D = Point2D& {
    z: number;
};

interface Point3DVers2 extends Point2D{
    zx: number;
};

let buildingPoint : Point3DVers2 = {
    x: 10,
    y: -19,
    zx: 12
}

let testingFunc = function(point: Omit<Point3D, 'z'>){

}

abstract class User{
    constructor(
        public name: string,    //init properties inside constructor
         public age: number){}
}

class LoggedUser extends User{      
    constructor(
        public name: string,
         public age: number,                //class inheritance
          protected password: string){
            super(name, age)
          }
}

let a = new LoggedUser('xdxd', 123, 'xdxd123')