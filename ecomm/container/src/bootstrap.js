import { mount as cartMount } from "cart/CartShow";
import { mount as productMount } from "products/ProductsIndex";

productMount(document.querySelector("#dev-products"));
cartMount(document.querySelector("#dev-cart"));
