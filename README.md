# Use Negative Indexes 
## Supports Negative and Positive Array Arguments Along With Supporting String Arguments for the Indexes. It Makes Dealing With Nesting Issues With Some Start And Some End Arguments A Breeze

The goal of this project was to add an ability to negatively index arrays while also being used as material to help my cohorts understand the importance of open source and how it can benefit them and every other developer.

By installing this package, you will be able to pass an unlimited number of indexes in as arguments to support anyone who is trying to handle deeply nested arrays of arrays of arrays...

It will also help by being more flexible because passing in strings instead of numbers works too. Additionally, it supports both positive and negative indexes in the event that you're dealing with some items towards the front of nested arrays and some at the end of the nested arrays. 

### Install
$ npm install use-negative-indexes
### Usage

```
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
```

Please note that you may have to run a local file for Javascript by adding to your package.json so it matches what I have below:

```
{
  "type": "module",
  "dependencies": {
    "use-negative-indexes": "^1.3.2"
  }
}
```

And then run the file by using this command in the terminal:
```node --experimental-modules fileName.js``` simply overwriting fileName.js to whatever the name of the file you're trying to run is. 

Hopefully this helps for all those Javascript developers with experience in Python and other languagues that natively support negative indexing and who love passing in negative indexes or positive indexes to their nested arrays or who have hit errors with passing in strings on accident for indexes to arrays!
