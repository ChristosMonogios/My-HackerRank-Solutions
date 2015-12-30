function processData(input) {
    var input = input.toLowerCase(),
        lettersInEnglishAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        lettersInEnglishAlphabetLength = lettersInEnglishAlphabet.length;
    
    if (input.length < lettersInEnglishAlphabetLength) {
        return "not pangram";
    }
    
    for (var i=0; i<lettersInEnglishAlphabetLength; i++) {
        if (input.indexOf(lettersInEnglishAlphabet[i]) <= -1) {
            return "not pangram";
        }
    }
    
    return "pangram";
} 