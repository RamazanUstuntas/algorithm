/*A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.*/

function LargestPolindromeProducts(){
  let LargestPolindrome = 0;
  let a = 999;
  while( a >= 100){
    let b = 999;
    while( b >= 100 ){
      let number = a*b;
      if(isPolindrome(number) && LargestPolindrome < number){
          
          LargestPolindrome = number;
      }
      b -= 1;
    } 
    a -= 1;
  }
  return console.log(LargestPolindrome);
}



const reverse = (number) => {
    let reversed = 0;
    while( number > 0 ){
      reversed = 10 * reversed + number % 10;
      number = Math.floor(number / 10);
    }
    return reversed;
}

const isPolindrome = (number) => {
  return number === reverse(number);
}

LargestPolindromeProducts();