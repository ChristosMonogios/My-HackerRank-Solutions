function findDigits(n) {
    var numberOfDigitsEvenlyDivideN = 0,
        digitsOfN = n.toString().split(""),
        digitsOfNLength = digitsOfN.length;
    
    for (var i=0; i<digitsOfNLength; i++) {
        if (n % parseInt(digitsOfN[i]) == 0) {
            numberOfDigitsEvenlyDivideN++;
        }
    }
    
    return numberOfDigitsEvenlyDivideN;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        console.log(findDigits(n));
    }
}