import ProductService from '../services/product.service';

const initialState = { products : null }
  

export const products = {
    namespaced: true,
    state: initialState,
    actions: {
        getProducts({ commit }, filter) {
            return ProductService.getProducts(filter).then(
                products => {
                    commit('getProducts', products);
                    return Promise.resolve(products);
                },
                error => {
                    commit('getFailure');
                    return Promise.reject(error);
                }
            );
        },
    },
    mutations: {
        getProducts(state, products) {
            state.products = products;
        },
        loginFailure(state) {
            state.products = null;
        },
        
    }
};