/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like 
(ie, buy one and sell one share of the stock multiple times). 

However, you may not engage in multiple transactions at the same time 
(ie, you must sell the stock before you buy again).
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(!prices || prices.length < 1){
    return 0;
  }

  var stock = false;
  var profit = 0;
  var buyprice;

  for(var i=0; i<prices.length; i++){
    if(!stock && prices[i] < prices[i+1]){
      //buy
      //console.log("buying at: ", i);
      buyprice = prices[i];
      stock = true;
    } else if(stock && (prices[i] > prices[i+1] || i===prices.length-1)){
      //sell
      //console.log("selling at: ", i);
      profit += prices[i]-buyprice;
      stock = false;
    }
    console.log();
  }

  return profit;
};