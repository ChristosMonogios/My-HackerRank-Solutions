function processData(input) {
    var inputAsArray = input.split(" "),
        firstNumber = parseInt(inputAsArray[0]),
        secondNumber = parseInt(inputAsArray[1]);

    console.log(calculateGCD(firstNumber, secondNumber));
}

function calculateGCD(x, y) {
    var result = 0;
    
    if (x >= y) {
        x = x%y;
    } else {
        y = y%x;
    }
            
    if (x != 0 && y != 0) {
        return calculateGCD(x, y)
    } else {
        return x != 0 ? x : y;
    }
}