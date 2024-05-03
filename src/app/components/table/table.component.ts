import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalStore } from '../../service/global.service';

@Component({
  selector: 'table-list',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})

export class TableList implements OnInit {
  @Input() list : any = [];
  @Input()
  set data(data:any) 
  {
    if(data && data.length > 0)
    {
      let arr : any = JSON.parse(JSON.stringify(data));
      let array : any = [];
      arr.map((item:any, index:number) =>
      {
        let obj : any = JSON.parse(JSON.stringify(item));
        obj.own_item_index = index;
        obj.own_item_select = false; 

        array.push(obj);
      })
      this.dataArray = array;
    }
  }
  @Input() pagi : any = null;
  
  constructor(
    public global : GlobalStore
  ) { }

  'dataArray' : any = [];
  'selectedAll' : boolean = false;
  'searchPage' : string = '';

  ngOnInit(): void {
    
  }
  
  selectAll()
  {
    this.selectedAll = !this.selectedAll;
    this.dataArray.map((item:any) =>
    {
      item.own_item_select = this.selectedAll;
    })
  }
  selectOne(data:any)
  {
    this.dataArray.map((item:any, index:number) =>
    {
      if(index === data.own_item_index)
      {
        item.own_item_select = !item.own_item_select;
      }
    })

    let falseIndex : any = this.dataArray.findIndex((x:any) => x.own_item_select === false);
    if(falseIndex > -1)
    {
      this.selectedAll = false;
    }
    else
    {
      this.selectedAll = true;
    }
  }

}