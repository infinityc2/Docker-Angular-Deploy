import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item/item.service'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Array<any>
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAllItem().subscribe(data => {
      this.items = data
    })
  }

}
