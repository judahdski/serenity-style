import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
    cart: Cart = {
        items: [
            {
                product: 'https://via.placeholder.com/150',
                name: 'snickers',
                price: 150,
                quantity: 21,
                id: 1,
            },
            {
                product: 'https://via.placeholder.com/150',
                name: 'shoes',
                price: 2000,
                quantity: 5,
                id: 1,
            },
        ],
    };
    displayedColumns: Array<string> = ['product', 'name', 'price', 'quantity', 'total', 'action'];
    dataSource: Array<CartItem> = [];

    ngOnInit(): void {
        this.dataSource = this.cart.items;
    }

    getTotal(items: CartItem[]): number {
        return items.map(({ price, quantity }) => price * quantity).reduce((prev, current) => prev + current, 0);
    }
}
