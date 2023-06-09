import { createStore } from "vuex";
import { products } from "./product.module";

const store = createStore({
    modules: {
        products,
    },
});

export default store;