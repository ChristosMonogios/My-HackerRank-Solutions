function sumAllArrayElements(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        sum += arr[i];        
    }
    return sum;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    console.log(sumAllArrayElements(arr));
}