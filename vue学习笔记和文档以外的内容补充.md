### .sync 修饰符的使用

如何对一个组件prop进行"双向绑定"呢? 就是父组件里的值变化了, 子组件接收的值会改变, 反过来, 子组件中是不能直接修改传进来的prop的(会报错).

- **没有.sync修饰符时**

我们只能通过子组件内部向父组件发送一个自定义事件, 父组件监听到了自定义事件, 在事件处理函数中去改变父组件中的值. 父组件中还要通过v-bind给子组件传prop值, 代码如下:

```js
// 子组件中发射自定义事件
Vue.component("text-document", {
  props: ["title"],
  template: `
     <div>
       <span>{{title}}</span>
       <button @click="handleClick"> + </button>
     </div>`,
  methods: {
    handleClick() {
      this.$emit("updateTitle", this.title + 'a');
    }
  }
});

// 父组件中传prop和监听子组件的自定义事件, 比较麻烦
<text-document
  :title="bar"
  @updateTitle="bar = $event">
</text-document>
```

- **有了.sync修饰符之后**

```JS
// 注意: 子组件中发射的自定义事件的名称必须按照update:xxx的方式书写
Vue.component("text-document", {
  props: ["title"],
  template: `
     <div>
       <span>{{title}}</span>
       <button @click="handleClick"> + </button>
     </div>`,
  methods: {
    handleClick() {
      // 注意, 这里的update:后面跟的是子组件中prop名称
      this.$emit("update:title", this.title + 'a');
    }
  }
});

// 而父组件中的写法简化了
<text-document :title.sync="bar"></text-document>
```

注意: 子组件的写法并没有简化, 还是要通过发送自定义事件的方式, 把更新父组件数据的权利交给父组件.

所以 `.sync`并不能简化子组件中的写法, 只是提供了一个语法糖, 让我们父组件中的书写变得简单, 只是一个语法糖而已, 并没有任何高深的内容. 另外, 使用`.sync`修饰符时, 对子组件中发送的自定义事件的名称有特殊要求.