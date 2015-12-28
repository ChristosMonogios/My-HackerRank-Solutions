function calculateIfLessonIsCanceled (numberOfStudents, threshold, arrivals) {
    var studentsCounter = 0,
        isLessonCanceled = false;
    
    for (var i=0; i<numberOfStudents; i++) {
        if (arrivals[i] <= 0) {
            studentsCounter++;          
        }
    }
    
    return isLessonCanceled = checkIfLessonIsCanceledOrNot(studentsCounter, threshold);
}

function checkIfLessonIsCanceledOrNot(counter, threshold) {
    if (counter >= threshold) {
        return false;
    } else {
        return true;
    }
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);
        if (calculateIfLessonIsCanceled(n, k, a)) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
}