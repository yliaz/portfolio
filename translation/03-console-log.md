---
title: 【译】还在用console.log() ？你out了！
authors: [zhuye]
tags: [Debug]
---

> 你是一个经常使用 `console.log()` 来调试代码的 JavaScript 开发者吗？这并没有错。但是，你也许不知道的是，`console`对象还有很多其他很有用的方法。在本文中，我想跟大家聊聊如何高效使用这些方法。

<!--truncate-->

> - 原文作者：Harsha Vardhan
> - 原文链接：[Stop Using console.log() In JavaScript](https://javascript.plainenglish.io/stop-using-console-log-in-javascript-d29d6c24dc26)

### 为什么要使用控制台对象

JavaScript中的 `console` 对象使得我们可以在浏览器的控制台中，通过打印代码中使用到的变量的值的方式，来调试代码。通常情况下，这可以用来检测你的代码中是否传递了正确的值。

我敢肯定，大多数开发者都曾使用过 `console.log()` 在浏览器控制台打印值。然而，`log` 只是 `console` 对象的其中一个方法。还有其他几个非常有用的方法



### 1. console.log()

当我们想在控制台中打印出一个值时，这个方法是我们最常用的方法。任何类型的值都可以作为log()方法的参数传递进去，无论是字符串、数组、对象、布尔值等。

```javascript
console.log('JavaScript'); 
console.log(7);
console.log(true);
console.log(null);
console.log(undefined);
console.log([1, 2, 3]);
console.log({a: 1, b: 2, c: 3});
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/e12cdb3f499e4828903c4497538cdef3~tplv-k3u1fbpfcp-zoom-1.image)



### 2. console.error()


这个方法在测试代码时很有用。它用于将错误输出到浏览器的控制台。默认情况下，报错信息会以红色高亮显示。

```javascript
console.error('Error found');
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/e4b1b6a9009e4610bbe14c8be57007d0~tplv-k3u1fbpfcp-zoom-1.image)

### 3. console.warn()

这个方法也用于测试代码。通常，它用于向控制台抛出警告。默认情况下，警告信息会以黄色高亮显示。

```javascript
console.warn('Warning!');
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/68a67fa429664ae98f917c80a4eb17e8~tplv-k3u1fbpfcp-zoom-1.image)



### 4. console.clear()

此方法用于清除控制台的内容。如果控制台被消息/错误阻塞，通常调用一下这个方法。控制台的内容将被清除，并将在控制台中打印出“控制台内容已被清除”的信息。

```javascript
console.clear()
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/52e29b3a0e9b4860ae3803d944d1d2c0~tplv-k3u1fbpfcp-zoom-1.image)



### 5. console.time() and console.timeEnd()

这两种方法需要组合使用。每当我们想知道一段代码或一个函数运行所花费的时间时，我们可以利用time()和timeEnd()方法。这两个方法都接收一个字符串作为参数。确保在这两个函数中传递相同的字符串来测量时间间隔。

```javascript
console.time('timer'); 

const hello =  function(){
  console.log('Hello Console!');
}
const bye = function(){
  console.log('Bye Console!');
}
hello(); // calling hello();
bye(); // calling bye();

console.timeEnd('timer');
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/d89d6359b1d14c77b147262398d0d454~tplv-k3u1fbpfcp-zoom-1.image)



### 6. console.table()

这个方法会根据传入的值在控制台内生成一个表格，以提高可读性。数组或对象都可以生成一个表格。

```javascript
console.table({a: 1, b: 2, c: 3}); 
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/12d521be4c37408bbf32e3d9d7303c6f~tplv-k3u1fbpfcp-zoom-1.image)



### 7. console.count()

这个方法是用来统计函数的调用次数。可用于在一个循环中通过查看某个特殊的值被执行了几次。

```
for(let i=0; i<3; i++){
  console.count(i);
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/0d1211c78ebd4cfdb22b52c877093481~tplv-k3u1fbpfcp-zoom-1.image)



### 8. console.group() and console.groupEnd()

group()和groupEnd()这两个方法允许我们将内容分组在一个单独的块中，并会缩进展示。就像time()和timeEnd()一样，它们也接受一个相同值的参数作为标签。你可以在控制台中展开和折叠这个组。

```javascript
console.group('group1'); 
console.warn('warning'); 
console.error('error'); 
console.log('I belong to a group'); 
console.groupEnd('group1'); 
console.log('I dont belong to any group');
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/90f22a46052d42a1b0511d614d5a4781~tplv-k3u1fbpfcp-zoom-1.image)



### 【福利时间】给你的log加点样式

你也可以为控制台的日志添加样式，让log看起来更有趣。方法也很简单。你只需要将CSS样式作为第二个参数传入`log()` 函数中，而第一个参数字符串以 `%c` 开头。这些样式将取代log中的 `%c`。

```javascript
const spacing = '10px'; 
const styles =  `padding: ${spacing}; background-color: white; color: red; font-style: italic; border: 1px solid black; font-size: 2em;`; 
console.log('%cI am a styled log', styles);
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/c96519fcfaad448586fa34fba43cd275~tplv-k3u1fbpfcp-zoom-1.image)



### 总结

`console` 对象对于开发人员调试代码是非常有用的。我们作为开发人员，往往只使用基本的 `log` 函数。我们应该充分利用 `console` 对象提供的工具，这对我们的调试会有很大帮助，也让我们能更加直观地看到我们想要的数据。希望本文对大家有所帮助。
