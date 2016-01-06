function processData(input) {
    var inputAsArray = input.split("\n"),
        numberOfTests = parseInt(inputAsArray[0]),
        arrayWithTests = inputAsArray.slice(1, inputAsArray.length),
        alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        arrayWithCurrentLetter = [[], []],
        deletions = 0,
        numberOfReplacements = 0,
        currentTwoStrings = ["", ""];
    
    for (var i=0; i<numberOfTests; i++) {
        if (arrayWithTests[i].length%2 !== 0) {
            console.log("-1");
            continue;
        } else {
            currentTwoStrings[0] = arrayWithTests[i].slice(0, arrayWithTests[i].length/2);
            currentTwoStrings[1] = arrayWithTests[i].slice(arrayWithTests[i].length/2, arrayWithTests[i].length);
        }
        
        for (var j=0; j<alphabet.length; j++) {
            var rgxp = new RegExp(alphabet[j], "g");
            arrayWithCurrentLetter[0][j] = arrayWithCurrentLetter[1][j] = 0;
            
            arrayWithCurrentLetter[0][j] = currentTwoStrings[0].match(rgxp) ? currentTwoStrings[0].match(rgxp).length : 0;
            arrayWithCurrentLetter[1][j] = currentTwoStrings[1].match(rgxp) ? currentTwoStrings[1].match(rgxp).length : 0;
                       
            numberOfReplacements += Math.abs(arrayWithCurrentLetter[0][j] - arrayWithCurrentLetter[1][j]);
        }
        
        console.log(numberOfReplacements/2);
        numberOfReplacements = 0;
    }    
} 