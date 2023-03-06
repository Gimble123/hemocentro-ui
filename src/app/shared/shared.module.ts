import { CpfPipe } from './cpf-pipe/cpf.pipe';
import { MessageComponent } from './message/message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone-pipe/phone.pipe';

@NgModule({
  declarations: [
    MessageComponent,
    CpfPipe,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageComponent,
    CpfPipe,
    PhonePipe
  ]
})
export class SharedModule { }
