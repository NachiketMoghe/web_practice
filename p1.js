function factorial(n)
{
    var fact;
    while(n>=1){
    fact= n*factorial(n-1);
    return fact;}
}
console.log("Enter a no.");
var a;
