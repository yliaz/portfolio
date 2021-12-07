---
title: 6个你应该知道的实用CSS小技巧
authors: [zhuye]
tags: [CSS]
---

# 【译】6个你应该知道的实用CSS小技巧

> 在这篇文章中，我们将会展示一些实用的CSS技巧，你可以在接下来的项目中尝试使用它们。那么让我们直接开始吧。

<!--truncate-->

> - 原文作者：Mehdi Aoussiad
> - 原文链接：[6 Useful Pure CSS Tips that You Should Know](https://javascript.plainenglish.io/6-useful-pure-css-tips-that-you-should-know-647ccaff201e)

CSS是一种很棒的样式表语言，我们可以使用它来改变网站样式，或是制作响应式的网站。它是所有Web开发人员必须掌握的技能，因为每个网站或Web应用程序都会使用CSS。

如今的CSS语言已经有了许多改进。你可以在不使用JavaScript的情况下用纯CSS创建一些很酷的东西。这就是为什么你需要了解一些CSS技巧，他们能让你在项目中制作出非常惊艳的UI。

在这篇文章中，我们将会展示一些实用的CSS技巧，你可以在接下来的项目中尝试使用它们。那么让我们直接开始吧。



### 1. 给滚动条增加样式

使用CSS，你可以轻松地在你的网站上修改滚动条的样式。这样你可以实现自己想要的任何效果。

要实现这一点，你需要使用属性 `::scrollbar` 和 `::scrollbar-thumb`，下面是一段代码示例。

```css
body{
  height: 200vh;
}
::-webkit-scrollbar{
  width: 17px;
}
::-webkit-scrollbar-thumb{
  background: black;
}
```

通过代码你可以看到，我们添加了-webkit-前缀，因为这是Chrome和Safari浏览器的内核webkit支持的CSS扩展。我们还添加了我们的样式，使滚动条的宽度变大，并变成黑色。

> 你可以点击[这个链接](http://js.jirengu.com/sazur/1)查看效果



### 2. 给鼠标选中的文本增加样式


我们在浏览网站或阅读博客时，经常会用鼠标选择某段文字。你可以通过CSS来改变被鼠标选中文本的样式。

`::selection` 属性可以让你轻松改变被鼠标选中文本的样式。

下面是代码示例：

```css
::selection{
  background: yellow;
  color: black;
}
```

添加上述样式表后，用鼠标选择文字时，文字的背景会变成黄色，文字颜色会变成黑色。

> 你可以点击[这个链接](http://js.jirengu.com/xejih/1)查看效果



### 3. 实现平滑的滚动

你可以在 `html` 选择器中添加CSS属性 `scroll-behavior`，这样整个HTML页面就会有平滑的滚动。

下面是代码示例：

```css
html{
 scroll-behavior: smooth;
}
```

> 你可以点击[这个链接](http://js.jirengu.com/noqok/1)查看效果



### 4. 纯CSS实现深色模式

你知道吗？不必使用JavaScript就可以轻松地为你的网站添加深色模式吗？我发现一些开发人员使用CSS变量来实现黑暗模式。但还有另一个很酷的技巧，可以让你在不使用CSS变量的情况下实现同样的效果。

我们将在一个类型为复选框的输入元素上使用伪类 `:checked`，以便在复选框被点击时轻松地在深色模式和浅色模式之间切换。

请看下面这段简单的HTML和CSS代码。

HTML代码：

```html
<body>
    <input type="checkbox" id="checkbox">
    <div class="container">
      <h1>Hello World!</h1>
      <div class="div1">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, pariatur?</p>
      </div>
    </div>
</body>
```

CSS代码：

```css
body{
    height: 100vh;
}

.container{
    width: 100%;
    height: 100%;
    padding: 80px 20px;
    transition: .4s ease;
}

/* When the checkbox is clicked */
#checkbox:checked + .container{
  background: black;
  color: white;
}
```

> 你可以点击[这个链接](http://js.jirengu.com/mowec/1)查看效果

如果你想知道更多关于使用 `::checkbox` 实现深色模式的细节，请看[这篇文章](https://javascript.plainenglish.io/dark-mode-switch-without-javascript-112e65e6a1e3)。



### 5. 改变输入框中光标的颜色

你也可以使用CSS来改变输入框中光标的颜色。使用 `caret-color` 这个属性就可以实现。

下面是代码示例：

```css
input{
  caret-color: red;
}
```

> 你可以点击[这个链接](http://js.jirengu.com/setum/1)查看效果



### 6. 圆锥渐变

CSS的另一个很酷的地方是你可以创建漂亮的饼图。你可以使用CSS的 `conic-gradient` 属性。

下面是一段代码示例：

```css
div{
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: conic-gradient(red 0% 20%, blue 20% 60%, black 60% 100%);
}
```

> 你可以点击[这个链接](http://js.jirengu.com/yigif/1)查看效果



### 结论

你可以发现，你可以用纯CSS做很多很酷的事情，而不必使用任何框架或库。这就是对于前端开发者来说，为什么CSS非常的重要。

感谢你阅读我的文章，希望我能帮到你。

### 【附】单词词组总结

| 英文 | 中文 |
| --- | --- |
| stylesheet | 样式表 |
| responsive | 响应式的 |
| web application | 网页应用 |
| selected text | 被选中的文本 |
| CSS property | CSS属性 |
| smooth scrolling | 平滑滚动 |
| dark mode | 深色模式 |
| CSS variables | CSS变量 |