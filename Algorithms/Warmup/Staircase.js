function drawStareCaseStructure (n) {
    for (var i=1; i<=n; i++) {
        var currentHashes = "";
        for (var j=1; j<=n-i; j++) {
            currentHashes += " ";
        }
        
        for (var j=1; j<=i; j++) {
            currentHashes += "#";
        }
        console.log(currentHashes);
    }
}

function main() {
    var n = parseInt(readLine());
    drawStareCaseStructure(n);
}