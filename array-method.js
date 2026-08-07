let numbers = [2,4,5,6,8,9]

let double0 =[]

for (let i=0; i<numbers.length; i++){
     double0.push(numbers[i]*2);
}

console.log(double0);

// Another way : Map - Modify array to get new array 

const double2 = numbers.map(function(elem){
     return elem*2;
})
console.log(double2);

// Another Short way

const double1 = numbers.map(elem => elem*2);
console.log(double1);

// ForEach : Simply iterate the Loop

let rolls = [10,30,40,50,60]

rolls.forEach((elem, ind, arr)=> {
     console.log(elem, ind, arr);

})

// Filter : Filterout element and create a new array based on condition 

let Filter = [499,509,2850,2058,220,5820];

const Filterout = Filter.filter((random)=> random >=500);
console.log(Filterout);

// Find 

let Find = [501, 499,509,2850,2058,220,5820];

const Findout = Find.find((rand)=> rand >=500);
console.log(Findout);





