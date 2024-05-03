import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { GlobalStore } from '../../service/global.service';

@Component({
  selector: 'main-layout',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainLayout implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) {
    // this.router.events.subscribe((event:any) => 
    // {   
    //   if(event instanceof NavigationEnd)
    //   {
    //     // check on login status
    //     if(event.url.includes('?'))
    //     {
    //       let url = event.url.split('?')[0];
    //       if(url !== '/login')
    //       {
    //         this.checkStatus();
    //       }
    //     }
    //     else
    //     {
    //       if(event.url !== '/login')
    //       {
    //         this.checkStatus();
    //       }
    //     }
    //   } 
    // });
  }

  'menuData' : any = [
    {
      'id'    : 1,
      'name'  : 'Invoice',
      'code'  : 'invoice',
      'icon'  : 'receipt_long',
      'route' : '',
      'list'  : [
        {
          'id'   : 1,
          'name' : 'Incoming Invoice',
          'code' : 'incoming_invoice',
          'route': '/invoice/incoming'
        },
        {
          'id'   : 2,
          'name' : 'Outgoing Invoice',
          'code' : 'outgoing_invoice',
          'route': '/invoice/outgoing'
        }
      ],
      'show'  : false
    },
    {
      'id'    : 2,
      'name'  : 'Inventory',
      'code'  : 'inventory',
      'route' : '/inventory',
      'icon'  : 'inventory_2',
      'list'  : [],
      'show'  : false
    },
    {
      'id'    : 3,
      'name'  : 'Products Template',
      'code'  : 'template',
      'route' : '/template',
      'icon'  : 'extension',
      'list'  : [],
      'show'  : false
    },
    {
      'id'    : 4,
      'name'  : 'Customer',
      'code'  : 'customer',
      'route' : '/customer',
      'icon'  : 'person',
      'list'  : [],
      'show'  : false
    }
  ];

  ngOnInit(): void {
  }



  selectMainBox(data:any)
  {
    if(data.list && data.list.length > 0)
    {
      this.menuData.map((ele:any, index:number) =>
      {
        if(ele.id === data.id)
        {
          ele.show = !ele.show;
        }
        else
        {
          ele.show = false;
        }
      });
    }
    else
    {
      this.global.navigate(data.route)
    }
  }




}

