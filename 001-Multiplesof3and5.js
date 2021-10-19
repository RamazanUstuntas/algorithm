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
Your branch is up to d