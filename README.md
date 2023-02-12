# Use Negative Indexex supports array[-1][-3][3]

The goal of this project was to add an ability to negatively index arrays while also being used as material to help my cohorts understand the importance of open source and how it can benefit them and every other developer.

By installing this package, you will be able to pass an unlimited number of indexes in as arguments to support anyone who is trying to handle deeply nested arrays of arrays of arrays...

It will also help by being more flexible because passing in strings instead of numbers works too. Additionally, it supports both positive and negative indexes in the event that you're dealing with some items towards the front of nested arrays and some at the end of the nested arrays. 

### Install
$ npm install use-negative-indexes
### Usage

```
import negativeIndexes from 'use-negative-indexes';

// Adds negative array index support to any given array
const myFeelings = negative(['😂', '😭', '❤️', '🤣', ['🔥', '😍', ['🥺', '🥰']]]);

// Get the last item of the most deeply nested array
console.log(myFeelings[-1][-1][-1]);
//=> '🥰'
OR console.log(myFeelings[-1][-1][1]);
//=> '🥰'
OR console.log(myFeelings["-1"]["-1"]["1"]);
//=> '🥰'
OR console.log(myFeelings["-1"]["2"][-1]);
//=> '🥰'
OR console.log(myFeelings[-1][-1][-1]);
//=> '🥰'

```

Please note that you may have to run a local file for Javascript by adding to your package.json so it matches what I have below:

```
{
  "type": "module",
  "dependencies": {
    "use-negative-indexes": "^1.0.0"
  }
}
```

And then run the file by using this command in the terminal:
```node --experimental-modules fileName.js``` simply overwriting fileName.js to whatever the name of the file you're trying to run is. 

Hopefully this helps for all those Python and other developers who love passing in negative indexes or positive indexes for their nested arrays or who have hit errors with passing in strings on accident for indexes to arrays!
