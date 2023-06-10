import ProductService from '../services/product.service';

const initialState = { products : null, total: 0, skip :0, limit: 30, status: true, msg: "" }
  

export const products = {
    namespaced: true,
    state: initialState,
    actions: {
        getProducts({ commit }, filter) {
            return ProductService.getProducts(filter).then(
                res => {
                    commit('getProducts', res.data);
                    return Promise.resolve(res.data);
                },
                error => {
                    commit('getFailure', {status: false, msg :error});
                    return Promise.reject(error);
                }
            );
        },
        searchProducts({ commit }, queryStr) {
            return ProductService.searchProducts(queryStr).then(
                res => {
                    commit('getProducts', res.data);
                    return Promise.resolve(res.data);
                },
                error => {
                    commit('getFailure', {status: false, msg :error});
                    return Promise.reject(error);
                }
            );
        },
    },
    mutations: {
        getProducts(state, data) {
            state.products = data.products;
            state.total = data.total;
            state.skip = data.skip;
            state.limit = data.limit;
            state.loading = false;
            state.status = true;
            state.msg = "Success";
        },
        getFailure(state, data) {
            state.products = null;
            state.loading = false;
            state.status = data.status;
            state.msg = data.msg;
        },
        
    }
};