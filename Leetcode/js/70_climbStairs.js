var climbStairs = function(n) {
    //How many possible ways to climb?
    //n = steps in the stairs
    var actions = [1, 2]; //must be unique
    /*
	    f(1) = 1 = 1;
	    f(2) = 1,1 or 2 = 2
	    f(3) = 1,1,1 or 2,1 or 1,2 = 3
	    f(4) = 1,1,1,1 or 2,1,1 or 1,2,1 or 1,1,2 or 2,2 = 5
    */
    var sum = 0;
    var localsum = 0;
    var lookup = {};
    
    var solutions = [];
    
    var dynamic = function(){
        for(var i=1; i<=n; i++){
            main(i);
            if(i === n){
                sum = localsum;
            }
        }
    };
    
    var main = function(steps){
        localsum = 0;
        var remainingSteps = steps;
        for(var i=0; i<actions.length; i++){
            var current = actions[i];
            recurse(remainingSteps, current);
        }
        lookup[steps] = localsum;
    };
    
    var recurse = function(remainingSteps, current){
        remainingSteps -= current;
        if(lookup.hasOwnProperty(remainingSteps)){
            localsum += lookup[remainingSteps];
            return;
        }
        
        if(remainingSteps > 0){
            for(var i=0; i<actions.length; i++){
                var next = actions[i];
                recurse(remainingSteps, next);
            }
        } else if(remainingSteps === 0){
            localsum++;
            return;
        } else {
            return;
        }
    };
    
    dynamic();
    //console.log(lookup);
    return sum;
};