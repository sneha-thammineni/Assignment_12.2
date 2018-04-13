var x = [10,8,12,36];

//Creating an empty array

var y = [];

// Looping the values to the empty array using map
  y = x.map(function(n) {
    return n*2;});
console.log(y);

// Looping the values to the empty array without using map
for(var i=0;i<x.length;i++){
   y[i] = x[i] * 2;
    console.log(y[i]);

}


// Printing the values which are >20
for(var i=0;i<y.length;i++){
    
    if( y[i] > 20){
        console.log(y[i]);
    }
    
    }
//Summing up all the values in the array using the reduce method.
 console.log(y.reduce(function(a, b) {
    return a + b;
})); 