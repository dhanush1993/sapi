export class PlayerError extends Error {
  /*
  One of the predefined player error reasons.
  */
  private _reason:string

  public get reason():string{
    return this._reason
  }
  public set reason(reason:string){
    this._reason=reason
  }

 }
