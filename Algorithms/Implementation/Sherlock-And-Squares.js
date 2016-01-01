function processData(input) {
    var inputAsArray = input.split("\n"),
        numberOfTestCases = parseInt(inputAsArray[0]),
        testCases = inputAsArray.slice(1, inputAsArray.length),
        correctedTestCases = [],
        squareRootForStartNumber = 0,
        squareRootForEndNumber = 0,
        differenceBetweenNumbers = 0;

    for (var i = 0; i < numberOfTestCases; i++) {
        correctedTestCases[i] = testCases[i].split(" ");
        squareRootForStartNumber = Math.ceil(Math.sqrt(parseInt(correctedTestCases[i][0])));
        squareRootForEndNumber = Math.floor(Math.sqrt(parseInt(correctedTestCases[i][1])));

        differenceBetweenNumbers = squareRootForEndNumber - squareRootForStartNumber;

        if (differenceBetweenNumbers < 0) {
            console.log(0);
        } else {
            console.log(differenceBetweenNumbers + 1);
        }
    }
}