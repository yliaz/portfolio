---
title: JavaScript 中的继承
---

# ![javascript](https://zhuye-1308301598.file.myqcloud.com/icons/javascript.png) JavaScript 中的继承

这篇文章借鉴了[javaScript.info](https://zh.javascript.info/prototype-inheritance)中原型这一章节，原文讲的调理非常清晰，值得一读。

由于原文是英文，我将这一章节的两篇文章翻译汇总并加入一些自己的理解，于是就有了这篇Blog。

## 基于原型的继承

- 在编程时，我们常常需要对一些东西（的功能）进行扩展。
- 例如，现在有一个用户对象（user），它包含一些**属性**和**方法**，我们希望能够对其稍加修改就产生两个它的变体：管理员对象（admin）和访客对象（guest）。我们想要重复使用user中的属性和方法，并且不希望通过拷贝的方式，而是能够在已有的对象的基础上去构建这两个新的对象。

- **基于原型的继承**机制正是我们所需要的！



### [[prototype]]

- 在JavaScript中，**对象**有一个特殊的隐藏属性，名为 `[[prototype]]`（在[ECMA-262文档](https://www.ecma-international.org/publications/standards/Ecma-262.htm)中是这样命名的），它的值要么为 `null`，要么为一个**对象**的引用。如果它的值为一个**对象**的引用，那么这个对象就称为原来对象的“一个原型”。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589436864845-91349209-1f2c-4738-acc6-13a19a4ed8de.png)



- **原型**有种神奇的魔力。当我们想从一个对象中读取某个属性的值的时候，如果当前对象不包含这个属性，JavaScript会自动去它的原型中寻找。在编程的世界中，这被称为**基于原型的继承**。由它衍生出了很多炫酷的语言特性和编程技巧。
- [[prototype]]这个属性是内置的并且是个隐藏属性，但是我们仍然可以借助一些方法让它现身。

- 其中一个方法就是使用一个特殊的名称：`__proto__`。

```javascript
// 动物
let animal = {
  eat: true
};

// 兔兔🐰
let rabbit = {
  jump: true
}

rabbit.__proto__ = animal

//          [[prototype]]
// rabbit  ===============>  animal
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589427872242-69239946-189c-4f26-ac2e-d572bd71b002.png)



❗️`**__proto__**` **只是** `**[[prototype]]**` **的** `**getter**` **和** `**setter**` 

- 需要注意的是 `__proto__` 并不是 `[[prototype]]` 本身，而是它的 `getter` 和 `setter`。
- 这其中有一些历史的因素，在现代语言中它被 Object.getPrototypeOf() 和 Object.setPrototypeOf 所取代了，他们的用处是相同的。我们后续会讨论这两个函数出现的原因和详细的用法。

- ECMA-262文档中规定，浏览器中必须包含 `__proto__` ，事实上所有的环境（包括服务器端）也都支持它。由于 `__proto__` 相比之下直觉上更容易被接受，所以以下的例子中我们都将使用它。



- 如果我们要使用 `rabbit` 中的某个属性，`rabbit` 中却不包含这个属性，那么JavaScript会自动找到 `animal` 中的这个属性。
- 例如：

```javascript
// 动物
let animal = {
  eat: true
};

// 兔兔🐰
let rabbit = {
  jump: true
};

rabbit.__proto__ = animal; // (*)

// 这两个属性都可以在 rabbit 中使用:
alert( rabbit.eat ); // true (**)
alert( rabbit.jump ); // true
```

- (*) 这一行表示，我们显式地将 `animal`**对象**指定为 `rabbit`**对象**的原型
- (**) 这一行中，`alert()` 函数尝试读取 `rabbit`对象的 `eat`属性，它不在 `rabbit`对象中，所以JavaScript 会沿着原型（自下而上）去找，并在`animal`**对象**中找到了这个属性。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589437717763-8a6ee491-52fe-4038-99e6-796452774e80.png)

- 我们可以说 `animal对象` 是 `rabbit对象` 的原型，或者说 `rabbit对象` 是由 `animal对象` 基于原型继承得到的。
- 因此，如果 animal对象 有许多有用的属性和方法，你可以直接在 `rabbit对象` 中使用它们。这些属性是“**被继承的**”。

- 如果 `animal对象` 中有一个方法，我们也可以在 `rabbit对象` 中去调用它。

```javascript
// 动物
let animal = {
  eat: true,
  // NEW //
  walk() {
    alert("Animal walk");
  }
  // NEW //
};

// 兔兔🐰
let rabbit = {
  jump: true,
  __proto__: animal
};

// rabbit对象的walk是从原型中继承来的
rabbit.walk(); // Animal walk
```

- 继承的**方法**会自动从原型中吸纳过来，例如：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589437920555-e8c67dbd-22d8-434f-9516-cb32cb8bbd2e.png)

- 原型链还可以更长一些。

```javascript
// 动物
let animal = {
  eat: true,
  walk() {
    alert("Animal walk");
  }
};

// 兔兔🐰
let rabbit = {
  jump: true,
  __proto__: animal
};

// 长耳兔兔🐰
let longEarRabbit = {
  earLength: 10,
  __proto__: rabbit
};

// walk方法从原型链上继承
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589439319852-083bb0b6-c865-4faf-abe1-3c1f0a173316.png)

- 限制有二：

- - 这种原型**链**不可以成**环**。如果我们试图这样做的话，就会报错；
  - __proto__ 的值只能为对象或null，其他类型的值会被自动忽略；

- 另外，显然每个对象只能有一个原型☝️。



### 添加属性不会影响原型

- 原型只会在读属性的时候展现它的魅力。
- 添加或者删除属性只会影响当前对象，不会影响它的原型。

- 在下面的例子中，我们给 `rabbit对象` 添加一个它自己的 `walk()方法`。

```javascript
// 动物
let animal = {
  eat: true,
  walk() {
    /* this method won't be used by rabbit */
  }
};

// 兔兔🐰
let rabbit = {
  __proto__: animal
};

// 给rabbit对象加一个它自己的walk()方法
rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); 		// Rabbit! Bounce-bounce!
```

- 这样的话，在执行 `rabbit.walk()` 时，就会立即找到 `rabbit对象` 自身的 `walk()` 方法，而不会去原型链上寻找。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589440359368-9ee92a23-5b81-4afb-b30c-bcef8b06601d.png)

