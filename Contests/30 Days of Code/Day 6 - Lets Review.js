function createStaircase(height) {
    var spaces, hashes;
    
    for (var i=1; i<=height; i++) {
        spaces = new Array(height+1-i).join(" ");
        hashes = new Array(i+1).join("#");
        console.log(spaces + hashes);
    }
}

function main() {
    var n = parseInt(readLine());
    createStaircase(n);
}