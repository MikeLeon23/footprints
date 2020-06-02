(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	let vm = new Vue({
		el: "#app",
		data() {
			return {
				// 数据原始列表
				list: [
					// {
					// 	text: "看书",
					// 	id: "1",
					// 	classObj: {
					// 		todo: true,
					// 		completed: false,
					// 		editing: false
					// 	}
				],
				newItem: {
					text: "",
					id: "",
					classObj: {
						todo: true,
						completed: false,
						editing: false
					}
				},
				// 筛选所用的字符串
				filterClassObj: {
					all: true,
					active: false,
					completed: false
				}
			};
		},
		created() {
			if (localStorage.getItem("list")) {
				this.list = JSON.parse(localStorage.getItem("list"));
			}
		},
		updated() {
			localStorage.setItem("list", JSON.stringify(this.list));
		},
		computed: {
			// 剩余未完成的项目的个数
			leftItem() {
				return this.list.reduce((accumulator, current) => {
					return !current.classObj.completed ? accumulator + 1 : accumulator;
				}, 0);
			},
			// 全选按钮的value值
			checkAll: {
				get() {
					return this.list.every(item => item.classObj.completed);
				},
				set(val) {
					this.list.forEach(item => item.classObj.completed = val);
				}
			},
			// 渲染出来的数据列表
			displayList() {
				if (this.filterClassObj.all === true) {
					return this.list;
				} else if (this.filterClassObj.active === true) {
					return this.list.filter(item => !item.classObj.completed);
				} else {
					return this.list.filter(item => item.classObj.completed);
				}
			}
		},
		methods: {
			// 提交新数据的事件处理函数
			handleSubmit() {
				if (this.newItem.text.trim()) {	// 空值检查
					this.newItem.id = Math.round(Math.random() * 100000);
					this.list.push(this.newItem);
					this.newItem = {
						text: "",
						id: "",
						classObj: {
							todo: true,
							completed: false,
							editing: false
						}
					};
				}
			},
			// 双击编辑的事件处理函数
			edit(id) {
				let index = this.list.findIndex(item => item.id === id);
				this.list[index].classObj.editing = true;
				// 优化为使用vue自定义指令实现，避免直接操作dom
				// this.$nextTick(function () {
				// 	let input = document.getElementsByClassName("editing")[0];
				// 	input.lastChild.focus();
				// });
			},
			// 编辑输入框失去焦点的事件处理函数
			editBlur(id) {
				let index = this.list.findIndex(item => item.id === id);
				this.list[index].classObj.editing = false;
			},
			// 勾选已完成复选框的事件处理函数
			handleCheck(id) {
				let index = this.list.findIndex(item => item.id === id);
				this.list[index].classObj.completed = !this.list[index].classObj.completed;
			},
			// 点击删除按钮的事件处理函数
			removeItem(id) {
				let index = this.list.findIndex(item => item.id === id);
				this.list.splice(index, 1);
			},
			// 点击清空已完成列表按钮的事件处理函数
			clearCompleted() {
				this.list = this.list.filter(item => !item.classObj.completed)
			},
			// 点击三个筛选按钮时，共同的事件处理函数
			filter(str) {
				this.filterClassObj = {
					all: false,
					active: false,
					completed: false
				};
				this.filterClassObj[str] = true;
			}
		},
		directives: {
			focus: {
				inserted(el){
					el.focus();
				}
			}
		}
	});
})(window);
