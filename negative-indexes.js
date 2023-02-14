function negativeIndexes(arr, ...indexes) {
    if (!Array.isArray(arr)) {
		throw new TypeError(`Expected an array at argument 1 but got ${typeof arr}`);
	};
    if(!indexes.length) return arr;
    let updatedOutput = arr;
    for(let i = 0; i < indexes.length; i++) {
        if (!Array.isArray(updatedOutput)) {
            throw new TypeError(`Expected an array at argument ${i + 2} but got ${typeof updatedOutput[i]}`);
        };
        if(typeof indexes[i] === 'string' || typeof indexes[i] === 'number') {
            if(typeof indexes[i] === 'string') {
                let value = parseInt(indexes[i])
                if(value < 0) {
                    updatedOutput = updatedOutput[updatedOutput.length + value];
                } else {
                    updatedOutput = updatedOutput[value];
                }
            } else {
                if(indexes[i] < 0) {
                    updatedOutput = updatedOutput[updatedOutput.length + indexes[i]];
                } else{
                    updatedOutput = updatedOutput[indexes[i]];
                }
            }
        } else {
            throw new TypeError(`Expected a string or a number at argument ${i + 2} but got ${typeof indexes[i]}`);
        }
    }
    return updatedOutput;
}

// const myFeelings = ['😂', '😭', '❤️', '🤣', ['🔥', '😍', ['🥺', '🥰']]];

// // Get the last item of the most deeply nested array

// console.log(negativeIndexes(myFeelings, -1, -1, -1));
// //=> '🥰'
// console.log(negativeIndexes(myFeelings, -1, -1, 1));
// //=> '🥰'
// console.log(negativeIndexes(myFeelings, "-1", -1, 1));
// //=> '🥰'
// console.log(negativeIndexes(myFeelings, "-1", "2", "-1"));
// //=> '🥰'
// console.log(negativeIndexes(myFeelings, "2"));
// //=> '❤️'
// console.log(negativeIndexes(myFeelings, -3));
// //=> '❤️'
// console.log(negativeIndexes(myFeelings, "-3"));
// //=> '❤️'

export default negativeIndexes;