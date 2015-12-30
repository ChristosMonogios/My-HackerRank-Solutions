function processData(input) {
    
   var inputAsArray = input.split("\n"),
       testCases = inputAsArray[0],
       tests = inputAsArray.slice(1, inputAsArray.length);
    
       var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
       occurancies = [],
       result = "";
        
        for (var i=0; i<testCases; i++) {
            for (var l=0; l<alphabet.length; l++) {
                if (tests[i].indexOf(alphabet[l]) > -1 ) {
                    if (!occurancies[l]) {
                        occurancies[l] = 0;
                    } 
                    occurancies[l] += 1;
                }
            }                 
        }

    for (var i=0; i<occurancies.length; i++) {
        if (occurancies[i] == parseInt(testCases)) {
            result += alphabet[i];
        }
    }
    console.log(result.length);
    
} 