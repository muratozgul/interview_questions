/*
Given an array of meeting time intervals consisting of start and 
end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return false.
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    
    function comparator(inter1, inter2){
        var left = inter1.end<=inter2.start;
        var right = inter1.start>=inter2.end;
        if(!(left || right)){
            throw new Error("collision");
        }
        return inter1.start - inter2.start;
    }
    
    try{
        intervals.sort(comparator);
    } catch(e) {
        //console.log(e.message);
        return false;
    }
    
    for(var i=1; i<intervals.length; i++){
        if(intervals[i].start < intervals[i-1].end){
            return false;
        }
    }
    
    return true;
};

function Interval(start, end){
    this.start = start;
    this.end = end;
}

var ints = [new Interval(0,30), new Interval(35,50), new Interval(55,60)];
