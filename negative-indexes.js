function negativeIndexes(arrayWithIndexes) {
    if(typeof arrayWithIndexes !== 'string') arrayWithIndexes.toString();
    let count = 0;
    let valid = true;
    let nameOfArr = '';
    let output = '';
    let negativeNums = [];
    for(let i = 0; i < arrayWithIndexes.length; i++) {
        if(arrayWithIndexes[i] === '[') {
            while(i < arrayWithIndexes.length) {
                if(arrayWithIndexes[i] === '[') {
                    count++;
                    i++;
                    let negativeIndex = '';
                    while(arrayWithIndexes[i] !== ']') {
                        negativeIndex += arrayWithIndexes[i];
                        i++;
                    }
                    negativeNums.push(parseInt(negativeIndex))
                }
                i++;
            }
        } else {
            nameOfArr += arrayWithIndexes[i];
        }
    }
    output += nameOfArr;
    negativeNums.forEach(num => output += `[${nameOfArr}.length${num}]`);
    return count && valid ? output : "Please enter a valid array name with the negative"
}

let arr = [2, 4, 5, 6]

let test = negativeIndexes('arr[-2][-1]');
console.log(test);
// console.log(typeof test);

// export default negativeIndexes;