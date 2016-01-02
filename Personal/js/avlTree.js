//AVL tree

var AVL = function(val){
  this.val = val;
  this.left = this.right = null;
};

AVL.prototype.search = function(val){
  if(this.val === val){
    return this;
  }
  if(this.val < val && this.left){
    return this.left.search(val);
  } 
  if(this.val > val && this.right){
    return this.right.search(val);
  }
  return null;
};

AVL.prototype.height = function(){
  var leftH = 0;
  var rightH = 0;
  if(this.left){
    leftH = this.left.height();
  }
  if(this.right){
    rightH = this.right.height();
  }
  return Math.max(leftH, rightH)+1;
};

AVL.prototype.balanceFactor = function(){
  var leftH = 0;
  var rightH = 0;
  if(this.left){
    leftH = this.left.height();
  }
  if(this.right){
    rightH = this.right.height();
  }
  return leftH - rightH;
};

AVL.prototype.insert = function(val){
  //1 - INSERT
  if(val <= this.val){
    if(this.left){
      this.left.insert(val);
    } else {
      this.left = new AVL(val);
    }
  } else {
    if(this.right){
      this.right.insert(val);
    } else {
      this.right = new AVL(val);
    }
  }
  //2 - CHECK BALANCE
  var bf = this.balanceFactor();
  if(bf>1){
    //left heavy
    var lbf = this.left.balanceFactor();
    if(lbf > 0){
      //left-left
      console.log("left-left on:", this.val);
      this.rotateRight();
    } else if(lbf < 0) {
      console.log("left-right on:", this.val);
      this.left.rotateLeft();
      this.rotateRight();
    }

  } else if(bf<-1){
    //right heavy
    var rbf = this.right.balanceFactor();
    if(rbf < 0){
      //right-right
      console.log("right-right on:", this.val);
      this.rotateLeft();
    } else if(rbf > 0) {
      console.log("right-left on:", this.val);
      this.right.rotateRight();
      this.rotateLeft();
    }
  }
};

AVL.prototype.rotateLeft = function(){
  var val = this.val;
  var left = this.left;
  var right = this.right;
  
  this.right = right.right;
  right.right = right.left;
  right.left = this.left;
  this.left = right;
  this.val = right.val;
  right.val = val;
};

AVL.prototype.rotateRight = function(){
  var val = this.val;
  var left = this.left;
  var right = this.right;
  
  this.left = left.left;
  left.left = left.right;
  left.right = this.right;
  this.right = left;
  this.val = left.val;
  left.val = val;
};

var avl = new AVL(5);