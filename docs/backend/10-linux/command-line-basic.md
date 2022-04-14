---
title: 命令行基础
tags:
- Linux
- Command Line
---

# ![cl](https://zhuye-1308301598.file.myqcloud.com/icons/iterm.png) 命令行基础

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586441776796-1a3aa8a0-6863-44a0-85f8-1e4d509b5882.png)


## 查（查看文件和目录）

首先安装tree，方便查看目录**树形结构**

可以使用`brew install tree`安装或[使用alias在./zshrc中自定义](https://yijiebuyi.com/blog/c0defa3a47d16e675d58195adc35514b.html)

使用`tree`命令查看一下当前目录树形结构：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586245211659-62a8cd1c-69db-4e80-978c-faf3f4551846.png)



| 命令          | 全称                                    | 示例                                           | 干嘛的                                                       | 运行截图                                                     |
| ------------- | --------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **cd**        | **c**hange **d**irectory                | `cd playground`                                | 进入某目录                                                   | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586243348624-1e45405f-2063-4346-8e49-395a6437940d.png) |
| **pwd**       | **p**rint **w**orking **d**irectory     | `pwd`                                          | 以绝对路径的方式显示用户当前工作目录                         | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586243414343-7aecc5fb-a7c6-4860-b66e-57706ce31d9e.png) |
| **ls**        | **l**i**s**t                            | `ls`                                           | 查看当前目录文件                                             | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586243658994-d237f223-d018-47cd-b448-07dd222d8f18.png) |
| **ls [路径]** | **l**i**s**t [路径]                     | `ls aaa`                                       | 查看指定路径文件内容                                         | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586243752356-5bb1f6ca-f091-46f0-9136-437b050249cd.png) |
| **cat**       | **c**oncatenate **a**nd prin**t** files | `cat example.txt`                              | 连接文件并打印到标准输出设备上                               | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586243860142-30d9c982-1909-460c-8cf2-1eae3b425e67.png) |
| **head**      | print HEAD                              | `head -n 2 example.txt``head -c 2 example.txt` | 显示文件开头2行的内容（默认10行）显示文件开头2个字符的内容， | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586243991775-50b55df2-6a77-42bd-b99b-1a38faeaaa5c.png) |
| **tail**      | print TAIL                              | `tail -n 2 Lyrics.txt``tail -n 2 Lyrics.txt`   | 显示文件末尾2行的内容（默认10行）显示文件末尾2个字符串的内容 | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586244052345-511afe0e-a822-4c2d-b34a-ec8b5599ce1f.png) |
| **less**      | print LESS                              | `less Lyrics.txt`                              | 浏览文字档案的内容，分页显示（Ctrl+F向下翻页，Ctrl+B向上翻页，按Q退出） | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586244167029-be0a63ca-4252-46bb-8c87-d4bb858ab62a.png)![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586244159205-84539629-6cb1-411b-bf0e-8d1a23023f57.png) |



## 增（创建文件或目录）

| 命令                                | 干嘛的                            | 示例                        | 运行截图                                                     |
| ----------------------------------- | --------------------------------- | --------------------------- | ------------------------------------------------------------ |
| **touch** [文件名]                  | 创建文件                          | `touch test.txt`            | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586245468070-94ea69aa-c2d2-4d9a-bcff-6c6c1fe38b9d.png) |
| **touch** [文件名] [文件名]         | 同时创建多个文件                  | `touch 1.txt 2.txt`         | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586245478088-156b709f-4ab1-4826-96ff-4f81ee304aba.png) |
| **echo** [字符串]                   | 将指定字符串或变量输出在终端中    | `echo hi`                   | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586245519051-e3a4f26e-a893-49ad-9def-7497eafd0fce.png) |
| **echo** [字符串] > [文件名]        | 将指定字符串输出到文件中          | `echo hi > 1.txt`           | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586245575022-3dc1f49c-dcd5-4c22-be68-6ce8cf3d36df.png) |
| **echo** [字符串] >> [文件名]       | 将指定字符串追加到文件中          | `echo 你好 >> 1.txt`        | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586245620608-c8feea02-d3a9-4d0f-ac79-443b626f1a3f.png) |
| **echo** **-e** [字符串]            | 激活转义字符                      | `echo -e "\a"` (输出警告音) | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586245752425-9d1bf677-adc7-47b3-baf2-2a53559a0f25.png) |
| **mkdir** [目录名]                  | 创建一个目录                      | `mkdir ccc`                 | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586245788111-24aac544-cf39-4218-a131-8eb34417af1d.png) |
| **mkdir****-p** [目录名/目录名/···] | 创建多层目录                      | `mkdir -p ddd/test`         | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586245841373-82de63c5-3c92-41a3-aab4-8f693972cbcf.png) |
| **mkdir** [目录名] [目录名]         | 同时创建多个目录                  | `mkdir eee fff`             | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586245876441-165be9ec-cf91-4cd2-b5ea-b9fa346b4d8d.png) |
| **cp****-r** [文件1] [新文件名]     | 为文件1创建副本，并取名为新文件名 | `cp -r a b`                 | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586246047544-901f9f45-6c0f-40db-828b-25cab3ad8468.png) |



