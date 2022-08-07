/// <reference types="cypress" />
import { InitialPage } from "../support/pages/InitialPage";
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
    })
    beforeEach("Enter login credentials and click in module Online Shop", () => {
        initialPage.login( loginData.username, loginData.password );
        home.selectOnlineShowModule();
    })

    it("add products to cart and check total price", () => {
        let totalPrice = productsData.product1.price + productsData.product2.price;
        products.producSelect(productsData.product1.name);
        products.producSelect(productsData.product2.name);
        products.goToShoppingCat();
        shoppingCart.verifyProductExist(productsData.product1.name);
        shoppingCart.verifyProductExist(productsData.product1.name);
        shoppingCart.verifyTotalPrice(totalPrice);

        
        cy.log(productsData)
    })
})