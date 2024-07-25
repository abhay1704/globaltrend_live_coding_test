// 01 knapsack problem

function knapsack(weights, values, ind, remCap, dp) {
  // If no capacity remaining or all elements accesed, return 0, since no more values can be added
  if (remCap <= 0 || ind < 0) return 0;

  // return solution from memoization table if exist
  if (dp[ind][remCap] != -1) return dp[ind][remCap];

  let take = 0,
    notTake = 0;
  if (remCap >= weights[ind])
    take =
      values[ind] +
      knapsack(weights, values, ind - 1, remCap - weights[ind], dp);

  notTake = knapsack(weights, values, ind - 1, remCap, dp);

  // resultant upto given index is maximum of if we take that elemtent or we don't take the element
  // find resultant and save to memoization table for reusability.
  return (dp[ind][remCap] = Math.max(take, notTake));
}

const weights = [1, 2, 3];
const values = [10, 15, 40];
const capacity = 6;

const n = values.length;
const dp = Array.from({ length: n }, (_) => {
  return Array.from({ length: capacity + 1 }, (_) => {
    return -1;
  });
});

const ans = knapsack(weights, values, 2, capacity, dp);
console.log(ans);
