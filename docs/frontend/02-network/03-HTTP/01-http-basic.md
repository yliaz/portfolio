---
title: HTTP 协议基础
---

# ![http](https://zhuye-1308301598.file.myqcloud.com/icons/http(2).png) HTTP 协议基础

这一部分基本上是[《图解HTTP》](https://www.itpanda.net/book/2)这本书第二章的笔记，获取更多信息可以查看[原书](https://book.douban.com/subject/25863515//)，建议支持[正版](https://item.jd.com/11449491.html)。

## 客户端和服务器

- **HTTP协议**用于**客户端**和**服务器**之间的通信。
- **客户端**：**请求**资源。
- **服务器**：提供资源**响应**。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583901565263-e89d884a-f766-419c-87d0-cce814c9e43b.png)

使用HTTP协议进行通信时，一条通信线路上必定有一端是客户端，另一端是服务器端（角色是确定的）



## 请求和响应

- **请求**必定由**客户端**发出，而**服务器**回复**响应**。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583901900858-de943b0c-cb49-45ce-b051-1b0c16b21c55.png)

通信的建立一定是从客户端开始的，服务器在没有接收到请求之前不会发送响应。



## HTTP是不保存状态的协议

- HTTP协议自身不对请求和响应之间的通信状态进行保存。
- 每当有新的请求发送时，就会产生新的响应

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583902281706-878430e0-9c2c-428b-8f8e-3f1945f84380.png)

HTTP/1.1 虽然是无状态（stateless）协议，但是为了实现期望的保存状态的功能，于是引入了**cookie**技术。



## 请求报文与响应报文

- 我们来看一个请求报文和响应报文的示例

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583903973957-f11b8796-e6f3-47ab-ba19-12779385f886.png)

### 请求报文

- **方法**（method）：请求访问服务器的类型。
- [**请求URL**](#hbGvw)：请求访问的资源对象。

- **协议版本**：提示协议版本号。
- **请求首部字段**

- **内容实体**

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583904160399-c1315e3f-980a-4fdd-917e-f419c6a07b6e.png)

### 响应报文

- **协议版本**：服务器对应的HTTP版本。
- **状态码**（status code）：处理结果的状态码，表示请求成功或失败等等的数字代码。

- **状态码原因短语**（reason-phrase）：处理结果的原因短语，用于解释状态码。
- **响应首部字段**

- **主体**

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583904316824-0158d95f-fc26-4072-94f3-b465ea0d5d53.png)

## 请求URL

### 作用

- HTTP协议使用URL定位资源

关于URI和URL的区别参见[What's the difference between a URI and a URL?](https://danielmiessler.com/study/difference-between-uri-url/)

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583904884139-200eec48-c549-4b93-8b8c-68210c690a13.png)

### 指定URL的方式

- 这里以 http://hackr.jp/index.html 为例
- 第一种： GET http://hackr.jp/index.html HTTP/1.1 （URL为完整的请求URL）

- 第二种： GET /index.htm HTTP/1.1 

   Host: hackr.jp （在首部写明网络域名或IP地址）

- 如果不是对特定资源而是**服务器本身**发起请求，可以用`*`代替请求URL，例如： OPTIONS * HTTP/1.1 



## HTTP方法

### GET（获取资源）

- **GET** 方法用来**请求资源**，指定的资源经过服务器解析后**返回响应内容**。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583905798916-d1cf0dd8-abe0-4c3a-a580-50acbc5fd65d.png)

- 举个例子 🌰

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583906169080-64df1f0a-f091-4947-9ecd-ea2cac38b3ee.png)

### POST（传输实体主体）

- **POST** 方法用来**传输实体的主体**。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583906279473-9e7f2284-f6ac-4c6c-a605-2a4b59bd66a4.png)

- 举个例子 🌰

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583906327218-6812614f-728b-460b-a396-fdbff267c535.png)



### PUT（传输文件）

- **PUT** 方法用来**传输文件**。
- 在请求报文主体中包含文件内容，保存到请求URL指定的位置。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583906589550-e2fe48f5-1195-429e-81ac-2707bd185caa.png)

PUT方法不带验证机制，任何人都可以上传文件，存在安全性问题，一般Web网站不使用该方法。

- 举个例子 🌰

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583906642622-843e1da9-6580-483a-815c-c5265669a392.png)



### HEAD（获得报文首部）

- **HEAD** 方法与GET方法一样，只是**不返回报文主体部分**。
- 用于**确认URL的有效性**及**资源更新的日期时间**等。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583906793222-f7689fb8-e883-40c6-bf28-3e3538913b9e.png)

- 举个例子 🌰

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583906832173-8723a8f5-7abb-408f-8943-bd475128953a.png)



### DELETE（删除文件）

