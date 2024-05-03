import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stepper-box',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})

export class StepperBox implements OnInit {
  @Output() onStep: EventEmitter<any> = new EventEmitter<any>();

  @Input() step : number = 1;
  @Input() data : any = [];
  @Input() style : any = null;
  
  constructor(

  ) { }

  ngOnInit(): void {
    
  }
  selectStep(data:any)
  {
    this.onStep.emit(data);
  }

}