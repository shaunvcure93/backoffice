import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../../service/global.service';
import { ApiService } from '../../../service/api.service';

@Component({
  templateUrl: './incoming.page.html',
  styleUrls: ['./incoming.page.scss']
})
export class IncomingInvoicePage implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore,
    private ApiService: ApiService
  ) { }

  'filterForm' : any = {
    'status' : {
      'name' : '',
      'value': ''
    },
    'email' : '',
    'date'  : ''
  };
  'filterStatus' : any = [
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

  'tableData' : any = [
    {
      'title': 'ID',
      'param': 'id',
      'style': {'text-align' : 'left'},
      'type' : ''
    },
    {
      'title': 'Created On',
      'param': 'created_on',
      'style': {'text-align' : 'left'},
      'type' : ''
    },
    {
      'title': 'Invoice From',
      'param': 'invoice_from',
      'style': {'text-align' : 'left'},
      'type' : 'user'
    },
    {
      'title': 'Total',
      'param': 'total',
      'style': {'text-align' : 'left'},
      'type' : 'currency'
    },
    {
      'title': 'Paid',
      'param': 'paid',
      'style': {'text-align' : 'left'},
      'type' : 'currency'
    },
    {
      'title': 'Balance',
      'param': 'balance',
      'style': {'text-align' : 'left'},
      'type' : 'currency'
    },
    {
      'title': 'Due Date',
      'param': 'due_date',
      'style': {'text-align' : 'left'},
      'type' : ''
    },
    {
      'title': 'Status',
      'param': 'status',
      'style': {'text-align' : 'center'},
      'type' : 'status'
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
      'created_on' : '03 Mar 2024',
      'invoice_from' : {
        'title': 'John Smith',
        'desc' : 'john.smith@hotmail.com'
      },
      'total' : 1150.40,
      'paid'  : 200.00,
      'balance': 500.00,
      'due_date' : '26 Apr 2024',
      'status' : {
        'title' : 'Paid',
        'value' : 1,
        'color' : '#63c963'
      }
    },
    {
      'id' : '#A456345',
      'created_on' : '03 Mar 2024',
      'invoice_from' : {
        'title': 'John Smith',
        'desc' : 'john.smith@hotmail.com'
      },
      'total' : 1150.40,
      'paid'  : 200.00,
      'balance': 500.00,
      'due_date' : '26 Apr 2024',
      'status' : {
        'title' : 'Paid',
        'value' : 1,
        'color' : '#63c963'
      }
    },
    {
      'id' : '#A456345',
      'created_on' : '03 Mar 2024',
      'invoice_from' : {
        'title': 'John Smith',
        'desc' : 'john.smith@hotmail.com'
      },
      'total' : 1150.40,
      'paid'  : 200.00,
      'balance': 500.00,
      'due_date' : '26 Apr 2024',
      'status' : {
        'title' : 'Paid',
        'value' : 1,
        'color' : '#63c963'
      }
    },
    {
      'id' : '#A456345',
      'created_on' : '03 Mar 2024',
      'invoice_from' : {
        'title': 'John Smith',
        'desc' : 'john.smith@hotmail.com'
      },
      'total' : 1150.40,
      'paid'  : 200.00,
      'balance': 500.00,
      'due_date' : '26 Apr 2024',
      'status' : {
        'title' : 'Paid',
        'value' : 1,
        'color' : '#63c963'
      }
    },
    {
      'id' : '#A456345',
      'created_on' : '03 Mar 2024',
      'invoice_from' : {
        'title': 'John Smith',
        'desc' : 'john.smith@hotmail.com'
      },
      'total' : 1150.40,
      'paid'  : 200.00,
      'balance': 500.00,
      'due_date' : '26 Apr 2024',
      'status' : {
        'title' : 'Paid',
        'value' : 1,
        'color' : '#63c963'
      }
    },
    {
      'id' : '#A456345',
      'created_on' : '03 Mar 2024',
      'invoice_from' : {
        'title': 'John Smith',
        'desc' : 'john.smith@hotmail.com'
      },
      'total' : 1150.40,
      'paid'  : 200.00,
      'balance': 500.00,
      'due_date' : '26 Apr 2024',
      'status' : {
        'title' : 'Paid',
        'value' : 1,
        'color' : '#63c963'
      }
    },
    {
      'id' : '#A456345',
      'created_on' : '03 Mar 2024',
      'invoice_from' : {
        'title': 'John Smith',
        'desc' : 'john.smith@hotmail.com'
      },
      'total' : 1150.40,
      'paid'  : 200.00,
      'balance': 500.00,
      'due_date' : '26 Apr 2024',
      'status' : {
        'title' : 'Paid',
        'value' : 1,
        'color' : '#63c963'
      }
    },
    {
      'id' : '#A456345',
      'created_on' : '03 Mar 2024',
      'invoice_from' : {
        'title': 'John Smith',
        'desc' : 'john.smith@hotmail.com'
      },
      'total' : 1150.40,
      'paid'  : 200.00,
      'balance': 500.00,
      'due_date' : '26 Apr 2024',
      'status' : {
        'title' : 'Paid',
        'value' : 1,
        'color' : '#63c963'
      }
    },
    {
      'id' : '#A456345',
      'created_on' : '03 Mar 2024',
      'invoice_from' : {
        'title': 'John Smith',
        'desc' : 'john.smith@hotmail.com'
      },
      'total' : 1150.40,
      'paid'  : 200.00,
      'balance': 500.00,
      'due_date' : '26 Apr 2024',
      'status' : {
        'title' : 'Paid',
        'value' : 1,
        'color' : '#63c963'
      }
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

    this.ApiService.getInvoiceList({}).subscribe(
      (res: any) => {
        if(res.data && res.meta)
        {
          
        }
      },
      (error:any) =>
      {
        
      }
    );
  }
  showWallet()
  {
    this.showDialog = true;
    this.dialogTitle = 'Wallets';
    this.dialogWidth = 320;
    this.dialogType = 1;
  }
  depositCrypto()
  {
    this.showDialog = true;
    this.dialogTitle = 'Deposit Crypto';
    this.dialogWidth = 360;
    this.dialogType = 2;
  }
  closeDialog()
  {
    this.showDialog = false;
    this.cryptoData.map((item:any) =>
    {
      item.status = false;
    })
    this.dialogAction = null;
    this.dialogCancel = false;
  }
  onStatus(data:any)
  {
    this.filterForm.status.name = data.name;
    this.filterForm.status.value = data.value;
  }
  selectCrypto(data:any)
  {
    this.cryptoData.map((item:any) =>
    {
      if(item.code === data.code)
      {
        item.status = true;
        this.dialogCancel = true;
        this.dialogAction = {
          'class'   : 'green',
          'title'   : 'Use Wallet',
          'loading' : false
        }
      }
      else
      {
        item.status = false;
      }
    })
  }
  onDialogActionClick()
  {
    if(this.dialogType === 2)
    {
      this.dialogType = 3;
      this.dialogWidth = 280;
      this.dialogCancel = false;
      this.dialogAction = null;
      this.dialogAction = {
        'class'   : 'blue',
        'title'   : 'Done',
        'loading' : false
      }
    }
    else if(this.dialogType === 3)
    {
      this.showDialog = false;
    }
    else if(this.dialogType === 4)
    {
      this.dialogType = 5;
      this.dialogTitle = 'OTP Verification';
      this.dialogWidth = 320;
      this.resendCounter = 60;
      this.resendNote = `Resend OTP in ${this.resendCounter}s`;
      this.resendCount();
    }
    else if(this.dialogType === 5)
    {
      this.showDialog = false;
    }
  }
  resendCount()
  {
    if(this.resendCounter === 1)
    {
      this.resendCounter = 0;
      this.resendNote = 'Resend OTP';
    }
    else
    {
      this.resendCounter -= 1;
      this.resendNote = `Resend OTP in ${this.resendCounter}s`;
      this.resendTimer = setTimeout(() =>
      {
        clearTimeout(this.resendTimer);
        this.resendTimer = null;
        this.resendCount();
      }, 1000);
    }
  }
  withdrawCrypto()
  {
    this.showDialog = true;
    this.dialogTitle = 'Withdraw Crypto';
    this.dialogWidth = 400;
    this.dialogType = 4;
    this.dialogCancel = true;
    this.dialogAction = null;
    this.dialogAction = {
      'class'   : 'green',
      'title'   : 'Confirm',
      'loading' : false
    }
  }
  onToken(data:any)
  {
    this.withdrawForm.token.name = data.name;
    this.withdrawForm.token.value = data.value;
  }



}

