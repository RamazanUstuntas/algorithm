/*2520 is the smallest number that can be divided 
by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible 
by all of the numbers from 1 to 20?*/

SmallestMultiple = (n) => {
  var count=0,num=1;
  while(count<n){
    for(var i=1;i<=n;i++){
      if(num % i==0){
       count++;
      }
      else{
       count=0;
       break;
      }
    }
    if(count==n){
      console.log(num);
      break;
    }
    else{
      num++;
    }
  }    
}
SmallestMultiple(20);