function grade()
{    
    let x = document.querySelector(".value1").value
    let score = parseInt(x)
    //let score = 65

    if (score < 0 || score > 100)
    {
        document.write("Error! Your score is out of range!!!")
    }

    if (score >= 80 && score <= 100)
    {
        document.write("You scored grade A")
        alert("Excellent")
    }
    if(score >= 70 && score <= 79)
    {
        document.write("You score grade B")
        alert("Good")
    }
    if(score >= 60 && score <= 69)
    {
        document.write("You score grade C+")
        alert("fairly good")
    }
    if(score >= 50 && score <= 59)
    {
        document.write("You score grade C")
        alert("average")
    }
    if(score >= 40 && score <= 49)
    {
        document.write("You score grade D")
        
    }
    if(score < 40 && score >= 0)
    {
        document.write("You score grade F")
    }
}