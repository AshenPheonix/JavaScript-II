// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const outside="I'm Outside"
function holder(){
  const whereAmI=outside;
  return whereAmI
}
console.log(holder())

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
const counterFactory = (function(){
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let current=0
  return {
    increment:()=>++current,
    decrement:()=>--current
  }
})();
console.log(counterFactory.increment())
console.log(counterFactory.increment())
console.log(counterFactory.increment())
console.log(counterFactory.decrement())