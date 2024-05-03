import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../../service/global.service';

@Component({
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss']
})
export class AddInvoicePage implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) { }

  'step' : number = 1;
  'stepData' : any = [
    {
      'number' : 1,
      'text'   : 'Invoice Infomation',
      'status' : false
    },
    {
      'number' : 2,
      'text'   : 'Customer (Invoice To)',
      'status' : false
    },
    {
      'number' : 3,
      'text'   : 'Products & Services',
      'status' : false
    },
    {
      'number' : 4,
      'text'   : 'Confirmation',
      'status' : false
    }
  ];
  'formData' : any = {
    'title': '',
    'invoice_number': '',
    'receiver'      : {
      'new'  : 'no',
      'name' : '',
      'email': ''
    },
    'issue_date'  : '',
    'due_date'   : '',
    'status'     : {
      'name' : '',
      'value': ''
    },
    'description': '',
    'round_off' : false,
    'product' : []
  };
  'productForm': any = {
    'invoice_number'    : '',
    'title'             : '',
    'desc'              : '',
    'value'             : '',
    'name'              : '',
    'qty'               : '',
    'discount_type'     : '',
    'discount_type_name': '',
    'discount'          : '',
    'rate'              : '',
    'tax'               : '',
    'amount'            : ''
  };
  'productData': any = [
    {
      'id'                : 1,
      'title'             : '1 XiaoMi Watch with 10% discount',
      'desc'              : 'Rate: 120, Tax: 0',
      'value'             : 1,
      'name'              : 'XiaoMi Watch',
      'qty'               : 1,
      'discount_type'     : 1,
      'discount_type_name': 'Percentage',
      'discount'          : 10,
      'rate'              : 120,
      'tax'               : 0,
      'amount'            : 120
    },
    {
      'id'                : 2,
      'title'             : '1 XiaoMi Watch without discount',
      'desc'              : 'Rate: 120, Tax: 0',
      'value'             : 1,
      'name'              : 'XiaoMi Watch',
      'qty'               : 1,
      'discount_type'     : 0,
      'discount_type_name': '',
      'discount'          : 0,
      'rate'              : 120,
      'tax'               : 0,
      'amount'            : 120
    },
    {
      'id'                : 3,
      'title'             : '3 Samsung A20 with discount $10',
      'desc'              : 'Rate: 120, Tax: 0',
      'value'             : 1,
      'name'              : 'Samsung A20',
      'qty'               : 3,
      'discount_type'     : 2,
      'discount_type_name': 'Fixed',
      'discount'          : 10,
      'rate'              : 120,
      'tax'               : 0,
      'amount'            : 120
    }
  ];
  'discountData': any = [
    {
      'name' : 'Percentage %',
      'value': 1
    },
    {
      'name' : 'Fixed',
      'value': 2
    }
  ];
  'statusData' : any = [
    {
      'name': 'Paid',
      'value': 1
    },
    {
      'name': 'Overdue',
      'value': 2
    },
    {
      'name': 'Cancelled',
      'value': 3
    },
    {
      'name': 'Unpaid',
      'value': 4
    },
    {
      'name': 'Partally Pay',
      'value': 5
    },
    {
      'name': 'Refunded',
      'value': 6
    }
  ];
  'customerData' : any = [
    {
      'title' : 'John Smith',
      'desc' : 'john.smith@hotmail.com',
      'value' : 1
    },
    {
      'title' : 'Sean Wong',
      'desc': 'sean999@gmail.com',
      'value' : 2
    },
    {
      'title' : 'Lee Ling Kok',
      'desc': 'llk93@gmail.com',
      'value' : 3
    }
  ];
  'summaryData' : any = {
    'taxable_amount'  : 0,
    'discount'        : 0,
    'round_off_amount': 0,
    'total_amount'    : 0
  }

  ngOnInit(): void {

  }
  selectStep(data:any)
  {
    this.step = data.number;
  }

  onReceiver(event:any)
  {
    this.formData.receiver.name = event.title;
    this.formData.receiver.email = event.desc;
  }
  onStatus(data:any)
  {
    this.formData.status.name = data.name;
    this.formData.status.value = data.value;
  }
  onProduct(data:any)
  {
    this.productForm = {
      'id'                : data.id,
      'title'             : data.title,
      'desc'              : data.desc,
      'value'             : data.value,
      'name'              : data.name,
      'qty'               : data.qty,
      'discount_type'     : data.discount_type,
      'discount_type_name': data.discount_type_name,
      'discount'          : data.discount,
      'rate'              : data.rate,
      'tax'               : data.tax,
      'amount'            : data.amount
    };
  }
  onDiscountType(data:any)
  {
    this.productForm.discount_type = data.value;
    this.productForm.discount_type_name = data.name;
  }

  addProduct(num:number)
  {
    let obj : any = JSON.parse(JSON.stringify(this.productForm));
    obj.index = this.formData.product.length;
    this.formData.product.push(obj);
    this.productForm.title = '';
    this.productForm = {
      'id'                : '',
      'title'             : '',
      'desc'              : '',
      'value'             : '',
      'name'              : '',
      'qty'               : '',
      'discount_type'     : '',
      'discount_type_name': '',
      'discount'          : '',
      'rate'              : '',
      'tax'               : '',
      'amount'            : ''
    }
  }
  checkDiscountByType(data:any)
  {
    if(data.discount_type == 1 && data.discount_type_name)
    {
      return `${data.discount}%`;
    }
    else if(data.discount_type == 0 && data.discount_type_name)
    {
      return `${this.global.currency.code} ${data.discount}`
    }
    else
    {
      return '0'
    }
  }
  removeProduct(data:any)
  {
    this.formData.product.splice(data.index, 1);
    this.formData.product.map((item:any, index:number) =>
    {
      item.index = index;
    });
  }


}

