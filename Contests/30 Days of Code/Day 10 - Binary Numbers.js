function processData(input) {
    var inputAsArray = input.split("\n"),
        numberOfTests = parseInt(inputAsArray[0]),
        numbersToConvert = inputAsArray.slice(1, inputAsArray.length),
        binaryNumber = "";
    
    for (var i=0; i<numberOfTests; i++) {
        console.log(divideWithTwo(numbersToConvert[i], binaryNumber));
        binaryNumber = "";
    }
}

function divideWithTwo(val, binaryNumber) {
    var res = Math.floor(val/2);
    var rem = val%2;
    
    binaryNumber += rem + "";
        
    if (res == 0) {
        return binaryNumber;
    }
    
    return divideWithTwo(res, binaryNumber);
}