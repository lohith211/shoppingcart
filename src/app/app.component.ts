import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { UpdateService } from './services/Update.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'shoppingcart';
	products: any;

	constructor(private Productservice: ProductService, private sw: UpdateService) {
		this.sw.checkForUpdates();
	}
	ngOnInit(): void {
		this.Productservice.getProducts().subscribe((data) => (this.products = data));
	}
}
