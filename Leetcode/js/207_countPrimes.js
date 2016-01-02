/*
Description:

Count the number of prime numbers less than a non-negative number, n.
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var hash = [];
    
    for(var k=0; k<n; k++){
        hash.push(true);
    }
    
    var count = 0;
    //check numbers
    for(var i=2; i*i<n; i++){
        if(hash[i] === true){
            //check isPrime
            for(var j=i*i; j<n; j+=i){
                hash[j] = false;
            }
        }
    }
    
    //count
    for(i=2; i<n; i++){
        if(hash[i] === true){
            count++;
        }   
    }
    
    return count;
};