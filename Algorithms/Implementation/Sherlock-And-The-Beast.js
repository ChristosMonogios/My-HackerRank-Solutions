    function findTheDecentNumber(numberOfDigits) {
        var arrayWith5And3 = [numberOfDigits, 0],
            removeFromRightDigits = 0;

        while (arrayWith5And3[0] % 3 !== 0 || arrayWith5And3[1] % 5 !== 0) {

            if (removeFromRightDigits === numberOfDigits) {
                return -1;
            }
            
            arrayWith5And3[0]--
            arrayWith5And3[1]++
            removeFromRightDigits++;
        }
        return Array(arrayWith5And3[0] + 1).join(5) + Array(arrayWith5And3[1] + 1).join(3);
    }