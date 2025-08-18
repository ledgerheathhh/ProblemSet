// 1780. 判断一个数字是否可以表示成三的幂的和
// 中等
// 给你一个整数 n ，如果你可以将 n 表示成若干个不同的三的幂之和，请你返回 true ，否则请返回 false
// 对于一个整数 y ，如果存在整数 x 满足 y == 3x ，我们称这个整数 y 是三的幂

// 示例 1：
// 输入：n = 12
// 输出：true
// 解释：12 = 31 + 32

// 示例 2：
// 输入：n = 91
// 输出：true
// 解释：91 = 30 + 32 + 34

// 示例 3：
// 输入：n = 21
// 输出：false

// 提示：
// 1 <= n <= 107

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  while (n >= 3) {
    const temp = n % 3;
    if (temp > 1) return false;
    n=Math.trunc(n/3)
  }
  if (n > 1) return false;
  return true;
};

checkPowersOfThree(12); // true
checkPowersOfThree(91); // true
checkPowersOfThree(21); // false
