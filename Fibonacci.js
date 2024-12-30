function generateFibonacciandFindPrimes(limit){
    let fibonacciSequence=[0,1];
    let PrimeNumbers=[];
    
    for (let i=2;i<=limit;i++){
        fibonacciSequence[i]=fibonacciSequence[i-1]+fibonacciSequence[i-2];
        if(isPrime(fibonacciSequence[i])){
            PrimeNumbers.push(fibonacciSequence[i]);

        }
    }
}
console.log("Fibonacci Sequence:",fibonacciSequence.slice(0,limit+1));
console.log("Prime Numbers in the Sequence:",primeNumbers);

function isPrime(num){
    if(num<=1) return false;
    if(num<=3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  generateFibonacciAndFindPrimes(100);