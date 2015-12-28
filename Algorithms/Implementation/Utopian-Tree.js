function utopianTree(cycles) {
    var heightOfTree = 1;
    
    for (var i=1; i<=cycles; i++) {
        if (i%2 == 0) {
            heightOfTree++;
        } else {
            heightOfTree *= 2;
        }
    }
    console.log(heightOfTree);
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        utopianTree(n);
    }
}