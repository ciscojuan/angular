import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [fadeIn]
})

export class ShopComponent implements OnInit {
  showEvents = true
  title = 'Tienda'
  public state;
  constructor() {
    this.state = 'inactive';
   }

  ngOnInit(): void {
    $('.texto-jq').hide();
    $('#btn-jq').click(function(){
      $('.texto-jq').slideToggle();
    })
  }

}
