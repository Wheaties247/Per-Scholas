//Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

var counter=1;

// while(counter<100){

// 	if((counter%5==0)&&(!(counter%3==0)){
// 		console.log('Buzz');
// 		counter++;
// 	}
// 	else (counter%3==0){
// 		console.log(Fizz);
// 		counter++
// 	} 
// 			counter++;
// 			console.log(counter);
// }

while (counter<100){
	if ((counter%5==0)&&(!(counter%3==0))){
		console.log('Buzz');
		counter++;
	}
	else if((counter%3==0)&&(!(counter%5==0))){
		console.log('Fizz');
		counter++;
	}
	else if ((counter%3==0)&&(counter%5==0)){
			console.log('FizzBuzz');
			counter++;

	}
	else{
	console.log(counter);
	counter++;
		}
}

