import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-box',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})

export class InputBox implements OnInit {
  @Output() onInput: EventEmitter<any> = new EventEmitter<any>();

  @Input() type : string = 'text';
  @Input() title : string = '';
  @Input() list : any = [];
  @Input() class : string = '';
  @Input() style : any = null;
  @Input() disabled : boolean = false;
  @Input() more : boolean = false;
  @Input() search : boolean = false;
  @Input()
  set value(value:string) 
  {
    if(this.type === 'text')
    {
      this.valueText = value;
    }
    if(this.type === 'dropdown')
    {
      this.selectedDropdown = value;
    }
    if(this.type === 'dropinfo')
    {
      this.selectedDropinfo = value;
    }
    if(this.type === 'switch')
    {
      this.selectedSwitch = value === 'yes';
    }
    if(this.type === 'otp6')
    {
      if(value)
      {
        let arr : any = value.split('');
        
      }
    }
  }
  
  constructor(

  ) { }

  // text
  'valueText' : string = '';

  // date
  'valueDate' : string = '';

  // dropdown
  'selectedDropdown' : string = '';
  'showDropdown' : boolean = false;

  // dropinfo
  'selectedDropinfo' : string = '';
  'showDropinfo' : boolean = false;

  // switch
  'selectedSwitch' : boolean = false;

  // otp6
  'otp6Input' : any = ['', '', '', '', '', ''];



  ngOnInit(): void {
    
  }

  // dropdown
  toggleDropdown(event:any)
  {
    event.stopPropagation();
    if(this.class)
    {
      this.showDropdown = !this.showDropdown;
      if(this.showDropdown)
      {
        let dropdown : any = document.querySelector(`.dropdown_${this.class}`);
        let list : any = document.querySelector(`.dropdown_${this.class} > .list`);
        let cover : any = document.querySelector(`.dropdown_${this.class} > .list > .scroll > .cover`);
        if(dropdown && list && cover)
        {
          let d : any = dropdown.getBoundingClientRect();
          let l : any = list.getBoundingClientRect();
          let c : any = cover.getBoundingClientRect();
          let sh = screen.height;

          list.style.width = `${d.width}px`;
          list.style.left = `${d.left}px`;
          if(sh - d.bottom < c.height)
          {
            list.style.bottom = `${sh - d.bottom + 40}px`;
            list.style.top = 'auto';
          }
          else
          {
            list.style.top = `${d.bottom + 2}px`;
            list.style.bottom = 'auto';
          }
        }
        window.addEventListener('click', () =>
        {
          this.showDropdown = false;
        })
        window.addEventListener('scroll', () =>
        {
          this.showDropdown = false;
        })
      }
      else
      {
        window.removeEventListener('click', () => {});
        window.removeEventListener('scroll', () => {});
      } 
    }
  }
  selectDropdownItem(item:any)
  {
    this.onInput.emit(item);
  }

  // date
  checkDateIndicator(event:any)
  {
    this.valueDate = event.target.value;
  }

  // dropinfo
  toggleDropinfo(event:any)
  {
    event.stopPropagation();
    if(this.class)
    {
      this.showDropinfo = !this.showDropinfo;
      if(this.showDropinfo)
      {
        let dropinfo : any = document.querySelector(`.dropinfo_${this.class}`);
        let list : any = document.querySelector(`.dropinfo_${this.class} > .list`);
        let cover : any = document.querySelector(`.dropinfo_${this.class} > .list > .scroll > .cover`);
        if(dropinfo && list && cover)
        {
          let d : any = dropinfo.getBoundingClientRect();
          let l : any = list.getBoundingClientRect();
          let c : any = cover.getBoundingClientRect();
          let sh = screen.height;

          list.style.width = `${d.width}px`;
          list.style.left = `${d.left}px`;
          if(sh - d.bottom < c.height)
          {
            list.style.bottom = `${sh - d.bottom + 40}px`;
            list.style.top = 'auto';
          }
          else
          {
            list.style.top = `${d.bottom + 2}px`;
            list.style.bottom = 'auto';
          }
        }
        window.addEventListener('click', () =>
        {
          this.showDropinfo = false;
        });
        window.addEventListener('scroll', () =>
        {
          this.showDropinfo = false;
        });
      }
      else
      {
        window.removeEventListener('click', () => {});
        window.removeEventListener('scroll', () => {});
      } 
    }
  }
  selectDropinfoItem(item:any)
  {
    this.onInput.emit(item);
  }

  // switch
  switch(value:string)
  {
    this.onInput.emit(value);
  }

  // otp6
  onOtp6Input(event:any, id:number)
  {
    if(id < 6)
    {
      if(event.target.value && event.target.value.length === 1)
      {
        let input : any = document.querySelector(`input.otp6-${id + 1}`);
        if(input)
        {
          input.focus();
        }
      }
      else
      {
        if(id > 1)
        {
          let input : any = document.querySelector(`input.otp6-${id - 1}`);
          if(input)
          {
            input.focus();
          }
        }
      }
    }
    else
    {
      if(event.target.value && event.target.value.length === 1)
      {
        let input : any = document.querySelector(`input.otp6-${id}`);
        if(input)
        {
          input.blur();
        }
      }
      else
      {
        let input : any = document.querySelector(`input.otp6-${id - 1}`);
        if(input)
        {
          input.focus();
        }
      }
    }
    
  }
  onOtp6Focus(event:any, id:number)
  {
    let input : any = document.querySelector(`input.otp6-${id}`);
    if(input)
    {
      input.select();
    }
  }

}