function Person(initial_Age){
    this.age = initial_Age;
    
    if (this.age < 0) {
        this.age = 0;
        console.log("This person is not valid, setting age to 0.");
    }
        
    this.amIOld=function(){
        var text = "";

        if (this.age < 13) {
            text = "You are young.";
        } else if (this.age >= 13 && this.age < 18) {
            text = "You are a teenager.";
        } else {
            text = "You are old.";
        }

        console.log(text);
    };
    
    this.yearPasses=function(){
        this.age++;
    };
}