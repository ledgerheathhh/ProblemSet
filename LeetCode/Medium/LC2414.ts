// 2414. 最长的字母序连续子字符串的长度
// 中等
// 字母序连续字符串 是由字母表中连续字母组成的字符串。换句话说，字符串 "abcdefghijklmnopqrstuvwxyz" 的任意子字符串都是 字母序连续字符串 。

// 例如，"abc" 是一个字母序连续字符串，而 "acb" 和 "za" 不是。
// 给你一个仅由小写英文字母组成的字符串 s ，返回其 最长 的 字母序连续子字符串 的长度。

 

// 示例 1：

// 输入：s = "abacaba"
// 输出：2
// 解释：共有 4 个不同的字母序连续子字符串 "a"、"b"、"c" 和 "ab" 。
// "ab" 是最长的字母序连续子字符串。
// 示例 2：

// 输入：s = "abcde"
// 输出：5
// 解释："abcde" 是最长的字母序连续子字符串。
 

// 提示：

// 1 <= s.length <= 105
// s 由小写英文字母组成

function longestContinuousSubstring(s: string): number {
  let head = 0;
  let tail = 1;
  let max = 0;
  while(tail<s.length){
    if(s[tail].charCodeAt(0)===s[tail-1].charCodeAt(0)+1){
      tail++;
    }else {
      max = (tail-head)>max ? (tail-head) : max;
      head = tail;
      tail++;
    }
  }
  max = (tail-head)>max ? (tail-head) : max;
  return max;
};

//官方题解
function longestContinuousSubstring2(s: string): number {
  let res: number = 1;
  let cur: number = 1;
  for (let i: number = 1; i < s.length; i++) {
      if (s[i] === String.fromCharCode(s.charCodeAt(i - 1) + 1)) {
          cur++;
      } else {
          cur = 1;
      }
      res = Math.max(res, cur);
  }
  return res;
};
