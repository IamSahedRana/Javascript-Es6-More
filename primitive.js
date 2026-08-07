let name ='Sahed';
let id = 40002;
let is_student = true;
let gpa = undefined;
let home = null;

console.log(typeof name, typeof id, typeof is_student, typeof gpa, typeof home);


let arr =[20,30,50,60];

function add(a,b){
     return a+b;
}

let add_item = {
     name: 'Sahed'
};

console.log(typeof arr, typeof add, typeof add_item);

// primitive ( No memory update )

const person1 = {
    name: "Sahed"
};

const person2 = person1; //update on person2 isn't effect it 

person2.name = "Rana";

console.log(person1.name);
console.log(person2.name);

// Non Primitive 

const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);

// Using Spread Operator 

const arr3 = [1, 2, 3];

const arr4 = [...arr3];

arr4.push(4);

console.log(arr3);
console.log(arr4);