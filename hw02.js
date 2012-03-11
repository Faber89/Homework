
/* Somma i numeri positivi di un array */

var sommaPositiva = function(array) {
  return array
    .filter(function(item) { 
      return item >= 0; 
    })
    .reduce(function(prev, cur) { 
      return prev + cur; 
    });
};

var numbers = [-3,-1,3,6,-8,5,2,-6,2];

var res = sommaPositiva(numbers);