public Difference(int[] arr)
{
    this.elements = arr;
    this.maximumDifference = 0;
}

public void computeDifference() {

    
    var minValue = this.elements.Min();
    var maxValue = this.elements.Max();
    
    this.maximumDifference = maxValue - minValue;
    
    /* 
    // That could be an alternative:
    
    var elementsLength = this.elements.Length;
    var tempResult = 0;
    
    for (var i=0; i<elementsLength; i++)
    {
        for (var j=0; j<elementsLength; j++) 
        {
            tempResult = elements[i] - elements[j];
            if (tempResult > maximumDifference) 
            {
                maximumDifference = tempResult;
            }                
        }
    }
    */
}