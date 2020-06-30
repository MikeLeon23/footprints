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



### 作用域插槽是什么? 怎么用?

作用域插槽是slot中一个比较难理解的点, 而且官方文档关于这块说的又不清晰.

作用域插槽用一句话来概括, 就是:

> **父组件替换插槽中的标签**(即决定数据的展示方式), **但是内容**(数据)**由子组件提供**

```HTML
<div id="app">
    <!-- 按照组件默认方式进行展示 -->
    <cpn></cpn>
    
    <!-- 获取组件中的数据, 按照组件使用者的意愿, 以 * 连接进行展示 -->
    <cpn>
        <!-- v-slot:default="slotProp"使得默认插槽可以通过slotProp进行引用 -->
        <template v-slot:default="slotProp">
        	{{slotProp.data.join(" * ")}}
        </template>
    </cpn>
</div>

<!-- 组件模板, 数据按照列表的方式进行展示 -->
<template id="cpn">
    <div>
        <!-- 注意这里, 如果想要组件的使用者能够获得组件中的user, 必须用一个变量名data(名称任取)
			 与其绑定, 那么在组件被使用时, 可以通过这个变量名获得组件中的数据 -->
        <slot :data="user">
        	<ul>
                <li v-for="item in user">{{item}}</li>
            </ul>
        </slot>
    </div>
</template>

<script>
    // vue实例
    let vm = new Vue({
      el: "#app",
      components: {
        "cpn": {
          template: "#cpn",
          data() {
            return {
              user: ['张三', '李四', '王五', '赵六']
            }
          }
        }
      }
    });
</script>
```

以上例子中, 插槽中的数据不一定要要有默认的展示方式, 只要通过:data="user"绑定了数据, 父组件中就可以获得子组件中的数据

ps. 跟 `v-on` 和 `v-bind` 一样，`v-slot` 也有缩写，即把参数之前的所有内容 (`v-slot:`) 替换为字符 `#`。例如 `v-slot:header` 可以被重写为 `#header`.  上面的部分代码可以缩写成:

```HTML
<template #default="slotProp">
    {{slotProp.data.join(" * ")}}
</template>
```

但不能缩写成 `#="slotProp"`