/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction 
(ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(!prices || prices.length < 1){
      return 0;
    }

    var min = prices[0];
    var maxProf = 0;

    for(var i=1; i<prices.length; i++){
      min = Math.min(min, prices[i]);
      maxProf = Math.max(maxProf, prices[i]-min);
    }

    return maxProf;
};