【2024】小米秋招笔试-IOS-卷2

单选题

1. 以下为 Linux 下的 32 位 C 程序
char str[] = "Hello";
char *p = str;
其中 sizeof(p)的结果为：
A. 1
B. 4
C. 8
D. 2
正确答案: B
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (0)
单选题

2. TCP 处于 OSI 哪一层：
A. 表示层
B. 传输层
C. 应用层
D. 会话层
正确答案: B
你的答案: D
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (0)
单选题

3. 以下关于面向对象的描述错误的是：
A. 面向对象的基本特性是封装，继承和多态
B. 多态的必要条件是要有继承，要有方法的重写，父类引用指向子类对象
C. 多态是指允许不同类的对象对同一消息做出响应。即同一消息可以根据发送对象的不同而采用多种不同的行为方式
D. 子类重新定义父类虚函数的方法叫做重载
正确答案: D
你的答案: B
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (1)
推荐最新楼层
在这里输入你的观点吧
头像
牛客164623247号

河南城建学院 iOS开发
方法重写     
点赞
回复
发布于 2022-10-20 23:42
福建
收起
单选题

4. 关于进程和线程的描述正确的是：
A. 线程切换消耗比进程切换消耗要大
B. 进程是操作系统能够进行运算调度的最小单位
C. 线程是资源分配的最小单位
D. 一个进程中可以包含多个线程
正确答案: D
你的答案: C
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (0)
单选题

5. 关于 UDP 的描述正确的是：
A. 一种可靠的面向连接的协议
B. 一种不可靠的面向连接的协议
C. 一种可靠的无连接协议
D. 一种不可靠的无连接协议
正确答案: D
你的答案: C
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (0)
单选题

6. 以下代码执行结果是什么？
```objective-c
1
2
3
4
5
6
7
8
(void)viewDidLoad {
[super viewDidLoad];
NSLog(@"1");
dispatch_sync(dispatch_get_main_queue(), ^{
NSLog(@"2");
});
NSLog(@"3");
}
```

A. 1 2 3
B. 1 3 2
C. 1 3
D. 1
正确答案: D
你的答案: A
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (1)
单选题

7. Objective-C 中关于类方法和实例方法描述错误的是
A. 类方法中的 self 是类对象
B. 类方法可以调用其他的类方法
C. 实例方法中的 self 是实例对象
D. 类方法可以直接调用实例方法
正确答案: D
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (0)
单选题

8. Objective-C 中属性采用@property (nonatomic, copy) NSMutableArray *mutableArray
修饰，调用[self.mutableArray addObject:@"object"]编译或运行的结果是
A. 编译不通过
B. 可以正常运行，并添加@"object"
C. 可以正常运行，但是不能添加@"object"
D. 可以编译通过，但是运行崩溃
正确答案: D
你的答案: A
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (1)
单选题

9. 关于二叉搜索树(二叉排序树)描述错误的是:
A. 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值
B. 对二叉搜索树(二叉排序树)进行中序遍历，一定会得到节点关键字的有序序列
C. 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值
D. 二叉搜索树(二叉排序树)中节点个数相同时，完全二叉树的查找效率最低
正确答案: D
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (0)
单选题

10. 一颗二叉树，头序序列为 ABCDEFG ，中序序列为 CBDAEGF ，则其后序序列为 ( )
A. CDBGFEA
B. CDBFGEA
C. CDBAGFE
D. BCDAGFE
正确答案: A
你的答案: B
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (0)
多选题

11. 以下哪些是 HTTP 协议包含的请求
A. GET
B. HEAD
C. PUT
D. DELETE
正确答案: ABCD
你的答案: AD
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (0)
多选题

12. 关于链表和数组以下描述正确的是：
A. 链表需要指定占用空间大小
B. 链表删除和插入相对便捷
C. 数组需要申请连续的内存空间
D. 数组访问效率比较高
正确答案: BCD
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (0)
多选题

13. 以下属于 Objective-C 中属性修饰符的有哪些：
A. nonatomic
B. strong
C. weak
D. copy
正确答案: ABCD
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (0)
多选题

