function negativeIndexes(arr, ...indexes) {
    if (!Array.isArray(arr)) {
		return 'Expected an array';
	};
    let updatedOutput;
    if(!indexes.length) return arr;
    for(let i = 0; i < indexes.length; i++) {
        if(typeof indexes[i] === 'string' || typeof indexes[i] === 'number') {
            if(typeof indexes[i] === 'string') {
                if(parseInt(indexes[i]) < 0) {
                    typeof updatedOutput === 'undefined' ? updatedOutput = arr[arr.length + parseInt(indexes[i])] : updatedOutput = updatedOutput[updatedOutput.length + parseInt[indexes[i]]];
                } else {
                    typeof updatedOutput === 'undefined' ?updatedOutput = arr[parseInt(indexes[i])] : updatedOutput = updatedOutput[parseInt(indexes[i])];
                }
            } else {
                if(indexes[i] < 0) {
                    typeof updatedOutput === 'undefined' ? updatedOutput = arr[arr.length + indexes[i]] : updatedOutput = updatedOutput[updatedOutput.length + indexes[i]];
                } else{
                    typeof updatedOutput === 'undefined' ? updatedOutput = arr[indexes[i]] : updatedOutput = updatedOutput[indexes[i]];
                }
            }
        } else {
            return `Expected a string or a number at argument ${i + 2} but got ${typeof indexes[i]}`;
        }
    }
    return updatedOutput;
}

let arr = ["hello", "world", "this", "is", "my", "test", ["Another", "array", "nested", ["the", "other", "arrays"]]];
console.log(negativeIndexes(arr, -2));
console.log(negativeIndexes(arr, -1, -1, -2));


// let test = negativeIndexes(arr1 + `$`);
// console.log(test);
// console.log(typeof test);

// export default negativeIndexes;