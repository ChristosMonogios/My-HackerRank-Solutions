function processData(input) {
    var inputAsArray = input.split("\n"),
        alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        arrayWithCurrentLetter = [[], []],
        deletions = 0;
    
    for (var i=0; i<alphabet.length; i++) {
        var rgxp = new RegExp(alphabet[i], "g");
        arrayWithCurrentLetter[0][i] = arrayWithCurrentLetter[1][i] = 0;
        
        arrayWithCurrentLetter[0][i] = inputAsArray[0].match(rgxp) ? inputAsArray[0].match(rgxp).length : 0;
        arrayWithCurrentLetter[1][i] = inputAsArray[1].match(rgxp) ? inputAsArray[1].match(rgxp).length : 0;
        
        var deletions = deletions + Math.abs(arrayWithCurrentLetter[0][i] - arrayWithCurrentLetter[1][i]);
    }
    console.log(deletions);
} 