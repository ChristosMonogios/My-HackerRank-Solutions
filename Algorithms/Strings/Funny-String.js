function processData(input) {
    var inputAsArray = input.split("\n"),
        testCases = inputAsArray[0],
        tests = inputAsArray.slice(1, inputAsArray.length),
        testLength = 0,
        normalString = "",
        reversedString = "",
        previousCharNormalStringAscii = "",
        currentCharNormalStringAscii = "",
        previousCharReversedStringAscii = "",
        currentCharReversedStringAscii = "",
        isFunny = true;
    
    for (var j=0; j<testCases; j++) {
        normalString = tests[j];
        reversedString = normalString.split("").reverse().join("");
        testLength = tests[j].length;
        
        for (var i=1; i<testLength; i++) {

            previousCharNormalStringAscii = normalString[i-1].charCodeAt(0);
            currentCharNormalStringAscii = normalString[i].charCodeAt(0);
                 
            previousCharReversedStringAscii = reversedString[i-1].charCodeAt(0);    
            currentCharReversedStringAscii = reversedString[i].charCodeAt(0);
            
            if (Math.abs(previousCharNormalStringAscii - currentCharNormalStringAscii) !=
                Math.abs(previousCharReversedStringAscii - currentCharReversedStringAscii)) {
                isFunny = false;
                break;
            }        
        }
        
        if (isFunny) {
            console.log("Funny");
        } else {
            console.log("Not Funny");
        }
        
        isFunny = true;
        previousCharNormalStringAscii = "",
        currentCharNormalStringAscii = "",
        previousCharReversedStringAscii = "",
        currentCharReversedStringAscii = "";
    }
} 