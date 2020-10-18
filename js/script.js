

     let str = 'xaz x$z x-z xcz x+z x%z x*z';

res = str.replace(/x[\-$\+]z/,'!');

console.log(str);
console.log(res);