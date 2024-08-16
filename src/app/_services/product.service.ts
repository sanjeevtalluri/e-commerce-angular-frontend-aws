import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from '../_model/order-details.model';
import { MyOrderDetails } from '../_model/order.model';
import { Product } from '../_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  //PATH_OF_API = 'http://localhost:5000';
  PATH_OF_API= 'http://springbootapi-env.eba-asmcd5bv.us-east-1.elasticbeanstalk.com';
  constructor(private httpClient: HttpClient) { }

  public createTransaction(amount) {
    return this.httpClient.get(this.PATH_OF_API+"/createTransaction/"+amount);
  }

  public markAsDelivered(orderId) {
      return this.httpClient.get(this.PATH_OF_API+"/markOrderAsDelivered/"+orderId)
  }

  public getAllOrderDetailsForAdmin(status: string): Observable<MyOrderDetails[]> {
    return this.httpClient.get<MyOrderDetails[]>(this.PATH_OF_API+"/getAllOrderDetails/"+status);
  }

  public getMyOrders(): Observable<MyOrderDetails[]> {
    return this.httpClient.get<MyOrderDetails[]>(this.PATH_OF_API+"/getOrderDetails");
  }

  public deleteCartItem(cartId) {
    return this.httpClient.delete(this.PATH_OF_API+"/deleteCartItem/"+cartId);
  }

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>(this.PATH_OF_API+"/addNewProduct", product);
  }

  public getAllProducts(pageNumber, searchKeyword: string = "") {
    return this.httpClient.get<Product[]>(this.PATH_OF_API+"/getAllProducts?pageNumber="+pageNumber+"&searchKey="+searchKeyword);
  }

  public getProductDetailsById(productId) {
    return this.httpClient.get<Product>(this.PATH_OF_API+"/getProductDetailsById/"+productId);
  }

  public deleteProduct(productId: number) {
    return this.httpClient.delete(this.PATH_OF_API+"/deleteProductDetails/"+productId);
  }

  public getProductDetails(isSingleProductCheckout, productId) {
    return this.httpClient.get<Product[]>(this.PATH_OF_API+"/getProductDetails/"+isSingleProductCheckout+"/"+productId);
  }

  public placeOrder(orderDetails: OrderDetails, isCartCheckout) {
    return this.httpClient.post(this.PATH_OF_API+"/placeOrder/"+isCartCheckout, orderDetails);
  }

  public addToCart(productId) {
    return this.httpClient.get(this.PATH_OF_API+"/addToCart/"+productId);
  }

  public getCartDetails() {
    return this.httpClient.get(this.PATH_OF_API+"/getCartDetails");
  }
}
