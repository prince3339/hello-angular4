import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //items = [];
  newItem = "";
  item = "";

  constructor() { }

  @Input() items = [];
  @Output() addNewItemFromOutSide = new EventEmitter<String>();

  addNewItem() {
    this.newItem = this.item;
    this.addNewItemFromOutSide.emit(this.newItem);
    
  }

  ngOnInit() {
  }

}


