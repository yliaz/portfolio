---
title: 购买并配置服务器
---



## 购买服务器

有了域名之后，我们还需要购买一台服务器来提供服务。

由于我选择的域名是 `.dev` 域名，国内无法备案，为了防止网站因没有备案被封，我只能购买香港的服务器。

看了下价格之后，我最终选择了腾讯云双十一新用户优惠版的香港服务器，1年价格大概是 ¥370，平均下来一天只要 ¥1 ，基本等于“不要钱”。

购买的过程这里就跳过了，只要看准优惠活动，选择适合自己需求的就可以，如果是可以备案的域名，选国内的服务器再好不过了。

支付成功后，就可以进入控制台查看服务器是否在运行了。

![image-20211114211528954](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20211114211528954.png)



## 配置 root 用户

先用站内信收到的密码登陆服务器，由于我选择的是 ubuntu 系统，登陆后默认是 ubuntu 这个用户。

```shell
ssh ubuntu@xxx.xxx.xxx.xxx # 服务器的公网 IP
# 输入密码后按回车
sudo passwd root
# 输入 root 用户的密码，需要输两次
sudo vi /etc/ssh/sshd_config
# 找到PermitRootLogin，将它后面改为yes，保存（esc + :wq）
# 重启 ssh 服务
sudo service ssh restart
```

## 配置 ssh 免密登陆和快速登录

### 生成 ssh-key

> 如果有了则不需要重新生成

```shell
ssh-keygen -p -f ~/.ssh/id_rsa -m pem
 3228  cd ~/.ssh
 3229  ls
```



将你本地的 `~/.ssh/id_rsa.pub` 的内容粘贴到服务器上 `~/.ssh/`



### 免密登录：authorized_keys







### 快速登录：ssh-config









## 修改域名的DNS解析服务器





### 测试

```
ping zhuye.dev
```

