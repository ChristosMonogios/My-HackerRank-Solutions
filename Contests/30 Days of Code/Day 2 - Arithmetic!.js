function processData(input) {
    var inputAsArray = input.split("\n"),
        originalPrice = parseFloat(inputAsArray[0]),
        tip = parseInt(inputAsArray[1]),
        tax = parseInt(inputAsArray[2]),
        endPrice = 0;
    
    endPrice = originalPrice + ((originalPrice * tip) / 100) + ((originalPrice * tax) / 100);
    console.log("The final price of the meal is $" + Math.round(endPrice) + ".");
} 