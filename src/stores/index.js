import { createStore } from "vuex";
import { product } from "./product.module";

const store = createStore({
    modules: {
        product,
    },
});

export default store;