- 访问器属性是个例外，赋值会通过setter函数来执行。所以通过setter为某个属性赋值实际上相当于调用了一个函数。
- 因此， `admin.fullName` 在下面这段代码中可以正常运行。

```javascript
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)
```

- 在(*)这一行中，admin.fullName 这个属性在它的原型user中有一个getter，所以它可以被调用。
- 在(**)这一行中，这个属性在它的原型user中有一个setter，所以它可以被调用。



### this 的绑定值

- 看完上面的例子后，一个有意思的问题出现了。那就是 `set fullName(value)` 函数中 `this` 的值是啥？`this.name` 和 `this.surname` 写入到哪个对象中了？user对象 还是 admin对象？
- 答案很简单，this 并不会收到原型继承的影响。

- 无论方法是在一个对象还是它的原型中定义的，`this` 的值永远都是`.`前面的那个对象。
- 所以，`setter` 函数在被调用时，`admin.fullName=` 中 `this` 绑定了 `admin` 这个对象，而不是 `user`对象。

- 这是至关重要的一件事。可能存在一个很大的对象，对象中有很多方法，并且这个对象还是其他对象的原型。当其他对象在调用继承而来的方法时，他们仅仅会修改自己的状态，而不是原型的状态。
- 例如，下面的代码中，animal对象作为一个“方法库”，rabbit对象可以自由滴使用继承来的方法。

- 调用 `rabbit.sleep()` 会修改 `rabbit` 对象中的 `this.isSleeping` 属性。

```javascript
// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "兔兔🐰",
  __proto__: animal
};

// 修改rabbit对象的isSleeping属性
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)
```

- 运行后的结果示意图：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589447368043-74e56b2e-7b15-4c39-8bde-343823b687ad.png)

- 如果我们还有一些其他的继承自 `animal` 对象的对象，例如鸟🐦、蛇🐍等等，他们也可以访问到 `animal` 对象的各种方法。但是在调用方法时this会在调用时绑定到调用它的对象本身（而不是它的原型 `animal` ）
- 所以，当我们在使用this修改属性时，改变的是对象本身的属性（而不是它的原型的）。

- 总而言之，方法可以共享，但是对象的状态不会。



### for...in 循环

- for...in循环也会访问继承的属性， 例如：

```javascript
let animal = {
  eat: true
};

let rabbit = {
  jump: true,
  __proto__: animal
};

// Object.keys 只会返回它自己的属性
alert(Object.keys(rabbit)); // jump

// for..in 循环不仅会返回自己的属性，还会返回继承的属性
for(let prop in rabbit) alert(prop); // jump, then eat
```

- 如果你不希望如此，我们想要排除那些继承来的属性，可以使用一个名为 `obj.hasOwnProperty(key)`的方法。如果obj自身有名为 key 的属性，则会返回一个 `true`。
- 这样我们就可以过滤掉那些继承来的属性（或者对他们进行一些特别的操作）。

```javascript
let animal = {
  eat: true
};

let rabbit = {
  jump: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}
```

- 现在有如下图所示的一条继承链：rabbit对象 由 animal对象继承而来，animal对象由Object.prototype继承而来，Object.ptototype 的原型是null。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589460660906-588054c5-a066-4329-a29f-d28c734a6328.png)

- 注意，有趣的事情来了。rabbit.hasOwnProperty这个属性从哪来呢？我们并没有定义它。看看原型链我们会发现这个方法是在 Object.prototype.hasOwnProperty 定义的。换句话说，它是继承来的。
- 但是，如果 `for...in` 循环也是列出继承的属性的话，为什么 `hasOwnProperty` 没有像 `eat` 和 `jump`一样没有出现在 `for...in` 循环中呢？

- 答案很简单：它是不可列举的。跟许多Object.prototype一样，它有一个 `enumerable: false`（不可列举）标识。而 for...in 循环只会列举出 enumerable 值为真的属性。这就是Object.prototype中的属性没有被列举出来的原因。

