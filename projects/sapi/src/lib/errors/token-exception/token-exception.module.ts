import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorCodes } from '../error-codes/error-codes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TokenException implements Error {
  name: string;
  message: string;
  code: ErrorCodes;
  stack?: string;

  constructor(code: ErrorCodes){
    this.code = code
  }

  setMessage(msg: string){
    this.message = msg
  }
}
