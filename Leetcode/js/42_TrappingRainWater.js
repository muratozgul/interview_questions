// /**
//  * @param {number[]} height
//  * @return {number}
//  */
var input = [5,4,1,2];//[0,1,0,2,1,0,1,3,2,1,2,1]; //ans = 6

var trap = function(height) {
    var total = 0;
    var peaks = [];
    var peaksH = [];
    
    for(var i=0; i<height.length; i++){ // find peaks (higher ground from the prev tile)
        if(i === 0 && height[i]>0){
            peaks.push(i);
            peaksH.push(height[i]);
        } else if(height[i] > height[i-1] ){
            peaks.push(i);
            peaksH.push(height[i]);
        }   
    }
    
    if(peaks.length < 2){ // will not be able to hold water
        return 0;
    }
    
    var firstEligR = function(index){ //find first matching (height) wall to the right
        var max = 0;
        var maxindex = index;
        for(var i=index+1; i<peaks.length; i++){
            if(peaksH[i] > max){
                max = peaksH[i];
                maxindex = i;
                if(peaksH[i] >= peaksH[index]){
                    return maxindex;
                }
            }
        }
        return maxindex;
    };
    
    for(var k=0; k<peaks.length-1;){
        var start = peaks[k];
        var eligIndex = firstEligR(k);
        var finish = peaks[eligIndex];
        
        var waterLevel = Math.min(height[start], height[finish]);
  
        var temp = 0;
        for(var j=start+1; j<finish; j++){
            temp += (Math.max(waterLevel - height[j], 0)); // if ground>water level, count as 0
        }
 
        total += temp;
        k = eligIndex;
    }
    
    
    return total;
};