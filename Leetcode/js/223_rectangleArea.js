/*
Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Assume that the total area is never beyond the maximum possible value of int.
*/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */

var Rect = function(x1,y1,x2,y2){
  this.top = y2;
  this.bottom = y1;
  this.left = x1;
  this.right = x2;
  this.height = y2-y1;
  this.length = x2-x1;
};

Rect.prototype.area = function(){
  return Math.abs((this.top-this.bottom)*(this.right-this.left));
};

Rect.prototype.isColliding = function(rect){
  if(this.left >= rect.right){
    return false;
  }
  if(this.top <= rect.bottom){
    return false;
  }
  if(rect.left >= this.right){
    return false;
  }
  if(rect.top <= this.bottom){
    return false;
  }
  return true;
};

Rect.prototype.overlapArea = function(rect){
  if(!this.isColliding(rect)){
    return 0;
  }
  var left = Math.max(this.left, rect.left);
  var right = Math.min(this.right, rect.right);
  var top = Math.min(this.top, rect.top);
  var bottom = Math.max(this.bottom, rect.bottom);

  var xh = top-bottom;
  var yh = right-left;
  return xh*yh;
};

var computeArea = function(A, B, C, D, E, F, G, H) {
    var rect1 = new Rect(A,B,C,D);
    var rect2 = new Rect(E,F,G,H);
    
    return rect1.area()+rect2.area()-rect1.overlapArea(rect2);
};

var rect1 = new Rect(-3,0,3,4);
var rect2 = new Rect(0,-1,9,2);

var rect3 = new Rect(-2,-2,2,2);
var rect4 = new Rect(1,-3,3,-1);


