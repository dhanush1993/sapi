export class Error {
  /*
  The HTTP status code (also returned in the response header; see Response Status Codes for more information).
  */
  private _status:number
  /*
  A short description of the cause of the error.
  */
  private _message:string
  public get status():number{
    return this._status
  }
  public set status(status:number){
    this._status=status
  }
  public get message():string{
    return this._message
  }
  public set message(message:string){
    this._message=message
  }
 }
