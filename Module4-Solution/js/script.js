// var string = "hello"; 
// string += " world" ;
// // string = string + " world";
// console.log(string + "!");







// // **** Regular math operators: +,-,*,/
// console.log((5 + 4) / 3);
// console.log(undefined / 5);
// function test1(a) {
// 	console.log(a/5);
// }
// test1();






// // **** Equality
// var x =5, y =5 ;
// if (x == y) {
// 	console.log("x=5 is equal to y=5");
// } 
// x="5";
// if (x == y) {
// 	console.log("x='5' is equal to y=5")
// }








// // **** Strict equality
// if (x === y) {
// 	console.log("Strict: x='5' is equal to y=5");
// } else {
// 	console.log("Strict: x='5' is not equal to y=5 ");
// }








// // ***** If Statment (all fales)
// if (false || null || undefined || "" || 0 || NaN) {
// 	console.log("This line won't ever execute");
// } 
// else {
// 	console.log("All flase");
// }
// if (true && "hello" && 1 && -1 && "false") {
// 	console.log("All true");
// }





// // **** For loop
// var sum = 0;
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// 	sum = sum + i;
// }
// 	console.log("sum of 0through 9 is: " + sum);

function orderChickenWith(sideDish) {
	sideDish = sideDish || "whatever";
	console.log("Checken With " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();




