import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations.component';
import { Product } from 'src/app/models/products.model';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [fadeIn]
})

export class ShopComponent implements OnInit {
  public passwdlCtrl = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]);

  title = 'Tienda';


  public products: Product[] = [
    {
      product: 'Lapiz',
      price: 2100,
      image: 'src/assets/images/shop/lapiz.jpg'
    },
    {
      product: 'tajalapiz',
      price: 5000,
      image: 'src/assets/images/shop/tajalapiz.jpg'
    }
  ];
  public product : string = ''
  public price : string = '';

  constructor() {

  }

  ngOnInit(): void {  }

  onSubmit(){  }

  addProduct(){}

  checkPassword(){

  }

  getFetch(){
    fetch('https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=af4aa873e8f4766178d0e99cdfa80f6a18e7eb46', {
      method: 'GET',
      headers: {

      },
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
}
