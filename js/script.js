import { index } from "./pages/index.js";
import { orders } from "./pages/orders.js";
import { products } from "./pages/products.js";
import { productAdd } from "./pages/productAdd.js";
import { body } from "./utils/elements.js";

switch (body.getAttribute('data-page')) {
    case 'index':
        index()
        break;
    case 'orders':
        orders()
        break;
    case 'products':
        products()
        break;
    case 'productAdd':
        productAdd()
        break;
}

// Оживляємо tooltip & popover
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
