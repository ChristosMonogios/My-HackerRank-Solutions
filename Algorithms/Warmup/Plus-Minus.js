function categorizeArrayElements(n, arr) {
    var categories = [0,0,0];
    for (var i=0; i<n; i++) {
        var current = arr[i];
        if (current > 0) {
            categories[0]++;
        } else if (current < 0) {
            categories[1]++;
        } else {
            categories[2]++;
        }
    }
    
    return categories;
}

function calculateFractionOfNumberCategories(n, arr) {
    var fractions = [0.0, 0.0, 0.0];
    
    for (var i=0; i<fractions.length; i++) {
        fractions[i] = arr[i] / n;
    }
    
    return fractions;
}


function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var categories = categorizeArrayElements(n, arr);
    var fractions = calculateFractionOfNumberCategories(n, categories);
    for (var i=0; i<fractions.length; i++) {
        console.log(fractions[i]);
    }

}