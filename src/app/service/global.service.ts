import { Injectable } from '@angular/core';

@Injectable()
export class GlobalStore {
  constructor(
  ) { }

  'notification': any     = null;
  'dialog'      : any     = null;
  'loader'      : boolean = false;
  'currency'    : any  = {
    'title' : 'US Dollar',
    'code'  : '$',
    'value' : 'USD'
  };

  'loginStatus' : boolean = false;
  'userInfo'    : any = null;

  navigate(route:string)
  {
    window.location.href = `${route}`;
  }
}