/* 5-Median of Two Sorted Arrays
There are two sorted arrays nums1 and nums2 of size m and n respectively. 
Find the median of the two sorted arrays. 
The overall run time complexity should be O(log (m+n)).

median-> number that is halfway into the set.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 // NOT DONE

function findMed(arr, left, right){
    //Calculates the median of a sorted array
    var len = arr.length;
    left = left || 0; //optional starting index
    right = right || len-1; //optional end index
    if((right-left)%2===0) {
        return arr[(right+left)/2];
    } else {
        return (arr[(right+left+1)/2-1] + arr[(right+left+1)/2])/2;
    }
}

function mIndex(arr, left, right, lor){
    //Return the index of the median
    //If odd, return left or right 
    //depending on the optional boolean parameter
    //lor-> true:left, false->right
    var len = arr.length;
    left = left || 0; //optional starting index
    right = right || len-1; //optional end index
    if((right-left)%2===0) {
        return (right+left)/2;
    } else if (lor) {
        return (right+left+1)/2-1;
    } else {
        return (right+left+1)/2;
    }
}

var findMedianSortedArrays = function(nums1, nums2) {
    
    function recurse(l1,r1,l2,r2) {
        var m1 = findMed(nums1, l1, r1);
        var m2 = findMed(nums2, l2, r2);
        console.log("m1:",m1," ,m2:", m2);
        var left, right
        if(m1 === m2){
            console.log("m1===m2");
            return m1;
        } else if (m1>m2) {
            console.log("m1>m2");
            right = mIndex(nums1, l1, r1, true); 
            left = mIndex(nums2, l2, r2, false);
            return recurse(l1, right, left, r2);
        } else { //m1<m2
            console.log("m1<m2");
            left = mIndex(nums1, l1, r1, false); 
            right = mIndex(nums2, l2, r2, true);
            return recurse(left, r1, l2, right);
        }
    }
    
    return recurse(0,nums1.length-1, 0,nums2.length-1);
};

var arr1 = [1, 5, 7, 10, 13];
var arr2 = [11, 15, 23, 30, 45];








