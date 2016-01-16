function decideIfweirdOrNotWeird(number) {
    var answer = "";
    
    if (number%2 !== 0) {
        answer = actionWhenNumberIsOdd();
    } else {
        answer = actionWhenNumberIsEven(number);
    }
    
    return answer;
}

function actionWhenNumberIsOdd () {
    return "Weird";
}

function actionWhenNumberIsEven (number) {
    var answer = "";
    
    if (number > 2 && number <= 5) {
        answer = "Not Weird";
    } else if (number > 6 && number <= 20) {
        answer = "Weird";
    } else if (number > 20) {
        answer = "Not Weird";
    }    
    
    return answer;
}

function main() {
    var N = parseInt(readLine());
    console.log(decideIfweirdOrNotWeird(N));
}