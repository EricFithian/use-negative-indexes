function negativeIndexes(arr, ...indexes) {
    if (!Array.isArray(arr)) {
		throw new TypeError('Expected an array at argument 1');
	};
    if(!indexes.length) return arr;
    let updatedOutput;
    for(let i = 0; i < indexes.length; i++) {
        if(typeof indexes[i] === 'string' || typeof indexes[i] === 'number') {
            if(typeof indexes[i] === 'string') {
                let value = parseInt(indexes[i])
                if(value < 0) {
                    typeof updatedOutput === 'undefined' ? updatedOutput = arr[arr.length + value] : updatedOutput = updatedOutput[updatedOutput.length + value];
                } else {
                    typeof updatedOutput === 'undefined' ?updatedOutput = arr[value] : updatedOutput = updatedOutput[value];
                }
            } else {
                if(indexes[i] < 0) {
                    typeof updatedOutput === 'undefined' ? updatedOutput = arr[arr.length + indexes[i]] : updatedOutput = updatedOutput[updatedOutput.length + indexes[i]];
                } else{
                    typeof updatedOutput === 'undefined' ? updatedOutput = arr[indexes[i]] : updatedOutput = updatedOutput[indexes[i]];
                }
            }
        } else {
            throw new TypeError(`Expected a string or a number at argument ${i + 2} but got ${typeof indexes[i]}`);
        }
    }
    return updatedOutput;
}

// const myFeelings = ['😂', '😭', '❤️', '🤣', ['🔥', '😍', ['🥺', '🥰']]];

// Get the last item of the most deeply nested array

// console.log(negativeIndexes(myFeelings, -1, -1, -1));
// //=> '🥰'
// console.log(negativeIndexes(myFeelings, -1, -1, 1));
// //=> '🥰'
// console.log(negativeIndexes(myFeelings, "-1", -1, 1));
// //=> '🥰'
// console.log(negativeIndexes(myFeelings, "-1", "2", "-1"));
// //=> '🥰'
// console.log(negativeIndexes(myFeelings, -1, -1, -1));
// //=> '🥰'

export default negativeIndexes;