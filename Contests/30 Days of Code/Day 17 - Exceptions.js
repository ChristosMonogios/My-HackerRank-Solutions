var Calculator = (function Calculator() {
    function Calculator() {
        
    }
    Calculator.prototype.power = function (n, p) {
        if (n < 0 || p < 0) {
            throw "n and p should be non-negative";
        }
        
        var num = Math.pow(n,p);

        return num;    
    }
    
    return Calculator;
})();