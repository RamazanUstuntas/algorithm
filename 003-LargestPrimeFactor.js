/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/

function LargePrimeFactor(value){
  let start = 2;
  let Arr = [];
  while(start <= value){
    if(value % start === 0 ){
      if(start % 2 !== 0 
        && start % 3 !== 0 
        && start % 5 !== 0 
        && start % 7 !== 0 
        ){
        Arr.push(start);
        value = value / start;
      }else if(start === 2 || start === 3 || start === 5 || start === 7){
        Arr.push(start);
        value = value / start;
      }
    }
    start += 1;
  }
  return console.log(Arr[Arr.length-1]);
}

LargePrimeFactor(600851475143);