基本所有其他的用于获取键值的方法都会忽略继承而来的属性

基本上所有的用于获取键值的方法都会忽略继承而来的属性，例如 `Object.keys`，`Object.values`。

他们只会去操作这个对象本身，而不会去关心原型。

### 小结

- 在JavaScript中，所有的对象都有一个隐藏属性 `[[prototype]]`，它的值为另一个对象或者 `null`；
- 我们可以使用 `obj.__proto__` 来获取它的值；

- `[[prototype]]` 属性中引用的对象被称为**原型；**
- 我们试图访问一个对象的某个属性或者调用某个方法时，它当前对象中不存在的话，JavaScript会试图从原型中去寻找；

- 修改或者删除某个属性只会对于当前对象生效，而不会对它的原型产生影响；
- 如果我们调用对象的某个方法，而这个方法是从原型中继承而来的，this仍然会绑定到当前对象上。所以即使是继承而来的方法也只会对当前对象进行操作。

- for...in 循环既会遍历自身的属性，也会遍历（从原型中）继承而来的属性。其他的用于获取键值的方法基本上只会操作自身的属性。



## 基于Class的继承

- 基于Class的继承可以将一个class扩展为另一个class，我们可以在新的class中添加新的方法。

### extends关键词

- 例如，这里有一个Animal类

```javascript
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");
```

- `animal`对象和 `Animal`类的关系如下图所示：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589471500339-a7d2a89c-bfcf-487a-9c97-cce0ae79e290.png)

- 现在我们想要创建另外一个 `Rabbit`类
- 因为兔兔也是动物的一种，所以Rabbit类需要基于Animal类，并可以访问Animal类的方法。这样的话兔兔就可以做所有动物都能做的事情（吃喝拉撒睡）

- 扩展一个类的语法是：`class Child extends Parent`
- 我们一起创建一个由 `Animal`类继承而来的 `Rabbit`类吧！

```javascript
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // 🐇小白兔在奔跑
rabbit.hide(); // 🐰小白兔藏起来了！
```

- `Rabbit`类实例化的对象既拥有 Rabbit类的方法，例如 `rabbit.hide()`，也可以使用`Animal`类的方法，例如 `rabbit.run()`。
- 本质上，extends 关键字仍然在使用原型机制的技巧，它将 `Rabbit.prototype.[[prototype]]` 的值设置为 `Animal.prototype` 。这样的话，如果在 Rabbit.prototype 中没有找到某个方法，就会继续到`Animal.prototype` 中去寻找。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589471944070-5eaa898f-6ff9-4412-be1a-f1c0d310bc96.png)



- 例如，为了找到 rabbit.run 这个方法，引擎会逐一去以下几个地方查找：

- - `rabbit`对象（没有 `run` 方法）
  - `rabbit`对象的原型，也就是 `Rabbit.prototype`（仍然没有 `run` 方法）

- - Rabbit.prototype对象的原型，也就是 `Animal.prototype`（终于找到了 `run` 方法）



### 重写某个方法

- 现在让我们再进一步，重写类中某个方法。默认情况下，所有没有在 `Rabbit`类中明确定义的方法都会使用`Animal`类中的定义。
- 如果我们在Rabbit类中定义了某个方法，那么他就会优先被使用。

- 通常情况下，我们并不想彻底替换某个父类的方法，而只是对它进行一些调整或者拓展它的功能。我们先在自己写的方法中实现一些功能，然后再去调用父类的方法。
- 类提供了 `super` 关键字来实现这一功能。

- - 使用 `super.method(...)` 调用一个父类方法；
  - 使用 `super(...)` 调用父类的构造器；

- 例如以下一段代码

```javascript
class Animal {
	// 构造器
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
	
  stop() {
    super.stop(); // 调用父类的stop方法，兔兔🐰会站住
    this.hide(); // 兔兔🐰会藏起来！
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // 兔兔🐰在跑
rabbit.stop(); // 兔兔🐰先站住了，然后藏起来了！
```

箭头函数没有 super



### 重写构造器

- 对于构造器来说，要重写它有一点小复杂。
- 默认情况下，如果一个继承自其他类的类没有自己的构造器，则会为它自动生成一个“空”的构造器：

```javascript
class Rabbit extends Animal {
  // 没有自己构造器的类会生成一个默认的构造器
  constructor(...args) {
    super(...args);
  }
}
```

- 需要先使用 `super`，才能使用 `this`。

```javascript
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  
  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);									// 先使用super
    this.earLength = earLength;		// 才能使用this
  }

  // ...
}

// now fine
let rabbit = new Rabbit("White Rabbit", 10);
alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10
```



### 小结

- 要扩展一个类，需要使用语法：`class Child extends Parent`：

- - 这意味着，`Child.prototype.__proto__=== Parent.prototype`；

- 当我们要重写一个构造器（constructor）时：

- - 我们必须在子类的构造器（constructor）中使用 super 调用父类的构造器，然后才能使用this；

- 当我们要重写一个方法时：

- - 我们可以使用 `super.method()`，调用父类的同名方法；

- 箭头函数没有自己的 `this` 和 `super`；