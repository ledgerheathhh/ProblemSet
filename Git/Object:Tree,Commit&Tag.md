# 一、Git对象模型整体结构

Git 的所有数据都存储在 `.git/objects` 中，本质上是一个 **内容寻址的对象数据库**。
每个对象都通过 **SHA-1 / SHA-256 哈希** 唯一标识。

整体结构如下：

```
        tag
         │
         ▼
      commit
         │
         ▼
       tree
     ┌───┴─────┐
     ▼         ▼
   blob      tree
 (file)   (sub directory)
```

理解顺序可以按 **文件 → 目录 → 提交 → 标签** 来看。

---

# 二、Tree 对象（目录结构）

**tree 对象表示一个目录。**

它记录了：

* 文件名
* 文件类型
* 指向的对象（blob 或 tree）
* 权限

示例结构：

```
tree
├── README.md  -> blob a1b2c3
├── main.m     -> blob d4e5f6
└── src        -> tree 9a8b7c
```

解释：

* **blob**：存储文件内容
* **tree**：存储目录

如果用类比理解：

```
blob = 文件内容
tree = 文件夹
```

Git 的目录实际上是 **tree 指向 blob / tree** 形成的递归结构。

### Tree对象结构示意

```
Tree Object
+-----------------------------+
| mode | name | object hash   |
+-----------------------------+
|100644|a.txt | blob-hash     |
|100644|b.txt | blob-hash     |
|040000|src   | tree-hash     |
+-----------------------------+
```

---

# 三、Commit 对象（提交）

**commit 表示一次版本快照。**

commit 并不存储文件，而是：

1. 指向一个 **tree**
2. 指向 **父 commit**
3. 记录作者信息
4. 记录提交信息

结构示意：

```
commit
│
├── tree 9fceb02
├── parent 3e1f0a2
├── author Alice
├── committer Alice
└── message "Fix bug"
```

### Commit关系图

```
commit A
   │
   ▼
commit B
   │
   ▼
commit C
```

如果是分支合并：

```
      commit B
       │
       ▼
commit A ───► commit D
       ▲
       │
   commit C
```

commit 本质上形成了一条 **有向无环图（DAG）**。

---

# 四、Tag 对象（标签）

**tag 是给某个 commit 起一个名字。**

通常用于：

* 发布版本
* 标记重要节点

例如：

```
v1.0  -> commit a8f5f1
v1.1  -> commit b6c2e9
```

结构：

```
tag
├── object <commit hash>
├── type commit
├── tag v1.0
├── tagger Alice
└── message "Release version 1.0"
```

### Tag指向关系

```
tag v1.0
   │
   ▼
commit
   │
   ▼
tree
   │
   ├── blob
   └── tree
```

---

# 五、一次提交在Git中的完整流程

当执行：

```
git add .
git commit -m "init"
```

Git内部流程如下：

```
1. 读取文件内容
      │
      ▼
2. 生成 blob 对象
      │
      ▼
3. 构建 tree 对象（目录结构）
      │
      ▼
4. 创建 commit 对象
      │
      ▼
5. 分支指向新的 commit
```

流程图：

```
Working Directory
        │
        ▼
      blob
   (file content)
        │
        ▼
      tree
   (directory)
        │
        ▼
     commit
   (snapshot)
        │
        ▼
      branch
   (pointer)
```

---

# 六、真实例子

假设仓库有：

```
project
├── README.md
└── main.m
```

Git对象关系：

```
commit 1
   │
   ▼
tree A
├── README.md -> blob A
└── main.m    -> blob B
```

如果修改 `main.m`：

```
commit 2
   │
   ▼
tree B
├── README.md -> blob A
└── main.m    -> blob C
```

注意：

* `README.md` 没变，所以 **blob A 被复用**
* 只有 **main.m 生成新 blob**

这就是 Git **高效存储的核心原因**。

---

# 七、四种对象关系总结

| 对象     | 作用   | 指向                   |
| ------ | ---- | -------------------- |
| blob   | 文件内容 | 无                    |
| tree   | 目录   | blob / tree          |
| commit | 一次提交 | tree + parent commit |
| tag    | 标签   | commit               |

最终关系：

```
tag
 │
 ▼
commit
 │
 ▼
tree
 ├── blob
 └── tree
```

---

# 八、一句话理解 Git 对象模型

可以用一句话概括：

**Git = 内容(blob) + 目录(tree) + 版本(commit) + 标签(tag)**

或者更形象一点：

```
文件内容 -> blob
文件夹   -> tree
一次提交 -> commit
版本名称 -> tag
```
