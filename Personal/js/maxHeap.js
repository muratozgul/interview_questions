// Array implementation
var MaxHeapArr = function(arr){
  this.arr = arr;
};

MaxHeapArr.prototype.size = function(){
  return this.arr.length;
};

MaxHeapArr.prototype.getValOf = function(index){
  return this.arr[index];
};

MaxHeapArr.prototype.getIndexOfParent = function(index){
  return Math.floor((index-1)/2);
};

MaxHeapArr.prototype.getValOfParent = function(index){
  return this.arr[this.getIndexOfParent(index)];
};

MaxHeapArr.prototype.getIndexOfLeftChild = function(index){
  return 2*index+1;
};

MaxHeapArr.prototype.getIndexOfRightChild = function(index){
  return 2*index+2;
};

MaxHeapArr.prototype.getValOfLeftChild = function(index){
  return this.arr[this.getIndexOfLeftChild(index)];
};

MaxHeapArr.prototype.getValOfRightChild = function(index){
  return this.arr[this.getIndexOfRightChild(index)];
};

MaxHeapArr.prototype.swap = function(index1, index2){
  var temp = this.arr[index1];
  this.arr[index1] = this.arr[index2];
  this.arr[index2] = temp;
};

MaxHeapArr.prototype.peek = function(){
  return this.arr[0];
};

MaxHeapArr.prototype.insert = function(val){
  this.arr.push(val);
  var index = this.size()-1;
  
  while(true){
    newIndex = this.bubbleUp(index);
    if(index === newIndex){
      break;
    } else {
      index = newIndex;
    }
  }
  
};

MaxHeapArr.prototype.correct = function(index){
  var val = this.getValOf(index);
  var leftVal = this.getValOfLeftChild(index);
  var rightVal = this.getValOfRightChild(index);

  if(leftVal === undefined) return index;
  if(rightVal === undefined) rightVal = leftVal - 1;

  var isRightChildBigger = rightVal > leftVal ? true : false;
  var biggerChildVal = isRightChildBigger ? rightVal : leftVal;

  if(biggerChildVal > val){
    if(isRightChildBigger){
      this.swap(index, this.getIndexOfRightChild(index));
      this.correct(this.getIndexOfRightChild(index));
      return this.getIndexOfRightChild(index);
    } else {
      this.swap(index, this.getIndexOfLeftChild(index));
      this.correct(this.getIndexOfLeftChild(index));
      return this.getIndexOfLeftChild(index);
    }
  }
  return index;
};

MaxHeapArr.prototype.bubbleUp = function(index){
  if(index < 1) return index;    
  
  var parentIndex = this.getIndexOfParent(index);
  var parentVal = this.getValOf(parentIndex);
  var val = this.getValOf(index);

  if(val > parentVal){
    this.swap(index, parentIndex);
    return parentIndex;
  }
  return index;
};

MaxHeapArr.prototype.maxHeapify = function(){
  var i = Math.floor(this.size()/2)-1;

  for(; i>=0; i--){
    this.correct(i);
  }
};

MaxHeapArr.prototype.delete = function(index){
  this.swap(index, this.size()-1);
  var val = this.arr.pop();
  var newIndex;

  while(true){
    newIndex = this.correct(index);
    if(index === newIndex){
      break;
    } else {
      index = newIndex;
    }
  }
  return val;
};

MaxHeapArr.prototype.search = function(val){
  for(var i=0; i<this.size(); i++){
    if(this.arr[i] === val) return i;
  }
  return -1;
};

MaxHeapArr.prototype.print = function(){
  console.log(this.arr);
};

MaxHeapArr.prototype.checkProperty = function(index){
  index = index || 0;
  var li, ri, rval, leftVal;
  li = this.getIndexOfLeftChild(index);
  ri = this.getIndexOfRightChild(index);
  rightVal = this.getValOf(ri);
  leftVal = this.getValOf(li);
  val = this.getValOf(index);

  if(leftVal === undefined){ 
      return true;
  }
  if(leftVal > val){
    return false;
  } else if(rightVal !== undefined && rightVal > val){
    return false;
  }
  return this.checkProperty(li) && this.checkProperty(ri);
};

MaxHeapArr.prototype.pop = function(){
  if(this.size() > 0){
    return this.delete(0);
  }
  return null;
};


// var arr = [2,2,2,155,2,2,2,1,0,2,2,15,0,0,22,-1,100];
// var h = new MaxHeapArr(arr);


