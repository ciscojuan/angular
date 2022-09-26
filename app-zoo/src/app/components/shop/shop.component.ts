import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  title = 'Tienda'
  constructor() { }

  ngOnInit(): void {
    console.log('Componente Tienda Lanzado !!!')
  }

}
