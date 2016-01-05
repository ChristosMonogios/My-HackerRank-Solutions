function processData(input) {
    var inputLength = input.length,
        alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        OccurencesOfCharacters = [];
    
    for (var i=0; i<inputLength; i++) {
        if (!OccurencesOfCharacters[alphabet.indexOf(input[i])]) {
            OccurencesOfCharacters[alphabet.indexOf(input[i])] = 0;
        }
        OccurencesOfCharacters[alphabet.indexOf(input[i])]++;
    }
    var numberOfOddOccurences = 0;
    
    for (i=0; i<OccurencesOfCharacters.length; i++) {
        if (typeof OccurencesOfCharacters[i] !== "undefined" && OccurencesOfCharacters[i] % 2 !== 0) {
            numberOfOddOccurences++;
            if (numberOfOddOccurences > 1) {
                return "NO";
            }
        }
    }
    
    return "YES";
} 