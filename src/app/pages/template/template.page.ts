import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../service/global.service';

@Component({
  templateUrl: './template.page.html',
  styleUrls: ['./template.page.scss']
})
export class TemplatePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) { }

  'filterForm' : any = {
    'name' : ''
  };

  'tableData' : any = [
    {
      'title': 'ID',
      'param': 'id',
      'style': {'text-align' : 'left'},
      'type' : ''
    },
    {
      'title': 'Name',
      'param': 'name',
      'style': {'text-align' : 'left'},
      'type' : ''
    },
    {
      'title': 'No. of Products',
      'param': 'item',
      'style': {'text-align' : 'center'},
      'type' : ''
    },
    {
      'title': 'Total Price',
      'param': 'total_price',
      'style': {'text-align' : 'left'},
      'type' : 'currency'
    },
    {
      'title': 'Created On',
      'param': 'created_on',
      'style': {'text-align' : 'left'},
      'type' : ''
    },
    {
      'title': '',
      'param': '',
      'style': {'text-align' : 'right'},
      'type' : 'action'
    }
  ];
  'dataArray' : any = [
    {
      'id' : '#A456345',
      'name': 'Template Name One',
      'total_price' : 2000.00,
      'item': 10,
      'created_on' : '03 Mar 2024'
    },
    {
      'id' : '#A456345',
      'name': 'Template Name Two',
      'total_price' : 288.00,
      'item': 2,
      'created_on' : '03 Mar 2024'
    },
    {
      'id' : '#A456345',
      'name': 'Template Name Three',
      'total_price' : 1001.00,
      'item': 19,
      'created_on' : '03 Mar 2024'
    },
    {
      'id' : '#A456345',
      'name': 'Template Name Four',
      'total_price' : 500.00,
      'item': 7,
      'created_on' : '03 Mar 2024'
    }
  ];
  'dialogAction' : any = null;
  'dialogCancel': boolean = false;
  'showDialog' : boolean = false;
  'dialogTitle' : string = '';
  'dialogWidth' : number = 0;
  'dialogType' : number = 0;
  'cryptoData' : any = [
    {
      'name'  : 'ECP-20',
      'amount': 208.99,
      'code'  : 'ECP20',
      'icon'  : '',
      'status': false
    },
    {
      'name'  : 'TEE-20',
      'amount': 1048.24,
      'code'  : 'TEE20',
      'icon'  : '',
      'status': false
    },
    {
      'name'  : 'Bitcoin',
      'amount': 20.11,
      'code'  : 'BTC',
      'icon'  : '',
      'status': false
    },
    {
      'name'  : 'Sushi',
      'amount': 102.66,
      'code'  : 'SSH',
      'icon'  : '',
      'status': false
    }
  ];
  'withdrawForm': any = {
    'token': {
      'value': '',
      'name' : ''
    },
    'qty' : '',
    'address': ''
  };
  'tokenData' : any = [
    {
      'name'  : 'ECP (ECP-20) - USDT',
      'value' : 'ECP20',
      'amount': 208.99,
      'code'  : 'ECP20',
      'icon'  : '',
      'status': false
    },
    {
      'name'  : 'BTC (BITCOIN) - USDT',
      'value' : 'BTC',
      'amount': 208.99,
      'code'  : 'ECP20',
      'icon'  : '',
      'status': false
    }
  ];
  'resendNote' : string = 'Resend OTP';
  'resendTimer' : any = null;
  'resendCounter' : number = 0;

  ngOnInit(): void {

  }
  onStatus(data:any)
  {
    this.filterForm.status.name = data.name;
    this.filterForm.status.value = data.value;
  }

}

