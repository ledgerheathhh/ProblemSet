// 1338. 数组大小减半
// 中等
// 给你一个整数数组 arr。你可以从中选出一个整数集合，并删除这些整数在数组中的每次出现。
// 返回 至少 能删除数组中的一半整数的整数集合的最小大小。

// 示例 1：
// 输入：arr = [3,3,3,3,5,5,5,2,2,7]
// 输出：2
// 解释：选择 {3,7} 使得结果数组为 [5,5,5,2,2]、长度为 5（原数组长度的一半）。
// 大小为 2 的可行集合有 {3,5},{3,2},{5,2}。
// 选择 {2,7} 是不可行的，它的结果数组为 [3,3,3,3,5,5,5]，新数组长度大于原数组的二分之一。

// 示例 2：
// 输入：arr = [7,7,7,7,7,7]
// 输出：1
// 解释：我们只能选择集合 {7}，结果数组为空。

// 提示：
// 1 <= arr.length <= 105
// arr.length 为偶数
// 1 <= arr[i] <= 105

// 思路与算法:
// 在每一步操作中，我们需要选择一个数 x，并且删除数组 arr 中所有的 x
// 显然选择的数 x 在数组 arr 中出现的次数越多越好。
// 因此我们可以统计数组 arr 中每个数出现的次数，并进行降序排序。
// 在得到了排序的结果之后，我们依次选择这些数进行删除，直到删除了至少一半的数。
// 在统计数组 arr 中每个数出现的次数时，我们可以借助哈希映射（HashMap）
// 对于其中的每个键值对，键表示数 x，值表示数 x 出现的次数。
// 在统计结束后，我们只要取出哈希映射中的所有值进行降序排序即可。
// 在进行删除时，我们实际上也只需要将删除的数的个数进行累加，直到累加的值达到数组 arr 长度的一半，而不需要真正地将数组 arr 中的数删除。

function minSetSize(arr: number[]): number {
  const freq: Map<number, number> = new Map();
  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  const occ = Array.from(freq.values()).sort((a, b) => b - a);
  let cnt = 0,
    ans = 0;
  for (const c of occ) {
    cnt += c;
    ans++;
    if (cnt * 2 >= arr.length) {
      break;
    }
  }
  return ans;
}
