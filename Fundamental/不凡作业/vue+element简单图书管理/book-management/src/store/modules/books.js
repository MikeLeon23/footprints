import mockjs from 'mockjs'

const Random = mockjs.Random;

// 初始化图书数据数组
let booklist = [];
for (let i = 0; i < 5; i++) {
  let item = {
    id: Random.id(),
    name: Random.ctitle(),
    description: Random.cparagraph(),
    imgSrc: Random.dataImage("200x100", "图书")
  };
  booklist.push(item);
}

export default {
  state: {
    booklist,
  },
  mutations: {
    update(state, payload) {
      let item = state.booklist.find(item => item.id === payload.id);
      item.name = payload.name;
      item.description = payload.desc;
    }
  }
};