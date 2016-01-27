function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
    findHourglassWithTheMaximumSum(arr);

    for (var i=0; i<arr.length-2; i++) {
        for (var j=0; j<arr[i].length-2; j++) {
            hourGlasses[index] = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            index++;
        }
    }
    console.log(hourGlasses.sort(function(a,b) {return a-b}).pop());
}