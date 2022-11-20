import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];

  constructor() { }

  ngOnInit(): void {
    this.products=[
      {id:'1', title:'T-shirt 1', quantity: 0, price: 18, like:0, picture:'https://contents.mediadecathlon.com/p2157319/k$45a8143f29ae498e05be9c1588d95135/tee-shirt-running-run-dry-rouge-cerise-fluo-homme.jpg?&f=452x452'},{id:'2', title:'T-shirt 2', quantity: 10, price: 18, like:0, picture:'https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/mode/pulls-gilets/pull-femme/pull-femme-bershka/93938155-1-fre-FR/Pull-femme-Bershka.jpg'},{id:'3', title:'T-shirt 3', quantity: 8, price: 20, like:0, picture:'https://celio.tn/media/catalog/product/t/h/the-simpsons-t-shirt-blanc-blanc-1115716-7-product_1.jpg'},
    ]
  }

  Buy(id:string){
      //this.products.map((product)=>{
    //if(product.id.match(id)) {
      //product.quantity=product.quantity-1;
    //}
  //})
  this.products.map((product)=>product.id.match(id)&&product.quantity--)
      //ki nebda bech na3mlou traitement sans else tkoun haka:
  //this.products.map((product)=>product.id.match(id)&&product.quantity--)

  }

}
