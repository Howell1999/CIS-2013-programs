 var floatAge, floatDays, floatMonths, intWeeks, intFortnights;
     floatAge = parseFloat(prompt("Enter your Age"));
     floatDays = parseFloat(floatAge*'365.25').toFixed(2);
     floatMonths=parseFloat(floatAge*'12').toFixed(2);
     intWeeks= parseInt(floatDays/'7').toFixed(2);
     intFortnights=parseInt(floatDays/'14').toFixed(2);
     alert("Your age is = " + floatAge + " years old");
     alert("Your age is = " + floatDays + " days");
     alert("Your age is = " + floatMonths + " Months");
     alert("Your age is = " + intWeeks + " Weeks");
     alert("Your age is = " + intFortnights + " Fortnights");
/* This program will calculate the age*/
	// Calculate floatDays by multiplying age x 365.25
