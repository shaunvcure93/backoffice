import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dialog-pop',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})

export class DialogPop implements OnInit {
  @Output() onAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  @Input() title : string = '';
  @Input() width : number = 400;
  @Input() text : string = '';
  @Input() close : boolean = true;
  @Input() action : any = null;
  @Input() show : boolean = false;
  
  constructor(

  ) { }

  ngOnInit(): void {
    
  }
  closeDialog()
  {
    this.onClose.emit();
  }
  onClickAction()
  {
    this.onAction.emit();
  }

}