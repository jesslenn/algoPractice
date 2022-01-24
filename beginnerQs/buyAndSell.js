/* 
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example Output
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
             
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

//we know our function is going to take our prices as an array
function mostProfit(pricesArr) {
  //One of the things that is a pretty frequent pattern when finding the most or least of something is the use of variables to store them and the idea that if you want to store the most, you'll initialize the variable at the least.
  //Here we see that in action: mostProfit starts at 0 because we don't have any info yet and we want to be able to go up.  min we start at Infinity because we want to make sure that any possible variable we store here later will be able to go down.
  let mostProfit = 0;
  let min = Infinity;
  //Now we loop through our array of prices
  for (let i = 0; i < pricesArr.length; i++) {
    //first we check that value and see if it's less than our min--on our first pass, it is guaranteed to be less than the initial value of min.
    if (pricesArr[i] < min){
      //if it is less, we store the new value in min
      min = pricesArr[i]
    }
    //we now check to see what the difference is between our current value and our min to find the current profit
    let profit = pricesArr[i] - min;
    //if this profit is greater than what we've found for mostProfit so far (remember: on our first pass this is very likely going to be the case unless we get a 0 or negative number)
    if (profit > mostProfit) {
      mostProfit = profit
    }
  }
  return mostProfit;
}