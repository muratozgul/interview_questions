// Merge Sort

var mergeSort = function(arr, comparator){
    comparator = comparator || function(a, b){ return a<=b};
    return sort(arr, comparator);
};

var sort = function(arr, comparator){
  if(arr.length <= 1) return arr;
  
  var leftArr = arr.slice(0, Math.floor(arr.length/2));
  var rightArr = arr.slice(Math.floor(arr.length/2), arr.length);
  
  leftArr = sort(leftArr, comparator);
  rightArr = sort(rightArr, comparator);

  return merge(leftArr, rightArr, comparator);
};

var merge = function(a, b, comparator){
  var left = 0;
  var right = 0;

  var result = [];

  while(left<a.length && right<b.length){
    if(comparator(a[left],b[right])){
      result.push(a[left]);
      left++;
    } else {
      result.push(b[right]);
      right++;
    }
  }

  while(left<a.length){
    result.push(a[left]);
    left++;
  }

  while(right<b.length){
    result.push(b[right]);
    right++;
  }
  
  return result;
};