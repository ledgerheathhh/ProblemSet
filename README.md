# 🧠 Brain-Dump

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Language](https://img.shields.io/badge/Language-TypeScript%20%7C%20Markdown-blue)](#)

*Choose Language: [English](#english-version) | [中文版](#中文版)*

---

<h2 id="english-version">🇬🇧 English Version</h2>

A personal repository serving as my "Second Brain", storing my learning materials, notes, and code snippets. 

Currently, it mainly focuses on **LeetCode algorithmic solutions** (implemented in TypeScript) and **iOS development notes**, and it will continuously expand as my learning journey goes on.

### ✨ Features

*   **LeetCode Solutions**: Neatly categorized by difficulty (Easy, Medium, Hard, Uncategorized). Each file includes difficulty annotations at the top.
*   **iOS Learning Notes**: Contains study materials, documentations, and code examples related to iOS development.
*   **Continuous Growth**: A centralized hub for all my future tech notes, project snippets, and daily learnings.

### 📂 Directory Structure

The current structure of the repository:

```text
.
├── LeetCode/                  # LeetCode solutions (TypeScript)
│   ├── Easy/                  # "Easy" difficulty solutions
│   │   └── LCxxx.ts
│   ├── Medium/                # "Medium" difficulty solutions
│   ├── Hard/                  # "Hard" difficulty solutions
│   └── Uncategorized/         # Uncategorized solutions
├── iOS/                       # iOS development notes and examples
│   └── xiaomi2024.md          # e.g., Notes related to Xiaomi 2024
├── README.md                  # This documentation
└── LICENSE                    # Project License
```

### 🚀 How to Use

#### LeetCode Solutions

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/ledgerheathhh/Brain-Dump.git
    cd Brain-Dump
    ```
2.  **Run or test the code**:
    Since the solutions are in TypeScript, you need to install Node.js and TypeScript.
    ```bash
    # Install TypeScript and ts-node globally
    npm install -g typescript ts-node

    # Run a specific solution (e.g., LeetCode 997)
    ts-node LeetCode/Easy/LC997.ts
    ```

#### iOS Notes

Navigate to the `iOS/` directory and open the `.md` files with any Markdown reader (like Typora, VS Code, or directly on GitHub).

### 💡 Code Example

Here is an example structure of a LeetCode solution file:

```typescript
// LeetCode 997. Find the Town Judge
// Easy

function findJudge(n: number, trust: number[][]): number {
    // Solution code here
    return -1;
};
```

### 🤝 Contribution & 📞 Contact

-   Feel free to fork this repository, create a branch, and submit a Pull Request if you have any improvements!
-   **License**: MIT License - see the [LICENSE](LICENSE) file for details.
-   **Contact**: If you have any questions or suggestions, please contact me at[laored@outlook.com](mailto:laored@outlook.com).

---

<h2 id="中文版">🇨🇳 中文版</h2>

这是我的个人“第二大脑”知识库，用于存放我所有的学习资料、笔记和代码片段。

目前主要包含 **LeetCode 算法题解**（使用 TypeScript 实现）以及 **iOS 开发学习笔记**。随着学习的深入，这里将不断扩充更多技术领域的知识沉淀。

### ✨ 特性

*   **LeetCode 解决方案**：按难度（简单、中等、困难、未分类）清晰分类，每个解决方案文件顶部包含难度注释。
*   **iOS 学习笔记**：包含 iOS 开发相关的学习资料、踩坑记录和代码示例。
*   **持续生长**：告别碎片化，作为我未来所有技术笔记、练手代码的统一存放地。

### 📂 文件结构

本仓库目前的组织结构如下：

```text
.
├── LeetCode/                  # LeetCode 算法题解目录 (TypeScript)
│   ├── Easy/                  # 存放难度为“简单”的解决方案
│   │   └── LCxxx.ts
│   ├── Medium/                # 存放难度为“中等”的解决方案
│   ├── Hard/                  # 存放难度为“困难”的解决方案
│   └── Uncategorized/         # 存放未分类或无明确难度的解决方案
├── iOS/                       # 存放 iOS 开发相关的学习笔记、文档
│   └── xiaomi2024.md          # 例如：小米2024年相关学习笔记
├── README.md                  # 本说明文件
└── LICENSE                    # 项目许可证文件
```

### 🚀 如何使用

#### LeetCode 解决方案

1.  **克隆仓库**：
    ```bash
    git clone https://github.com/ledgerheathhh/Brain-Dump.git
    cd Brain-Dump
    ```
2.  **运行或测试代码**：
    由于题解为 TypeScript 文件，您需要配置 Node.js 和 TypeScript 环境。
    ```bash
    # 全局安装 TypeScript 和 ts-node
    npm install -g typescript ts-node

    # 运行指定的解决方案 (例如 LeetCode 997题)
    ts-node LeetCode/Easy/LC997.ts
    ```

#### iOS 学习笔记

直接进入 `iOS/` 目录浏览相关文档。您可以使用任何 Markdown 阅读器（如 Typora, VS Code）或直接在 GitHub 网页端阅读。

### 💡 代码示例

以下是一个“简单”难度 LeetCode 问题的示例文件结构和内容：

```typescript
// LeetCode 997. 找到小镇的法官
// 简单

function findJudge(n: number, trust: number[][]): number {
    // 解决方案代码
    return -1;
};
```

### 🤝 贡献与 📞 联系

-   欢迎 Fork 本仓库提交 PR，对现有代码或笔记进行改进！
-   **许可证**：本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。
-   **联系我**：如果您有任何问题或交流建议，欢迎通过 [laored@outlook.com](mailto:laored@outlook.com) 与我联系。