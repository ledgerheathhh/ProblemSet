// 1323. 6 和 9 组成的最大数字
// 简单
// 给你一个仅由数字 6 和 9 组成的正整数 num。
// 你最多只能翻转一位数字，将 6 变成 9，或者把 9 变成 6 
// 请返回你可以得到的最大数字。


// 示例 1：
// 输入：num = 9669
// 输出：9969
// 解释：
// 改变第一位数字可以得到 6669 
// 改变第二位数字可以得到 9969 
// 改变第三位数字可以得到 9699 
// 改变第四位数字可以得到 9666 
// 其中最大的数字是 9969 

// 示例 2：
// 输入：num = 9996
// 输出：9999
// 解释：将最后一位从 6 变到 9，其结果 9999 是最大的数

// 示例 3：
// 输入：num = 9999
// 输出：9999
// 解释：无需改变就已经是最大的数字了
 

// 提示：
// 1 <= num <= 10^4
// num 每一位上的数字都是 6 或者 9 

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const strNum = num.toString();
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] === '6') {
            return parseInt(strNum.slice(0, i) + '9' + strNum.slice(i + 1), 10);
        }
    }
    return num;
};

var maximum69Number2 = function (num) {
    let charArray = [...num.toString()];

    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] === '6') {
            charArray[i] = '9';
            break;
        }
    }

    return Number(charArray.join(''));
};

/**
无法将字符串中的 '6' 更改为 '9'
其根本原因在于 **JavaScript 中的字符串是不可变的（immutable）**。
这意味着一旦一个字符串被创建，它内部的任何字符都不能被直接更改
当您尝试通过索引 `strNum[i] = '9';` 来修改字符串时
这个操作会静默失败，既不会报错，也不会改变原始字符串的内容。

### 正确的实现方式
创建一个新的字符串，而不是试图修改原始字符串。几种常见且有效的方法：

#### 1. 使用 `replace()` 方法
最简洁、最推荐的方法，尤其是只想替换第一个匹配项的情况下。

```javascript
let num = 669;
let strNum = num.toString();
const newStrNum = strNum.replace('6', '9');

console.log('===', newStrNum); // 输出: '===', '969'
```

如果想替换所有出现的 '6'，可以使用 `replaceAll()` 方法或者带有全局标志的正则表达式。

#### 2. 将字符串转换为数组
可以先将字符串转换为字符数组，修改数组中的元素，然后再将数组转换回字符串。

```javascript
let num = 669;
let strNum = num.toString();
let arr = strNum.split(''); // 将字符串转换为数组 ['6', '6', '9']

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '6') {
        arr[i] = '9'; // 修改数组中的元素
        break; // 找到并替换第一个后即跳出循环
    }
}

const newStrNum = arr.join(''); // 将数组转换回字符串

console.log('===', newStrNum); // 输出: '===', '969'
```

#### 3. 使用字符串的 `slice()` 或 `substring()` 方法
这种方法通过拼接字符串的各个部分来创建一个新的字符串。

```javascript
let num = 669;
let strNum = num.toString();
let newStrNum = strNum; // 初始化新字符串

for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] === '6') {
        // 拼接'6'之前的部分、新的'9'以及'6'之后的部分
        newStrNum = strNum.slice(0, i) + '9' + strNum.slice(i + 1);
        break;
    }
}

console.log('===', newStrNum); // 输出: '===', '969'
```

 JavaScript 的一个核心特性——字符串的不可变性
 */




//  方法二：贪心 + 数学
// 思想同方法一，但是不依赖字符串操作，而是通过纯数学的方式找到最高位的 6 并更改为 9。
// 首先初始化一个基数 digitBase=10e⌊log10(num)⌋
// 这个基数代表了 num 的最高位。然后从高位向低位遍历
// 每次将 digitBase 除以 10。在每一次循环中
// 通过 ⌊num÷digitBase⌋mod10 来获取当前基数 digitBase 所在的十进制位上的数字
// 一旦这个数字等于 6，我们就可以确定这就是需要修改的最高位的 6
// 此时，我们将 num 加上 3×digitBase，即可将该位的 6 修改为 9，结果即为所求

var maximum69Number3 = function (num) {
    let digitBase = Math.pow(10, Math.trunc(Math.log10(num)));

    while (digitBase > 0) {
        if (Math.trunc(num / digitBase) % 10 === 6) {
            num += 3 * digitBase;
            return num;
        }
        digitBase = Math.trunc(digitBase / 10);
    }

    return num;
};