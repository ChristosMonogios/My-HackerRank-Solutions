function iterateOverPrimaryDiagonal(n, arr) {
    var primaryDiagonalSum = 0;
    for (var i=0; i < n; i++) {
        for (var j=0; j <n; j++) {
            if (i == j) {
                primaryDiagonalSum += arr[i][j];                
            }
        }
    }
    return primaryDiagonalSum;
}

function iterateOverSecondaryDiagonal(n, arr) {
    for (var i=0; i<n; i++) {
        arr[i] = arr[i].reverse();
    }

    return iterateOverPrimaryDiagonal(n, arr);
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    console.log(Math.abs(iterateOverPrimaryDiagonal(n, a)  - iterateOverSecondaryDiagonal(n, a)));
}