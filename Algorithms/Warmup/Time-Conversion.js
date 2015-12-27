function convertToMilitaryTime(time) {
    var splittedTime = time.split(":");
    
    if (time.indexOf("AM") > -1) {
        if (splittedTime[0] == "12") {
            splittedTime[0] = "00";
            return splittedTime.join(":").substr(0, time.length-2);
        }
        return time.substr(0, time.length-2);
    }
    
    if (splittedTime[0] == "12") {
        return time.substr(0, time.length-2);
    }
    var militaryHours = parseInt(splittedTime[0]) + 12;
    splittedTime[0] = militaryHours.toString();
    
    if (splittedTime[0] == "24") {
        splittedTime[0] = "00";
    }
    
    return splittedTime.join(":").substr(0, time.length-2);
}

function main() {
    var time = readLine();
    console.log(convertToMilitaryTime(time));

}