- **DELETE** 方法用来**删除文件**，是与PUT相反的方法。
- DELETE 方法按照请求URL删除指定的资源。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583907086700-c5d3a3bd-8734-4ad2-8274-1913f0171b1a.png)

与PUT一样不带验证机制，一般Web网站不使用。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583907117448-049d698d-c79c-4477-a221-05e0596b5af4.png)



### OPTIONS（询问支持的方法）

- **OPTIONS** 方法用来查询针对请求URL指定的资源支持的方法。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583907242439-79f7a1be-1f2d-499b-8cad-8fc14957989d.png)

- 举个例子 🌰

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583907400255-9d5ecb60-70fa-41de-bc5f-8937e88419eb.png)



### TRACE （追踪路径）

- TRACE 方法用于发起**回环****诊断**。
- 客户端发起一个请求时，这个请求可能要穿过防火墙、代理、网关或其他一些应用程序。每个中间节点都可能会**修改**原始的 HTTP 请求。

- TRACE 请求会在目的服务器端发起一个**环回诊断**。行程最后一站的服务器会**弹回一条 TRACE 响应**，并在响应主体中**携带**它收到的**原始请求报文**。这样客户端就可以查看在所有中间 HTTP 应用程序组成的请求 / 响应链上，**原始报文是否、以及如何被毁坏或修改过**。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583909152332-d4974ae7-4f9c-43b4-9c82-55d7a60fe807.png)

不太常用，且容易引发XST（跨站追踪）攻击。

- 举个例子 🌰

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583909302807-8ae76a19-2226-4a5e-b0eb-d627fde6e816.png)

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583909303486-8394055e-1556-4a9f-bc88-3796b0fac40f.png)



### CONNECT（要求用隧道协议连接代理）

- CONNECT 方法要求在与代理服务器通信时建立隧道，实现用隧道协议进行TCP通信。
- 主要使用SSL和TLS协议把通讯内容加密后经网络隧道传输。

- 格式：`CONNECT 代理服务器名: 端口号 HTTP版本`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583909599381-d3bec919-a155-483f-9a52-871c324c7899.png)



- 举个例子 🌰

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583909776198-5642b433-5656-4422-ad16-2921a1e14856.png)

### 使用方法下达命令

- 方法的作用：指定请求的资源按期望产生某种行为。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583909953612-7b583483-c7f4-4d6e-bb95-3f9984c94cc9.png)

方法名区分大小写，注意要使用大写字母。



## 持久连接节省通信量

### 早期的HTTP通信

- 在HTTP协议的**初始版本**中，每进行一次HTTP通信就要断开一次TCP连接。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583910440914-be364d98-e0b7-4ad4-8b1f-45dc2df82aac.png)

- 以当年情况来看无可厚非，但随着HTTP的普及，请求一个包含多个资源（例如图片）的HTML界面时，每次请求都会造成**无谓的TCP连接建立和断开**，影响通信量的开销。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583910763475-14825855-a24d-4e81-a9a3-1db2f7465f6a.png)



### 持久连接

- **持久连接**（HTTP Persistent Connections）**特点**是：只要任意一端没有明确提出断开连接，则**保持TCP连接状态**。
- 持久连接的**好处**在于：减少了TCP连接的重复建立和断开所造成的额外开销，减轻了服务器端负载。

- 在HTTP/1.1 中，所有的连接默认都是持久连接。



### 管线化

- 从前：发送请求后必须等待并收到响应后，才能发送下一个请求。
- **管线化**技术出现后：不必等待响应，可直接发送下一个请求。

- 这样可以做到，**并行发送**多个请求。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583910927151-9e6e55b9-7e9f-4d9a-9805-ddf691f4edcc.png)



## 使用cookie的状态管理

### HTTP是无状态协议

- HTTP协议不对发生过的请求和响应的状态进行管理。
- 这样可以减少服务器的CPU及内存资源的消耗。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583911261118-c950026f-e963-4f31-a086-e3222701cba0.png)



- 在要求登录的Web页面，如果不记录已登录的状态，每次跳转不是再次登录就是要在请求报文中附加参数来管理登录状态。



### 引入cookie技术

- cookie技术通过在请求和响应报文中写入cookie信息来控制客户端的状态。
- 第一次：客户端发出请求 **-->** 服务器**生成cookie**，在响应中**添加cookie** **-->** 客户端**收到cookie并保存**。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583911744577-1484b169-32a3-4661-bd74-8d1fe8c0eb80.png)

- 第二次之后：客户端**添加cookie**后发出请求 --> 服务器**检查cookie**并响应

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583911789613-4ddd8f4a-1b29-4ba5-a749-ac28043bb080.png)



参考资料：

[常见的HTTP Method 深度解析 - Pines_Cheng](https://segmentfault.com/a/1190000013182974)