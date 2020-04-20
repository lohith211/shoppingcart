import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-productlist',
	templateUrl: './productlist.component.html',
	styleUrls: [ './productlist.component.css' ]
})
export class ProductlistComponent implements OnInit {
	totalqty: number = 0;
	totalprice: number = 0;
	@ViewChild('modaldailog') modal: ElementRef;
	@Input() products: any = [];

	constructor() {}
	ngOnInit() {}

	increment(qty, price) {
		qty.value = parseInt(qty.value) + 1;
		this.totalqty = this.totalqty + 1;
		this.totalprice = parseInt(price.value) * this.totalqty;
	}

	decrement(qty, price) {
		if (qty.value != 0) {
			qty.value = parseInt(qty.value) - 1;
			this.totalqty = this.totalqty - 1;
			this.totalprice = parseInt(price.value) * this.totalqty;
		}
	}

	addtocart(qty, price) {
		this.increment(qty, price);
	}
	checkoutmodal() {
		this.modal.nativeElement.style.display = 'block';
	}
	closemodal() {
		this.modal.nativeElement.style.display = 'none';
	}
}
