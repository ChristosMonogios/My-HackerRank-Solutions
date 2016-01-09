function main() {
    var d1_temp = readLine().split(' ');
    var d1 = parseInt(d1_temp[0]);
    var m1 = parseInt(d1_temp[1]);
    var y1 = parseInt(d1_temp[2]);
    var d2_temp = readLine().split(' ');
    var d2 = parseInt(d2_temp[0]);
    var m2 = parseInt(d2_temp[1]);
    var y2 = parseInt(d2_temp[2]);
    
    if (y2 < y1) {
        console.log(10000);
    } else if (y1 < y2) {
        console.log(0);
    } else {
        if (m2 < m1) {
            console.log((m1-m2)*500);
        } else if (m2 == m1){
            console.log((d1-d2 < 0 ? 0 : d1-d2)*15);
        } else {
            console.log(0);
        }
    }
}