function processData(input) {
    var inputAsArray = input.split("\n"),
        testCases = inputAsArray[0],
        tests = inputAsArray.slice(1, inputAsArray.length),
        numberOfDeletions = 0,
        previousChar = "",
        currentChar = "";
    
    for (var j=0; j<testCases; j++) {
        for (var i=0; i<tests[j].length; i++) {
            previousChar = tests[j][i-1 < 0 ? 0 : i-1];
            currentChar = tests[j][i];

            if (previousChar == currentChar) {
                numberOfDeletions++;
            }        
        }
        console.log(numberOfDeletions - 1);
        numberOfDeletions = 0;
    }
} 