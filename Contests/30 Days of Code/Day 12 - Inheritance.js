class Grade : Student{
    private int score;
    
    public Grade(String firstname, String lastname, int phone, int score)
        : base(firstname, lastname, phone)
    {
        this.score = score;
    }
    
    public Char calculate()
    {
        var score = this.score;
        Char scoreAsLetter = 'D';
        
        if (score < 40)
        {
            scoreAsLetter = 'D';
        } 
        else if (score >= 40 && score < 60)
        {
            scoreAsLetter = 'B';
        }
        else if (score >= 60 && score < 75)
        {
            scoreAsLetter = 'A';
        }
        else if (score >= 75 && score < 90)
        {
            scoreAsLetter = 'E';
        } 
        else if (score >= 90 && score <= 100)
        {
            scoreAsLetter = 'O';
        }
        
        return scoreAsLetter;
    }
    
    public void displayScore()
    {
        base.display();
        Console.WriteLine("\nGrade: " + this.score);
    }
    
}