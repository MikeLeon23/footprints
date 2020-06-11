export default {
    namespaced: true,
    state: {
        list: null,
        shoppingCar: []
    },
    mutations: {
        // 商品列表初始化
        initGoodsList(state, payload) {
            state.list = payload;
        },
        // 将商品添加到购物车
        addToCar(state, id) {
            let item = state.list.find(item => item.id === id);
            if (item.num === 0) {
                return;
            }
            let shapedItem = {
                id: item.id,
                name: item.name,
                num: 1,
                price: item.price,
                checked: false
            };

            if (state.shoppingCar.find(item => item.id === id)) {
                state.shoppingCar.find(item => item.id === id).num++;
            } else {
                state.shoppingCar.push(shapedItem);
            }

            item.num--;
        },
        increase(state, id) {
            state.shoppingCar.find(item => item.id === id).num++;
            state.list.find(item => item.id === id).num--;
        },
        reduce(state, id) {
            state.shoppingCar.find(item => item.id === id).num--;
            state.list.find(item => item.id === id).num++;
        },
        checkOrNot(state, val){
            state.shoppingCar.forEach(item => item.checked = val);
        }
    },
    actions: {},
    getters: {
        allchecked(state) {
            if(state.shoppingCar.length === 0){
                return false;
            }else{
                return state.shoppingCar.every(item => item.checked);
            }
        }
    }
}