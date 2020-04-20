import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
	constructor(private http: HttpClient) {}
	getProducts() {
		//console.log(this.API_URL + '?page=' + pageno);
		return this.http.get('../assets/data/products.json');
	}
}
