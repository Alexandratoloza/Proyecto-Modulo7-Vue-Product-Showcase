## 🛍️ Vue Product Showcase
Aplicación web que simula una tienda de productos desarrollada con Vue3, 
La app Permite visualizar Productos, buscarlos, añadir al carro y simula una compra.
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

### Estructura del proyecto: 
vue-product-showcase/
├── cypress/
│   ├── e2e/
│    └── product-list.cy.js
│
├── public/
│   └── products.json
│
├── src/
│   components/
│   │   ├── AppFooter.vue
│   │   ├── AppHeader.vue
│   │   ├── ProductCard.vue
│   │   ├── ProductCart.vue
│   │   └── ProductList.vue
│   │
│   ├── App.vue
│   └── main.js
│
├── tests/
│   │
│   └── unit/
│       └── example.spec.js
│
├── jest.config.js
├── package.json
└── README.md