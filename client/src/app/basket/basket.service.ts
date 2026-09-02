import { IDeliveryMethod } from './../shared/models/deliveryMethod';
import { Injectable, signal, computed, effect } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { IBasket, BasketTotals, BasketItem, Basket } from '../shared/models/basket';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiUrl;
  readonly basket = signal<IBasket | null>(null);
  readonly basketTotal = signal<BasketTotals | null>(null);
  readonly itemsCount = computed(() => this.basket()?.items.length ?? 0);
  readonly hasItems = computed(() => this.itemsCount() > 0);
  shipping = 0;

  constructor(private http: HttpClient) {
    effect(() => {
      const basket = this.basket();
      if (basket) {
        this.calculateTotals();
      }
    });
  }

  createPaymentIntent() {
    return this.http.post(this.baseUrl + 'payments/' + this.getCurrentBasketValue().id, {})
      .pipe(
        tap((basket: IBasket) => {
          this.basket.set(basket);
        })
      );
  }

  setShippingPrice(deiveryMethod: IDeliveryMethod) {
    this.shipping = deiveryMethod.price;
    const basket = this.getCurrentBasketValue();
    basket.deliveryMethodId = deiveryMethod.id;
    basket.shippingPrice = deiveryMethod.price;
    this.calculateTotals();
    return this.setBasket(basket);
  }

  getBasket(id: string) {
    return this.http.get<IBasket>(this.baseUrl + 'basket?id=' + id)
      .pipe(
        tap((basket) => {
          this.basket.set(basket);
          this.shipping = basket.shippingPrice ?? 0;
          this.calculateTotals();
        })
      );
  }

  setBasket(basket: IBasket) {
    return this.http.post<IBasket>(this.baseUrl + 'basket', basket).pipe(
      tap((response) => {
        this.basket.set(response);
        this.calculateTotals();
      })
    );
  }

  getCurrentBasketValue() {
    return this.basket();
  }

  addItemToBasket(item: Product, quantity = 1) {
    const itemToAdd: BasketItem = this.mapProductItemToBasketItem(item, quantity);
    let basket = this.getCurrentBasketValue();
    if (basket === null) {
      basket = this.createBasket();
    }
    basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
    return this.setBasket(basket);
  }

  incrementItemQuantity(item: BasketItem) {
    const basket = this.getCurrentBasketValue();
    if (!basket) {
      return;
    }
    const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
    basket.items[foundItemIndex].quantity++;
    return this.setBasket(basket);
  }

  decrementItemQuantity(item: BasketItem) {
    const basket = this.getCurrentBasketValue();
    if (!basket) {
      return;
    }
    const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
    if (basket.items[foundItemIndex].quantity > 1) {
      basket.items[foundItemIndex].quantity--;
      return this.setBasket(basket);
    }
    return this.removeItemFromBasket(item);
  }

  removeItemFromBasket(item: BasketItem) {
    const basket = this.getCurrentBasketValue();
    if (!basket || !basket.items.some(x => x.id === item.id)) {
      return;
    }
    basket.items = basket.items.filter(i => i.id !== item.id);
    if (basket.items.length > 0) {
      return this.setBasket(basket);
    }
    return this.deleteBasket(basket);
  }

  deleteLocalBasket(id: string) {
    this.basket.set(null);
    this.basketTotal.set(null);
    localStorage.removeItem('basket_id');
  }

  deleteBasket(basket: IBasket) {
    return this.http.delete(this.baseUrl + 'basket?id=' + basket.id).pipe(
      tap(() => {
        this.basket.set(null);
        this.basketTotal.set(null);
        localStorage.removeItem('basket_id');
      })
    );
  }

  private calculateTotals() {
    const basket = this.getCurrentBasketValue();
    if (!basket) {
      this.basketTotal.set(null);
      return;
    }
    const shipping = this.shipping;
    const subtotal = basket.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
    const total = subtotal + shipping;
    this.basketTotal.set({ shipping, total, subtotal });
  }

  private addOrUpdateItem(items: BasketItem[], itemToAdd: BasketItem, quantity: number): BasketItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }
    return items;
  }

  private createBasket(): IBasket {
    const basket = new Basket();
    localStorage.setItem('basket_id', basket.id);
    return basket;
  }

  private mapProductItemToBasketItem(item: Product, quantity: number): BasketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity,
      brand: item.productBrand,
      type: item.productType
    };
  }
}