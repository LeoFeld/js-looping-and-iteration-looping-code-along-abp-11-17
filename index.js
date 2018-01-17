// Code your solutions in this file
function tailsNeverFails() {
   return Math.random() >= 0.5;
}

while(tailsNeverFails()) {
  console.log(`you got tails ${tailsNeverFails} times!`);
}