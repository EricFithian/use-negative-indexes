import negativeIndexes from "./negative-indexes.js";

const myFeelings = ['😂', '😭', '❤️', '🤣', ['🔥', '😍', ['🥺', '🥰']]];

// Get the last item of the most deeply nested array

console.log(negativeIndexes(myFeelings, -1, -1, -1));
//=> '🥰'
console.log(negativeIndexes(myFeelings, -1, -1, 1));
//=> '🥰'
console.log(negativeIndexes(myFeelings, "-1", -1, 1));
//=> '🥰'
console.log(negativeIndexes(myFeelings, "-1", "2", "-1"));
//=> '🥰'
console.log(negativeIndexes(myFeelings, "2"));
//=> '❤️'
console.log(negativeIndexes(myFeelings, -3));
//=> '❤️'
console.log(negativeIndexes(myFeelings, "-3"));
//=> '❤️'
// console.log(negativeIndexes(myFeelings, "-3", -1));
//=> 'TypeError: Expected an array at argument 3 but got string'
console.log(negativeIndexes(myFeelings, -1, -3));
//=> '🔥'
console.log(negativeIndexes(myFeelings, "-1", "-3"));
//=> '🔥'
console.log(negativeIndexes(myFeelings, "-1", -1, "0"));
//=> '🥺'

