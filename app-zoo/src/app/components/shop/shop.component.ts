import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  title = 'Tienda'
  constructor() { }

  ngOnInit(): void {
    $('.texto-jq').hide();
    $('#btn-jq').click(function(){
      $('.texto-jq').slideToggle();
    })
  }

}
