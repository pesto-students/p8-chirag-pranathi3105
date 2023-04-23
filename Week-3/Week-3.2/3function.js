function product(a,b)
{
    return a*b;
}
var double = product.bind(null,2,3);
console.log("Example of bind method")
console.log(double(4,5))
console.log("***********************")
console.log("Example of call method")
function greet(name)
{
    var reply = [name,this.animal, "typically sleeps between ", this.sleepDuration].join(' ')
    console.log(reply)
}

var cats = {
    animal:'Cats', sleepDuration:'12 to 16 hours'
} 
var dogs = {
    animal:'Dogs', sleepDuration:'2 to 5 hours'
} 
 greet.call(cats,'Rats')
 greet.call(dogs)

 console.log("***********************")
console.log("Example of apply method")
var numbers = [5,6,4,100,8,3,9]
var max = Math.max.apply(null,numbers);
console.log(max);
var min = Math.min.apply(null,numbers);
console.log(min);