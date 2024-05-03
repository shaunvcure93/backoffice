import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss']
})
export class InvoicePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public router: Router
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
      'title': '',
      'param': '',
      'style': {'text-align' : 'left', 'width' : '52px'},
      'type' : 'selector'
    },
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
      'title': 'Invoice To',
      'param': 'invoice_to',
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
      'style': {'text-align' : 'center'},
      'type' : 'action'
    }
  ];
  'dataArray' : any = [
    {
      'id' : '#A456345',
      'created_on' : '03 Mar 2024',
      'invoice_to' : {
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
      'invoice_to' : {
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
      'invoice_to' : {
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
      'invoice_to' : {
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
      'invoice_to' : {
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
      'invoice_to' : {
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
      'invoice_to' : {
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
      'invoice_to' : {
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
      'invoice_to' : {
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

  ngOnInit(): void {

  }
  onStatus(data:any)
  {
    this.filterForm.status.name = data.name;
    this.filterForm.status.value = data.value;
  }

}

