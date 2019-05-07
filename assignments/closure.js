// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const outside="I'm Outside"
function holder(){
  const whereAmI=outside;
  console.log(whereAmI)
}
holder()

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let count=0;
const counter = () => {  
  return ++count
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

console.log(counter())
console.log(counter())

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = function(){
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  this.current=0,
  this.increment=()=>++this.current,
  this.decrement=()=>--this.current
};

const counting=new counterFactory()
console.log(counting.current)
console.log(counting.increment())
console.log(counting.decrement());