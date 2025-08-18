import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));  // [false, true]
console.log(taskBlock(false)); // [false, true]
