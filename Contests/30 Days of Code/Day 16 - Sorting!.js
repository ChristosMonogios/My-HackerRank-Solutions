function processData(input) {
    var inputAsArray = input.split("\n"),
        numbersLength = parseInt(inputAsArray[0]),
        numbers = inputAsArray[1];
    
    numbers = numbers.split(" ");
    
    numbers = numbers.sort(sortNumbers);
    
    var minAbsolutDiff = Number.MAX_SAFE_INTEGER;
    var tempDiff = 0;
    var result = "";
    
    for (var i=0; i<numbersLength-1; i++) {
        tempDiff = Math.abs(parseInt(numbers[i]) - parseInt(numbers[i+1]));
        if (tempDiff < minAbsolutDiff) {
            minAbsolutDiff = tempDiff;
            result = numbers[i] + " " + numbers[i+1];
        } else if (tempDiff == minAbsolutDiff) {
            result += " " + numbers[i] + " " + numbers[i+1];
        }
    }
    
    console.log(result);
}
         
function sortNumbers(a, b) {
    return a - b;
}