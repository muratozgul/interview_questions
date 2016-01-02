// /**
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  */
var gas = [6,1,4,3,5];//[10, 2000, 15 ,10];
var cost = [3,8,2,4,2];//[5, 20, 10, 5];

var canCompleteCircuit = function(gas, cost) {
    var n = gas.length;
    var startIndex = 0;
    var traveled = 0;
    var current = 0;
    var tank = 0;
    
    while(startIndex<n && traveled <=n){
        tank += (gas[current] - cost[current]);
        current = (current+1) % n;
        traveled ++;
        if(tank<0){ //reset, save beginning
            startIndex = current;
            tank = 0;
            traveled = 0;
        } else if (traveled > 0 && startIndex === current){
            return startIndex;
        }
    }
    return -1;
};