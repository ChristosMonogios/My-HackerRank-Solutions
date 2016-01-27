function processData(input) {
    var inputAsArray = input.split("\n"),
        numberOfTests = parseInt(inputAsArray[0]),
        arrayWithTests = inputAsArray.slice(1, inputAsArray.length),
        phoneBook = {},
        i = 0;

    while (arrayWithTests[i+1].match(/\d/)) {
        phoneBook[arrayWithTests[i]] = arrayWithTests[i+1];
        i += 2;
    }
    
    arrayWithTests = arrayWithTests.slice(i, arrayWithTests.length);

    var numberOfQueries = arrayWithTests.length;
    var arrayIndex = 0;
    var outputString = "";

    for (var j = 0; j < numberOfQueries; j++) {
        if (phoneBook[arrayWithTests[j]] !== undefined) {
            outputString += arrayWithTests[j] + "=" + phoneBook[arrayWithTests[j]] + "\n";  
        } else {
            outputString += "Not found\n";
        }
    }

    console.log(outputString.slice(0, -1));
}