//Nando went to the vending machine to buy himself a cookie. The cookie costs $4 dollars. He paid with a $10 bill, the vending machine paid him back in quarters. Write a loop that says how many quarters he got in return.
var nandoDollars=10;
var cookieCost=4;
var i;
var change=nandoDollars-cookieCost;
var changeQ;

for (i=0;i<change;i++)
	{
	if((change-1)==i)	
	 { console.log('nando recived $'+ change+ ' in quarters. ;'+ (change*4);)}	
	
		changeQ=(nandoDollars-i)*4;//conversion to Quarters
	else 
		{
			console.log(changeQ+" is the number of quarters after the "+ i+ 'th pass of the for loop.');
		}
	}