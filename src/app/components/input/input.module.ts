import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBox } from './input.component';
import { SharedModule } from '../../shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        InputBox
    ]
})
export class BannerModule { }
