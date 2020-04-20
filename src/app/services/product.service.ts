import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
	// Local variable which stores
	public cartItems = [];
	public products = new Subject();

	constructor(private http: HttpClient) {}
	getProducts() {
		//console.log(this.API_URL + '?page=' + pageno);
		return this.http.get('../assets/data/products.json');
	}
}
