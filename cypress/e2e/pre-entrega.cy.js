/// <reference types="cypress" />

import { InitialPage } from "../support/pages/AuthForm";
import { Home } from "../support/pages/Home";
import { Products } from "../support/pages/Products";
import { ShoppingCart } from "../support/pages/ShoppingCart"

describe("Enter Online Shop, add products to cart and check total price ", () => {
    let loginData, productsData;
    const initialPage = new InitialPage;
    const home = new Home;
    const products = new Products;
    const shoppingCart = new ShoppingCart;

    before("Bringing necessary data stored in fixture", () => {
        cy.fixture("loginData").then(data => {
            loginData = data
        });
        cy.fixture("productsData").then(data => {
            productsData = data
        });
    });

    beforeEach("Enter login credentials and click in module Online Shop", () => {
        initialPage.login( loginData.username, loginData.password );
        home.selectOnlineShopModule();
    });

    it("Add products to cart, check product list and total price", () => {
        let { product1, product2 } = productsData;
        let totalPrice = product1.price + product2.price;
        products.addProducToCart( product1.name );
        products.addProducToCart( product2.name );
        products.goToShoppingCart();
        shoppingCart.checkProductInListCartList( product1.name, product1.price );
        shoppingCart.checkProductInListCartList( product2.name, product2.price );
        shoppingCart.checkTotalPriceOfProducts( totalPrice.toString() );
    });
});