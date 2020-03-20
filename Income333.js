var $ = function (id) 
{
    return document.getElementById(id);
};

var calculateIncome = function () 
{
    var intAnnualIncome = parseInt($("annualIncome").value);
    var intUserAge = parseInt($("age").value);
    var floatTaxRate, floatAnnualTax;
    
   if (intAnnualIncome > 75000)
   {
    floatTaxRate="20";
   } 
    
    else   
    {
        if (intAnnualIncome < 30000)
          {
            if (intUserAge >= 65)
            {
                floatTaxRate = "2.5";
            }
            else
            {
                floatTaxRate = "5";
            }
          }
        else
         { 
            if(intAnnualIncome >= 30000 || intAnnualIncome <= 75000)
             {
                if (intUserAge >= 65)
                 {
                     floatTaxRate = "5";
                 }
                 else
                 {
                     floatTaxRate = "10";
                 }
             }
         }
    }
            
   


	floatAnnualTax = intAnnualIncome * (floatTaxRate/100);

   $("annualTax").value=floatAnnualTax;
    

	alert ("Your annual income tax this year is $" + floatAnnualTax  +"\nBased upon an annual income of $"+ intAnnualIncome+
	"\nAnd a tax rate of " +floatTaxRate+ "% \nNote: Tax rate is based upon your age");
	
};

window.onload = function () 
{
    $("annualIncome").value = "";
    $("age").value = "";
    $("annualTax").value = "";
    $("calculate").onclick = calculateIncome;
    $("annualIncome").focus();
    $("annualTax").value=floatAnnualTax;
};
