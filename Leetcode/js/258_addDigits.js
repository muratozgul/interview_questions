/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    function slowSolution(num){
        function solver(num){
            var sum = 0;
            var temp = num;
            while(temp >= 1){
                sum += temp%10;
                temp = Math.floor(temp/10);
            }
            //console.log("Sum: ", sum , " ,temp: " + temp );
            if(sum>10){
                return solver(sum);
            }else{
                return sum;
            }
        }
        
        return solver(num);
    }
    
    function fastSolution(num){
        //constant time solution:
        //numbers who are divisible by 9 have a property that adding up 
        //their digits in such a way would eventually lead to a 9. 
        //This will help us to solve the problem.
        if(num === 0){
            return 0;    
        } else if(num%9===0){
            return 9;
        } else {
            return num%9;
        }
        
    }
    
    return fastSolution(num);
};