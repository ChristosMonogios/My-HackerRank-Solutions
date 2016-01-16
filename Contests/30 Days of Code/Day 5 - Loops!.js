function processData(input) {
    var inputAsArray = input.split("\n"),
        numberOfTests = parseInt(inputAsArray[0]),
        arrayWithTests = inputAsArray.slice(1, inputAsArray.length),
        firstNumber = 0,
        secondNumber = 0,
        numberOfIterations = 0,
        tempArray = [],
        arrayToPrint = [];
    
    for (var i=0; i<numberOfTests; i++) {
        tempArray = arrayWithTests[i].split(" ");
        firstNumber = parseInt(tempArray[0]);
        secondNumber = parseInt(tempArray[1]);
        numberOfIterations = parseInt(tempArray[2]);
        
        arrayToPrint[0] = firstNumber;
        for (var j=0; j<numberOfIterations; j++) {
            arrayToPrint[j] = arrayToPrint[j != 0 ? j-1 : 0] + Math.pow(2, j)*secondNumber;
        }
        
        console.log(arrayToPrint.join(" "));
        arrayToPrint = [];
    }
} 