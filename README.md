# 🛍️ Vue Product Showcase

Aplicación web desarrollada con **Vue Cli** que simula una tienda de productos.  
Permite visualizar productos, buscarlos, añadirlos al carrito y simular una compra.

---

## 📌 Repositorio y despliegue

- Repositorio: [Proyecto-Modulo7-Vue-Product-Showcase](https://github.com/Alexandratoloza/Proyecto-Modulo7-Vue-Product-Showcase/tree/gh-pages)  
- GitHub Pages: [https://alexandratoloza.github.io/Proyecto-Modulo7-Vue-Product-Showcase/](https://alexandratoloza.github.io/Proyecto-Modulo7-Vue-Product-Showcase/)

---

## 🚀 Requisitos previos

- Node.js (versión 16 o superior recomendada)
- npm (incluido con Node.js)
- Git

---

## 📦 Instalación y ejecución en local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Alexandratoloza/Proyecto-Modulo7-Vue-Product-Showcase.git
   cd Proyecto-Modulo7-Vue-Product-Showcase

## Instalar dependencias:  
    npm install

## Levantar el servidor de desarrollo:
    npm run serve

## La aplicación estará disponible en: 
    http://localhost:8080

# EN ESTE PROYECTO SE EJECUTAN DOS TIPOS DE PRUEBAS, PRUEBAS UNITARIAS Y E2E 
## Pruebas unitarias con Jest

    npm run test:unit
## Pruebas end-to-end con Cypress (modo headless)

    npm run test:e2e

## Estructura del proyecto
vue-product-showcase/
├── cypress/
│   └── e2e/
│       └── product-list.cy.js
│
├── public/
│   └── products.json
│
├── src/
│   ├── components/
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
│   └── unit/
│       └── example.spec.js
│
├── jest.config.js
├── package.json
└── README.md
