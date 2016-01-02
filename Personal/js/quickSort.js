// Quicksort

var quickSort = function(arr, comparator){
  comparator = comparator || function(a,b){return a>b};
  sort(arr, 0, arr.length-1, comparator);
  console.log(arr);
};

var sort = function(arr, left, right, comparator){
  if(left>=right){
    return;
  }

  var origLeft = left;
  var origRight = right;
  var pivot = left;

  while(left<right){
    if(comparator(arr[left], arr[right])){
      swap(arr, left, right);
      //update pivot
      pivot = pivot === left ? right : left;
    }
    //update pointers
    if(pivot === left){
      right--;
    } else {
      left++;
    }
  }

  sort(arr, origLeft, pivot-1, comparator);
  sort(arr, pivot+1, origRight, comparator);
  return;
};

var swap = function(arr, index1, index2){
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};