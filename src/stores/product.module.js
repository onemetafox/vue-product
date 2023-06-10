import ProductService from '../services/product.service';

const initialState = { products : null, total: 0, skip :0, limit: 30, status: true, msg: "" }
/**
 * call product server and response data store into vuex store
 */
export const products = {
    namespaced: true,
    state: initialState,
    actions: {
        /**
         * action handler from vue front end
         * @param {*} filter - limit and skip
         * @returns 
         */
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
        /**
         * action handler from vue front end
         * @param {*} queryStr 
         * @returns 
         */
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
    /**
     * mutation to store data in to vuex
     */
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