14. 以下属于设计模式原则的是：
A. "开-闭"原则
B. 里氏代换原则
C. 单一职能原则
D. 依赖倒转原则
正确答案: ABCD
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (0)

多选题

15. MySQL 中关于 replace into 和 insert into 描述正确的有哪些：
A. insert into 可能会插入失败
B. replace into 会有删除数据的操作,所以我们必须对表有删除权限
C. 插入数据的表没有主键或者是唯一索引时，replace into 会直接插入数据
D. 插入数据的表主键或者索引重复，replace into 会执行失败
正确答案: ABC
你的答案: A
官方解析: 暂无官方题目解析，去讨论区看看吧！
题友讨论: (0)
问答题

16. 【合并两个有序链表】
问题描述:
例如链表A:1->3->5和链表B:2->4->6，输出为1->2->3->4->5->6
```java
/**
节点类
public class ListNode {
int val;
ListNode next;
ListNode() {}
ListNode(int val) { this.val = val; }
ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
*/
class Solution {
public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
}
}
```
输入描述:
两行逗号分隔的数字，分别表示两个链表。

输出描述:
输出逗号分隔的一行数字，为合并后的有序链表。

输入样例:
1,3,5 2,4,6

输出样例:
1,2,3,4,5,6

你的答案: 未作答
官方解析:
```java
import java.io.*;
import java.util.*;
public class Main {
public static void main(String args[]) {
Scanner sc = new Scanner(System.in);
String l1 = sc.nextLine();
String[] list1 = l1.split(",");
ListNode listNode1 = makeNodeList(list1);
String l2 = sc.nextLine();
String[] list2 = l2.split(",");
ListNode listNode2 = makeNodeList(list2);
Main solution = new Main();
ListNode rsListNode = solution.mergeTwoLists(listNode1, listNode2);
String res = "";
while (rsListNode != null) {
res = res + rsListNode.val;
if(rsListNode.next != null){
res = res + ',';
}
rsListNode = rsListNode.next;
}
System.out.println(res);
}
private static ListNode makeNodeList(String[] listStrings) {
if (listStrings == null || listStrings.length == 0) {
return null;
}
ListNode dummy = new ListNode();
ListNode head = dummy;
for (String nodeString : listStrings) {
ListNode node = new ListNode(Integer.valueOf(nodeString));
dummy.next = node;
dummy = dummy.next;
}
return head.next;
}
public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
if (l1 == null) return l2;
if (l2 == null) return l1;
ListNode head = new ListNode(0);
ListNode temp = head;
while(l1 != null && l2 != null) {
if (l1.val <= l2.val) {
temp.next = l1;
l1 = l1.next;
} else {
temp.next = l2;
l2 = l2.next;
}
temp = temp.next;
}
if (l1 == null) {
temp.next = l2;
} else {
temp.next = l1;
}
return head.next;
}
}
class ListNode {
int val;
ListNode next;
ListNode() {}
ListNode(int val) { this.val = val; }
ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
```

题友讨论: (0)
问答题

17. 【给出一个字符串s（仅含有小写英文字母和括号）】
问题描述:
给出一个字符串s（仅含有小写英文字母和括号）。
请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。
注意，您的结果中不应包含任何括号。
例如
输入 s = "(abcd)",输出："dcba"
输入：s = "(a(bc)d)",输出："dbca"

输入描述:
输入一行，一个字符串

输出描述:
输出一行，最终匹配的字符串结果

输入样例:
(abcd)

输出样例:
dcba
你的答案: 未作答
官方解析:
```javascript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
var reverseParentheses = function(s) {
const stk = [];
let str = '';
for (const ch of s) {
if (ch === '(') {
stk.push(str);
str = '';
} else if (ch === ')') {
str = str.split("").reverse().join("");
str = stk[stk.length - 1] + str;
stk.pop();
} else {
str += ch;
}
}
return str;
};
var line = read_line()
print(reverseParentheses(line))
```
