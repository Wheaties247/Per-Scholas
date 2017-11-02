//Nando went to the vending machine to buy himself a cookie. The cookie costs $4 dollars. He paid with a $10 bill, the vending machine paid him back in quarters. Write a loop that says how many quarters he got in return.

// var nandoCashDollars=10;
// var cookieCostDollars=4;
// var i;
// for (i=0 ;i<1;i++)
// 	{
// 		console.log( "Nando spent "+nandoCashDollars+" on a cookie that cost "+cookieCostDollars+" will be returned from the purchase of a four dollar cookie");
// 	}

// var nandoDollars;

// for (nandoDollars=10; nandoDollars>5; nandoDollars--){
// if (nandoDollars==6)
// {
// 	console.log('Nando recived $'+ nandoDollars+' in quarters. ;  '+nandoDollars/.25 + 'quarters.');
// }
// }

// // var dollars;
// // var product;

 var i;

 function vending(dollars, product){
 	var change=(dollars-product);//change =6
 	for (i=0;i<change;i++) {
 	if (i==(change-1))
 		{
 			console.log('nando recived $'+ change+ ' in quarters. ;'+ (change*4));
 		}
 	}
 }
 vending(10,6);
 vending(20,2);
var var1=12;
var var2=18;
function sum(var1,var2){
	return var1+var2;
}

// console.log(sum(var1,var2));

// var costOfItem;//input in dollars 
// var payment;// input in dollars
// var quartersDispensed=0;
// var dollarsDispensed=0;
// var quarterConversion;

// function changeDollars(payment,costOfItem){

// 	return payment-costOfItem;
// }
// function quartersDispensed(changeDollars){
// 	return changeDollars/0.25;
// }

// function vendingTransaction(){
	

// 	for(change=0;change<=payment;change+=0.25){
// 		if(change<=costOfItem-payment){
// 				dollarsDispensed++;
// 		}
// 		else{
			
// 	console.log('The change for your $'+costOfItem+'item is $'+dollarsDispensed+', in the amount of 'quarterConversion+'quarters. Thank you for your service, come again!');
// 		}
// 	}
		

// }

// vendingTransaction(15.25,20.75);