## 删（删除文件和目录）

| 命令                    | 干嘛的         | 示例             | 运行截图                                                     |
| ----------------------- | -------------- | ---------------- | ------------------------------------------------------------ |
| **rm** [文件名]         | 删除文件       | `rm example.txt` | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586246220350-8dbc8b0a-e584-404f-b7d7-bcc9411cb809.png) |
| **rm** **-r** [目录]    | 删除目录       | `rm -r a`        | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586246285624-d27d7e61-32db-481b-aaaf-37caa7319cb1.png) |
| **rm** **-rf** [文件名] | 啥也不管就是删 | `rm -rf a`       | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586246332016-9e60c3ea-d6d5-499b-9947-bfd0eec3220d.png) |



避免**误删**：**用户目录（~）**中随便玩，进入命令行第一件事：`cd ~`



## 改（修改文件或文件名）

| 命令                         | 干嘛的                   | 示例                           | 运行截图                                                     |
| ---------------------------- | ------------------------ | ------------------------------ | ------------------------------------------------------------ |
| **code** [文件名]            | 使用VSCode打开并进行修改 | `code example.txt`             | -                                                            |
| **open** [文件名]            | 使用默认程序打开         | `open example.txt`             | -                                                            |
| **mv** [文件] [目录]         | 移动文件                 | `mv aaa/test.txt ./ccc`        | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586246671907-a3069ddb-3fae-4830-82fc-f5e701946c00.png) |
| **mv** [老文件名] [新文件名] | 重命名文件名             | `mv test.txt test_newname.txt` | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586246793975-e7ba6518-ec25-43ad-8753-73860ae35898.png) |
| **touch** [文件名]           | 修改最后操作时间         | `touch test.txt`               | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586246924246-0b38d280-267a-467d-b524-fd528e09e030.png) |

------

## 查看命令手册



- 🔲`man 命令`（难用）
- ✅`tldr 命令`（🐂🍺）



| 举例        | 运行截图                                                     |
| ----------- | ------------------------------------------------------------ |
| `tldr tldr` | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586247258643-b6db3720-7f33-4cb2-b8fe-ae4f95668141.png) |



------

## 使用脚本文件

### 查看上一条命令是否顺利执行

如果On-my-zsh设置好的话，直接看前面的`λ`是红还是绿就知道了。



| 命令      | 运行截图                                                     |
| --------- | ------------------------------------------------------------ |
| `echo $?` | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586247305819-a599e4db-b373-4a00-90cb-582496b6ca78.png) |



- 返回值为0，执行成功
- 返回值为非0，执行失败



### 把命令变成脚本文件



```shell
$ touch temp        # 新建脚本
$ code temp         # 使用VSCode打开脚本并进行编辑
$ chmod +x ./temp   # 添加权限
$ ./temp            # 执行
```



如果该执行脚本文件的路径加入了PATH（~/.zshrc），则可用文件名直接执行

关于将脚本路径加入PATH，详见[Mac添加PATH](https://www.yuque.com/gangafengliu/frontend-rookie/install-software-on-mac#XcKhl)