var numberOfSubtrees = 0,
    subtrees = [];
function processData(input) {
    var inputAsArray = input.split("\n"),
        verticesAndEdges = inputAsArray[0].split(" "),
        edges = inputAsArray.slice(1, inputAsArray.length),
        correctedEdges = [],
        oldNumberOfSubtrees = 0;


    for (var i = 0; i < edges.length; i++) {
        correctedEdges[i] = edges[i].split(" ");
    }

    for (var i = 0; i < correctedEdges.length; i++) {
        iterateOverSubtree(correctedEdges, correctedEdges[i][0]);


        numberOfSubtrees = subtrees.length;
    }
    var cut = 0;

    for (var i = 0; i < subtrees.length; i++) {
        if (subtrees[i].length % 2) {
            cut++;
        }
    }


    console.log(cut);
    return subtrees;
    
}

function iterateOverSubtree(correctedEdges, searchFor) {
    for (var i = 0; i < correctedEdges.length; i++) {
        if (searchFor == correctedEdges[i][1]) {
            if (typeof subtrees[numberOfSubtrees] === "undefined") {
                subtrees[numberOfSubtrees] = [];
            }
            subtrees[numberOfSubtrees].push(correctedEdges[i]);
            
            iterateOverSubtree(correctedEdges, correctedEdges[i][0]);
        }
    }
}