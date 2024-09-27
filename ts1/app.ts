let num: number = 10;
const isTrue: boolean = true;
var letter: string | null | string[];                              //UNION TYPE

letter = null;

let value: undefined = undefined;


let single: any = 'str';
single = 13;

let people: string[] = [];
people.push('max');

type ProductId = string | number                        //CUSTOM UNION TYPES

let value1: ProductId = 122

let nums: Array<number> = [1, 3, 32];                   //GENERIC ARRAYS

const user: [string, string] = ['admin', 'admin123'];   //TUPLES

const user1: {name: string, age: number} = {            //OBJECTS
    name : 'xdxd',
    age : 11
};

enum Direction {    
    Up,
    Downd,
    Left,
    Right
};

let core: unknown = 12;
console.log(core)
//SOME TYPESOF FUNCTIONS

function getReady(isReady: boolean): void {
    console.log(isReady);
};

let logError = function(isLogged:  boolean, message: string): never{    //RETURNS ERROR
    throw new Error(message);
}

function add(x: number, y?: number): void{   //VOID FUNCTIONS CAN RETURN UNDEFINED
    return undefined
}

type Callback = (x: number, y: number) => number;   //THERES POSSIBILITY TO SET UP TYPE OF ENTRY AND OUT VALLUES OF FUNCTION!!  
const multiply: Callback = (x, y) =>{
    return x *  y
}


//TYPES OF INTERFACES / STRUCTURES / OBJECTS

interface person {
    name: string,
    work: string
}