function  myFunction() {
    var Gender = document.getElementById("gender").value;

    var Age = document.getElementById("age").value;
    
        if(Gender=="Male" && (Age >= 1 && Age < 5)) {
            alert("Offerring is 5 Shekels of Silver");
        }
        else if(Gender=="Female" && (Age >= 1 && Age < 5)) {
            alert("Offerring is 3 Shekels of Silver");
        }
        else if(Gender=="Male" && (Age >= 5 && Age < 20)) {
            alert("Offerring is 20 Shekels of Silver");
        }
        else if(Gender=="Female" && (Age >= 5 && Age < 20)) {
            alert("Offerring is 10 Shekels of Silver");
        }
        else if(Gender=="Male" && (Age >= 20 && Age < 60)) {
            alert("Offerring is 20 Shekels of Silver");
        }
        else if(Gender=="Female" && (Age >= 20 && Age < 60)) {
            alert("Offerring is 20 Shekels of Silver");
        }
        else if(Gender=="Male" && (Age >= 60)) {
            alert("Offerring is 15 Shekels of Silver");
        }
        else{
            alert("Offerring is 10 Shekels of Silver");
        }
}
    
   
