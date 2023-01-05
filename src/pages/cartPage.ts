import { Loader } from './../components/controller/loader';
import { Cart } from './../components/cart/cart';
import { CartController } from './../components/controller/cartController';
import { CartView } from './../components/view/cart/cartView';
import { createElemDOM } from './../utils/utils';
export class CartPage {
  // data: CartProduct[];
  cart: Cart;
  cartController: CartController;

  constructor(cart: Cart, loader: Loader) {
    this.cart = cart;
    this.cartController = new CartController(cart, loader);
  }
  draw(): void {
    const main = document.querySelector('.main');
    if (!main) throw new Error("Can't find element with class 'main'");
    this.clear();
    const page = createElemDOM('div', 'cart-page');
    page.append(createElemDOM('div', 'cart'));
    main.append(page);
    page.addEventListener('click', (e: Event) => {
      this.cartController.changeCart(e, () =>
        CartView.draw(this.cart.cartProducts)
      );
    });
    CartView.draw(this.cart.cartProducts);
  }

  private clear() {
    const main = document.querySelector('.main');
    if (!main) throw new Error("Can't find element with class 'main'");
    main.innerHTML = '';
  }
}
