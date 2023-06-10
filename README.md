# testing

The SPA should feature a product list at the top of the page, presenting 10 products per page obtained from the Product API (documentation: https://dummyjson.com/docs/products). The pagination of the product list will be handled server-side.
To render the product list, employ a Bootstrap 5 table. Each row within this table should be encapsulated as an independent Vue component.


Integrating a real-time text search option above the product table. This search should operate in real-time, but not instantly as the user starts typing. Incorporate a delay of at least 500 milliseconds before triggering a server-side search request to ensure better performance and avoid unnecessary server load.
The search functionality should be encapsulated as a distinct Vue component, separate from the product list. Moreover, please provide an option to reset the search for user convenience.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
