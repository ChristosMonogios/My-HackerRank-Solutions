function main() {
    var h = parseInt(readLine());
    var m = parseInt(readLine());

    var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"];
    
    var timeAsText = "";
    
    if (m == 0) {
        timeAsText = numbers[h] + " o' clock";
    } else if (m > 0 && m <30) {
        if (m == 1) {
            timeAsText = "one minute past " + numbers[h];
        } else if (m == 15) {
            timeAsText = "quarter past " + numbers[h];
        } else {
            timeAsText = numbers[m] + " minutes past " + numbers[h];
        }
    } else if (m == 30) {
        timeAsText = "half past " + numbers[h];
    } else {
        if (m == 45) {
            timeAsText = "quarter to " + numbers[h+1];
        } else {
            timeAsText = numbers[60 - m] + " minutes to " + numbers[h+1];            
        }

    }
    
    console.log(timeAsText);
}