---
title: 前端运行 Kociemba 算法
---

## 使用 Emscripten 将 C 语言编译成 JS 代码

### 安装 Emscripten (Mac)

#### 1. 克隆官方仓库

```shell
git clone https://github.com/emscripten-core/emsdk.git 
```

#### 2. 安装

```shell
cd emsdk
./emsdk install latest # 这里会下载nodejs、python3等一系列依赖
./emsdk activate latest # 激活
source ./emsdk_env.sh # 激活环境变量，可以写到zshrc里
```

![image-20211209211227130](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20211209211227130.png)
