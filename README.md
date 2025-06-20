# ProblemSet

一个用于存放 LeetCode 算法问题解决方案（主要使用 TypeScript 实现）和 iOS 开发学习笔记的个人代码仓库。

## ✨ 特性

*   **LeetCode 解决方案**：按难度（简单、中等、困难、未分类）清晰分类，每个解决方案文件顶部包含难度注释。
*   **iOS 学习笔记**：包含 iOS 开发相关的学习资料和代码示例。

## 📂 文件结构

本仓库的组织结构如下：

```
.
├── LeetCode/
│   ├── Easy/                  # 存放难度为“简单”的 LeetCode 问题解决方案
│   │   └── LCxxx.ts
│   ├── Medium/                # 存放难度为“中等”的 LeetCode 问题解决方案
│   │   └── LCxxx.ts
│   ├── Hard/                  # 存放难度为“困难”的 LeetCode 问题解决方案
│   │   └── LCxxx.ts
│   └── Uncategorized/         # 存放未能识别难度或没有明确难度注释的 LeetCode 问题解决方案
│       └── LCxxx.ts
├── iOS/                       # 存放 iOS 开发相关的学习笔记、文档和代码示例
│   └── xiaomi2024.md          # 例如：小米2024年相关学习笔记
├── README.md                  # 本说明文件
└── LICENSE                    # 项目许可证文件
```

## 🚀 如何使用

### LeetCode 解决方案

1.  **克隆仓库**：
    ```bash
    git clone https://github.com/你的用户名/ProblemSet.git
    cd ProblemSet
    ```
2.  **浏览解决方案**：
    进入 `LeetCode/` 目录，根据难度选择您感兴趣的问题。例如：
    ```bash
    cd LeetCode/Easy
    ```
3.  **运行或测试代码**：
    由于这些是 TypeScript 文件，您可能需要安装 Node.js 和 TypeScript。
    ```bash
    # 安装 Node.js (如果尚未安装)
    # 访问 https://nodejs.org/ 下载并安装

    # 安装 TypeScript 和 ts-node (如果尚未安装)
    npm install -g typescript ts-node

    # 运行一个解决方案 (例如 LeetCode/Easy/LC997.ts)
    ts-node LeetCode/Easy/LC997.ts
    ```

### iOS 学习笔记

进入 `iOS/` 目录浏览相关文档和代码示例。例如：
```bash
cd iOS
# 您可以使用任何 Markdown 阅读器打开 .md 文件
```

## 💡 代码示例

以下是一个“简单”难度 LeetCode 问题的示例文件结构和内容：

```typescript
// LeetCode 997. 找到小镇的法官
// 简单

function findJudge(n: number, trust: number[][]): number {
    // 解决方案代码
    return -1;
};
```

## 🤝 贡献

欢迎提交新的 LeetCode 问题解决方案或对现有代码、iOS 笔记进行改进！请遵循以下步骤：

1.  Fork 本仓库。
2.  创建您的功能分支 (`git checkout -b feature/YourFeatureName`)。
3.  提交您的更改 (`git commit -m 'Add your commit message'`)。
4.  推送到分支 (`git push origin feature/YourFeatureName`)。
5.  打开一个 Pull Request。

## 📄 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。

## 📞 联系

如果您有任何问题或建议，欢迎通过 [laored@outlook.com](laored@outlook.com) 与我联系。

---
