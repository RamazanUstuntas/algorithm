Script started on 2021-10-19 22:22:10+03:00 [TERM="xterm-256color" TTY="/dev/pts/0" COLUMNS="80" LINES="24"]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git statusreset .[2Padd[C[C[2@reset[C[C[1Pstatus[Kscript 001-Multiplesof3and5.js 
Script started, file is 001-Multiplesof3and5.js
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node s[K001-Multiplesof3and5.js 
/home/siradanpil/algorithm/001-Multiplesof3and5.js:4
    if(i%3=0 || i%5=0){
       ^^^

SyntaxError: Invalid left-hand side in assignment
[90m    at wrapSafe (internal/modules/cjs/loader.js:1001:16)[39m
[90m    at Module._compile (internal/modules/cjs/loader.js:1049:27)[39m
[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)[39m
[90m    at Module.load (internal/modules/cjs/loader.js:950:32)[39m
[90m    at Function.Module._load (internal/modules/cjs/loader.js:790:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)[39m
[90m    at internal/main/run_main_module.js:17:47[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 001-Multiplesof3and5.js 
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 001-Multiplesof3and5.js 
[33m33[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ function multiplesThreeAndFive(value) {
bash: syntax error near unexpected token `value'
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$   let totalSum=0;
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$   for (let i=0;i<=value;i++){
bash: syntax error near unexpected token `('
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$     if(i%3=0 || i%5=0){
bash: syntax error near unexpected token `{'
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$       totalSum=totalSum+i;
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$     }
bash: syntax error near unexpected token `}'
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$   }
bash: syntax error near unexpected token `}'
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$   return totalSum;
bash: return: totalSum: numeric argument required
bash: return: can only `return' from a function or sourced script
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ }function multiplesThreeAndFive(value) {[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[10Pnode 001-Multiplesof3and5.js 
[33m23[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 001-Multiplesof3and5.js 
[33m233168[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 001-Multiplesof3and5.js 
[33m233168[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ touch 002-EvenFibonacciNumbers.js
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
/home/siradanpil/algorithm/002-EvenFibonacciNumbers.js:5
    value3=value1 + value2;
    ^

ReferenceError: value1 is not defined
    at Fibonacci (/home/siradanpil/algorithm/002-EvenFibonacciNumbers.js:5:5)
    at Object.<anonymous> (/home/siradanpil/algorithm/002-EvenFibonacciNumbers.js:12:1)
[90m    at Module._compile (internal/modules/cjs/loader.js:1085:14)[39m
[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)[39m
[90m    at Module.load (internal/modules/cjs/loader.js:950:32)[39m
[90m    at Function.Module._load (internal/modules/cjs/loader.js:790:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)[39m
[90m    at internal/main/run_main_module.js:17:47[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
/home/siradanpil/algorithm/002-EvenFibonacciNumbers.js:2
  let value1,value2=0,1;
                      ^

SyntaxError: Unexpected number
[90m    at wrapSafe (internal/modules/cjs/loader.js:1001:16)[39m
[90m    at Module._compile (internal/modules/cjs/loader.js:1049:27)[39m
[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)[39m
[90m    at Module.load (internal/modules/cjs/loader.js:950:32)[39m
[90m    at Function.Module._load (internal/modules/cjs/loader.js:790:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)[39m
[90m    at internal/main/run_main_module.js:17:47[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m89[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m89[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m44[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ ^C
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
/home/siradanpil/algorithm/002-EvenFibonacciNumbers.js:8
    value1=value2;
          ^

TypeError: Assignment to constant variable.
    at Fibonacci (/home/siradanpil/algorithm/002-EvenFibonacciNumbers.js:8:11)
    at Object.<anonymous> (/home/siradanpil/algorithm/002-EvenFibonacciNumbers.js:17:1)
[90m    at Module._compile (internal/modules/cjs/loader.js:1085:14)[39m
[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)[39m
[90m    at Module.load (internal/modules/cjs/loader.js:950:32)[39m
[90m    at Function.Module._load (internal/modules/cjs/loader.js:790:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)[39m
[90m    at internal/main/run_main_module.js:17:47[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
/home/siradanpil/algorithm/002-EvenFibonacciNumbers.js:15
Fibonacci( infinity );
           ^

ReferenceError: infinity is not defined
    at Object.<anonymous> (/home/siradanpil/algorithm/002-EvenFibonacciNumbers.js:15:12)
[90m    at Module._compile (internal/modules/cjs/loader.js:1085:14)[39oint [as runMain] (internal/modules/run_main.js:76:12)[39m
[90m    at internal/main/run_main_module.js:17:47[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
^C
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
^C
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
^C
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
^C
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m44[39m
[33m4.523128485832664e+74[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m44[39m
[33m1.8092513943330656e+75[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m44[39m
[33m2.037035976334486e+90[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m44[39m
[33m3.273390607896142e+150[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m44[39m
[33mInfinity[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
^C
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
^C
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
[33mInfinity[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m0[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m0[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m0[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m44[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m188[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m44[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m4613732[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m10[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 002-EvenFibonacciNumbers.js 
[33m44[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ touch 003-LargestPrimeFactor.js
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ touch 003-LargestPrimeFactor.jsnode 002-EvenFibonacciNumbers.js [C[C[C[C[C[C[C[C[C[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K3-LargestPrimeFactor.js 
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[33m10.5[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[33m9.5[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[33m10[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[33m11[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m7[39m, [33m3[39m, [33m1[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m7[39m, [33m3[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[
  [33m2639[39m, [33m1885[39m, [33m1015[39m, [33m455[39m,
   [33m377[39m,  [33m203[39m,  [33m145[39m,  [33m91[39m,
    [33m65[39m,   [33m35[39m,   [33m29[39m,  [33m13[39m,
     [33m7[39m,    [33m5[39m
]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m377[39m, [33m203[39m, [33m91[39m, [33m29[39m, [33m13[39m, [33m7[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m29[39m, [33m13[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m29[39m, [33m7[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m13[39m, [33m7[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m377[39m, [33m29[39m, [33m13[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m29[39m, [33m13[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m31[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m31[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m377[39m, [33m29[39m, [33m13[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m377[39m, [33m29[39m, [33m13[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m5[39m, [33m7[39m, [33m13[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ İ[Knode 003-LargestPrimeFactor.js 
[ [33m5[39m, [33m7[39m, [33m13[39m, [33m29[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[ [33m71[39m, [33m839[39m, [33m1471[39m, [33m6857[39m ]
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
/home/siradanpil/algorithm/003-LargestPrimeFactor.js:15
  return console.log(Math.Max(Arr));
                          ^

TypeError: Math.Max is not a function
    at LargePrimeFactor (/home/siradanpil/algorithm/003-LargestPrimeFactor.js:15:27)
    at Object.<anonymous> (/home/siradanpil/algorithm/003-LargestPrimeFactor.js:18:1)
[90m    at Module._compile (internal/modules/cjs/loader.js:1085:14)[39m
[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)[39m
[90m    at Module.load (internal/modules/cjs/loader.js:950:32)[39m
[90m    at Function.Module._load (internal/modules/cjs/loader.js:790:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)[39m
[90m    at internal/main/run_main_module.js:17:47[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[33mNaN[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[33m6857[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[33m29[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[33m6857[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
/home/siradanpil/algorithm/003-LargestPrimeFactor.js:5
    if(value % i === 0 ){
               ^

ReferenceError: i is not defined
    at LargePrimeFactor (/home/siradanpil/algorithm/003-LargestPrimeFactor.js:5:16)
    at Object.<anonymous> (/home/siradanpil/algorithm/003-LargestPrimeFactor.js:19:1)
[90m    at Module._compile (internal/modules/cjs/loader.js:1085:14)[39m
[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)[39m
[90m    at Module.load (internal/modules/cjs/loader.js:950:32)[39m
[90m    at Function.Module._load (internal/modules/cjs/loader.js:790:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)[39m
[90m    at internal/main/run_main_module.js:17:47[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[33m6857[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ node 003-LargestPrimeFactor.js 
[33m6857[39m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m001-Multiplesof3and5.js[m
	[31m002-EvenFibonacciNumbers.js[m
	[31m003-LargestPrimeFactor.js[m

nothing added to commit but untracked files present (use "git add" to track)
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git add .
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	[32mnew file:   001-Multiplesof3and5.js[m
	[32mnew file:   002-EvenFibonacciNumbers.js[m
	[32mnew file:   003-LargestPrimeFactor.js[m

]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git reset
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git sat[K[Ktaturs
git: 'staturs' is not a git command. See 'git --help'.

The most similar command is
	status
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git staturs[K[Ks
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m001-Multiplesof3and5.js[m
	[31m002-EvenFibonacciNumbers.js[m
	[31m003-LargestPrimeFactor.js[m

nothing added to commit but untracked files present (use "git add" to track)
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git add 001-Multiplesof3and5.js 
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git commit -m ""f"İ"N"D" "[1P"[1P"[1P"[1P"i"n"d" "t"h"e" "[1P"[1P"[1P"[1P"[1P"[1P"[1P"[1P"[1P"Find the sum of all the multiples of 3 or 5 below 1000."
[master c65c0c5] Find the sum of all the multiples of 3 or 5 below 1000.
 1 file changed, 269 insertions(+)
 create mode 100644 001-Multiplesof3and5.js
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git push
Enumerating objects: 4, done.
Counting objects:  25% (1/4)Counting objects:  50% (2/4)Counting objects:  75% (3/4)Counting objects: 100% (4/4)Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects:  33% (1/3)Compressing objects:  66% (2/3)Compressing objects: 100% (3/3)Compressing objects: 100% (3/3), done.
Writing objects:  33% (1/3)Writing objects:  66% (2/3)Writing objects: 100% (3/3)Writing objects: 100% (3/3), 1.92 KiB | 1.92 MiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To github.com:RamazanUstuntas/algorithm.git
   46b087e..c65c0c5  master -> master
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m002-EvenFibonacciNumbers.js[m
	[31m003-LargestPrimeFactor.js[m

nothing added to commit but untracked files present (use "git add" to track)
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git add 002-EvenFibonacciNumbers.js 
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git commit -m ""find the sum of the even-valued terms.[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[Cfind the sum of the even-valu[1P[A]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ [C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C
[C[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[Cfeven-val[1@u[A]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ [C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[Cieven-va[1@l[A]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ [C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[Cbeven-v[1@a[A]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ [C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[Coeven-[1@v[A]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ [C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[Cneven[1@-[A]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ [C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[Caeve[1@n[A]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ [C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[Ccev[1@e[A]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ [C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[Cce[1@v[1@i[1@ [C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C"
[master 0121fe0] find the sum of the fibonacci even-valued terms.
 1 file changed, 22 insertions(+)
 create mode 100644 002-EvenFibonacciNumbers.js
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git push
Enumerating objects: 4, done.
Counting objects:  25% (1/4)Counting objects:  50% (2/4)Counting objects:  75% (3/4)Counting objects: 100% (4/4)Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects:  33% (1/3)Compressing objects:  66% (2/3)Compressing objects: 100% (3/3)Compressing objects: 100% (3/3), done.
Writing objects:  33% (1/3)Writing objects:  66% (2/3)Writing objects: 100% (3/3)Writing objects: 100% (3/3), 719 bytes | 719.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To github.com:RamazanUstuntas/algorithm.git
   c65c0c5..0121fe0  master -> master
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	[31mmodified:   001-Multiplesof3and5.js[m

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m003-LargestPrimeFactor.js[m

no changes added to commit (use "git add" and/or "git commit -a")
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ gi[K[Kgit status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	[31mmodified:   001-Multiplesof3and5.js[m

Untracked files:
  (use "git add <file>..." to include in what will be cnot staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	[31mmodified:   001-Multiplesof3and5.js[m

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m003-LargestPrimeFactor.js[m

no changes added to commit (use "git add" and/or "git commit -a")
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git pull
remote: Enumerating objects: 3, done.[K
remote: Counting objects:  33% (1/3)[Kremote: Counting objects:  66% (2/3)[Kremote: Counting objects: 100% (3/3)[Kremote: Counting objects: 100% (3/3), done.[K
remote: Compressing objects:  50% (1/2)[Kremote: Compressing objects: 100% (2/2)[Kremote: Compressing objects: 100% (2/2), done.[K
remote: Total 2 (delta 0), reused 0 (delta 0), pack-reused 0[K
Unpacking objects:  50% (1/2)Unpacking objects: 100% (2/2)Unpacking objects: 100% (2/2), 672 bytes | 672.00 KiB/s, done.
From github.com:RamazanUstuntas/algorithm
   0121fe0..b0fd41c  master     -> origin/master
Updating 0121fe0..b0fd41c
error: Your local changes to the following files would be overwritten by merge:
	001-Multiplesof3and5.js
Please commit your changes or stash them before you merge.
Aborting
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git status
On branch master
Your branch is behind 'origin/master' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	[31mmodified:   001-Multiplesof3and5.js[m

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m003-LargestPrimeFactor.js[m

no changes added to commit (use "git add" and/or "git commit -a")
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git add 001-Multiplesof3and5.js 
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git commit -m ""[KFind the sum of all the multiples of 3 or 5 below 1000."
[master 289170f] Find the sum of all the multiples of 3 or 5 below 1000.
 1 file changed, 101 insertions(+), 1 deletion(-)
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git push
To github.com:RamazanUstuntas/algorithm.git
 [31m! [rejected]       [m master -> master (non-fast-forward)
[31merror: failed to push some refs to 'git@github.com:RamazanUstuntas/algorithm.git'
[m[33mhint: Updates were rejected because the tip of your current branch is behind[m
[33mhint: its remote counterpart. Integrate the remote changes (e.g.[m
[33mhint: 'git pull ...') before pushing again.[m
[33mhint: See the 'Note about fast-forwards' in 'git push --help' for details.[m
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git pull
CONFLICT (modify/delete): 001-Multiplesof3and5.js deleted in b0fd41c4581d8249f0c7ae18e89151c8a46e049f and modified in HEAD. Version HEAD of 001-Multiplesof3and5.js left in tree.
Automatic merge failed; fix conflicts and then commit the result.
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git reset
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msiradanpil@siradanpilPC[00m:[01;34m~/algorithm[00m$ git status
On branch master
Your branch and 'origin/master' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m003-LargestPrimeFactor.js[m

nothing added to commit but untracked files present (use "git add" to track)
]0;siradanpil@siradanpilPC: ~/algorithm[01;32msirada