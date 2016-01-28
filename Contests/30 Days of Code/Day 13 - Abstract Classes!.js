class MyBook : Book {
    protected int price;
    
    public MyBook(string title, string author, int price)
        :base(title, author)
    {
        this.price = price;
    }
    
    public override void display() 
    {
        Console.WriteLine("Title: " +  this.title);
        Console.WriteLine("Author: " + this.author);
        Console.WriteLine("Price: " + this.price);
    }
}