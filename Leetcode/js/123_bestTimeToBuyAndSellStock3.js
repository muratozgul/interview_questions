/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit.
You may complete at most two transactions.

Note:
You may not engage in multiple transactions at the same time 
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

  var maxTransactions = 2; //buy+sell = 1 transaction
  var maxProfit = 0; //so far
  var dp = []; //dp[transactionCount][prices(day)Index]

  var i, t;
  //initialize dp
  for(t=0; t<=maxTransactions; t++){
    dp.push([]);
    for(i=0; i<prices.length; i++){
      dp[t].push(0);
    }
  }

  for(t=1; t<=maxTransactions; t++){ //0 transactions = 0 profit

    var tempMax = dp[t-1][0] - prices[0];
    //var tempMaxArr = [tempMax];
    for(i=1; i<prices.length; i++){ //only one datapoints = 0 profit
      dp[t][i] = Math.max(dp[t][i-1], prices[i] + tempMax);
      tempMax = Math.max(tempMax, dp[t-1][i] - prices[i]);
      //tempMaxArr.push(tempMax);
      maxProfit = Math.max(dp[t][i], maxProfit);
    }
    // console.log("dpt-1:   ", dp[t-1]);
    // console.log("prices:  ", prices);
    // console.log("tMaxArr: ", tempMaxArr);
    // console.log("dp:      ", dp[t]);
    // console.log("---");
  }
  
  return maxProfit;
};
