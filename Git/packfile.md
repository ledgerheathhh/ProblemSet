# Git Packfile 机制详解
如果一个仓库有 **几十万次提交、上百万文件**，按照前面的方式存储会产生：

```text
.git/objects/
    30万个文件
```

这会导致 **文件系统性能严重下降**。
为了解决这个问题，Git 引入了 **Packfile 机制**。

---

# 一、什么是 Packfile

Packfile 是 Git 的 **对象打包压缩格式**。

它会把大量对象：

```
blob
tree
commit
tag
```

打包成 **一个 pack 文件**。

目录结构：

```text
.git/objects/
    pack/
        pack-xxxx.pack
        pack-xxxx.idx
```

说明：

| 文件      | 作用          |
| ------- | ----------- |
| `.pack` | 存储真实对象数据    |
| `.idx`  | 索引文件，快速查找对象 |

---

# 二、Packfile 解决了什么问题

如果不用 pack：

```
100万 objects
100万个小文件
```

使用 pack：

```
1 个 pack 文件
1 个 index 文件
```

好处：

1️⃣ 减少文件数量
2️⃣ 更好的压缩率
3️⃣ 更快的网络传输
4️⃣ 更快的对象查找

---

# 三、Packfile 的核心优化：Delta Compression

Git 的 **最大优化点** 是 **增量压缩（delta compression）**。

例如两个文件：

```
version1
Hello Git World
```

```
version2
Hello Git World!!!
```

如果存两个 blob：

```
blob1 -> Hello Git World
blob2 -> Hello Git World!!!
```

但 Packfile 会变成：

```
blob1 -> Hello Git World
delta -> +!!!
```

也就是：

```
新对象 = 旧对象 + 差异
```

示意图：

```
blob A
  │
  ▼
delta B
```

恢复过程：

```
A + delta = B
```

---

# 四、Packfile 内部结构

Packfile 文件结构：

```
+-------------------+
| Header            |
+-------------------+
| Object1           |
| Object2           |
| Object3 (delta)   |
| Object4           |
+-------------------+
| Checksum          |
+-------------------+
```

Header：

```
PACK
version
object_count
```

示例：

```
PACK
version 2
objects 1052
```

---

# 五、对象在 Packfile 中的类型

Packfile 中对象类型：

| 类型        | 含义           |
| --------- | ------------ |
| commit    | commit对象     |
| tree      | tree对象       |
| blob      | blob对象       |
| tag       | tag对象        |
| OFS_DELTA | 基于偏移的delta   |
| REF_DELTA | 基于hash的delta |

其中最关键的是：

```
OFS_DELTA
REF_DELTA
```

表示 **增量对象**。

---

# 六、Packfile 查找对象流程

当 Git 需要读取某个对象：

```
git checkout
git log
git show
```

Git查找流程：

```
1 查询 pack.idx
2 定位 pack 偏移
3 读取对象
4 如果是 delta → 递归还原
```

流程图：

```
对象hash
   │
   ▼
pack.idx
   │
   ▼
pack.pack
   │
   ▼
读取对象
   │
   ▼
delta还原
```

---

# 七、Packfile 什么时候生成

Packfile 常见生成场景：

### 1 `git gc`

```
git gc
```

作用：

```
垃圾回收
对象压缩
生成pack
```

---

### 2 `git clone`

clone 时服务器会生成 pack：

```
Server
   │
   ▼
生成 pack
   │
   ▼
传输
   │
   ▼
Client
```

---

### 3 `git fetch`

fetch 时也是传输 pack。

---

# 八、为什么 Git clone 很快

Git clone 并不是传输所有文件版本。

而是：

```
服务器生成 pack
传输 pack
客户端解包
```

示意：

```
Repository
 100000 objects
      │
      ▼
Packfile
 20MB
      │
      ▼
网络传输
```

因此 Git 在 **大仓库依然很快**。

---

# 九、Loose Object vs Packfile

Git对象有两种形式：

| 类型            | 位置                         |
| ------------- | -------------------------- |
| Loose Object  | `.git/objects/xx/xxxx`     |
| Packed Object | `.git/objects/pack/*.pack` |

开发过程中：

```
git add
git commit
```

产生的是：

```
Loose Object
```

运行：

```
git gc
```

会变成：

```
Packfile
```

流程：

```
Loose Objects
      │
      ▼
git gc
      │
      ▼
Packfile
```

---

# 十、Git对象系统完整结构

最终 Git 的对象模型可以总结为：

```
        tag
         │
         ▼
       commit
         │
         ▼
        tree
      /      \
   blob      tree
              │
             blob
```

存储方式：

```
objects
   ├── loose objects
   └── packfile
```

---

# 十一、一句话总结 Git 底层

Git 的本质可以理解为：

```
内容寻址数据库
        +
增量压缩存储
```

结构：

```
blob   -> 文件内容
tree   -> 目录
commit -> 快照
tag    -> 标签
pack   -> 压缩存储
```

