/**70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
 * @param {number} n
 * @return {number}
 */


 var climbStairs = function(n) {
    if(n <= 2 ) return n
    
    let climbNums = [0,1,2]
    for(let i = 3; i <= n;i++){
        climbNums[i] = climbNums[i-1] + climbNums[i-2]
    }
    return climbNums[n]
    
    
};



/**746. Min Cost Climbing Stairs
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.

 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {

    if(cost.length ==2) return Math.min(cost[1], cost[0])
    
    let min1Before = cost[1]
    let min2Before = cost[0]
    let minCurrent
    
    for(let i = 2; i < cost.length; i ++){
        minCurrent = cost[i] + Math.min(min1Before,min2Before)
        min2Before = min1Before
        min1Before = minCurrent
        
        
    }
return Math.min(min1Before, min2Before)


}


/**198. House Robber
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     if (nums.length ==2) return Math.max(nums[0],nums[1])
//     if(nums.length==1) return nums[0]
    
//     let dp = [nums[0], Math.max(nums[0],nums[1])]
//     for(let i = 2; i < nums.length; i++){
//         dp[i] = Math.max(nums[i]+dp[i-2], dp[i-1]) 
        
//     }
//     console.log(dp)
//     return dp[nums.length-1]
    
// };

var rob = function(nums) {

    if (nums.length ==2) return Math.max(nums[0],nums[1])
    if(nums.length==1) return nums[0]
    
    let nonAdj = nums[0]
    let maxPrev = Math.max(nums[0],nums[1])
    let curr
    for(let i = 2; i< nums.length; i++){
        curr = Math.max((nums[i] + nonAdj), maxPrev)
        nonAdj = maxPrev
        maxPrev = curr
    }
    return curr

};