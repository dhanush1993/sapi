export class Follower {
  /*
  A link to the Web API endpoint providing full details of the followers; null if not available. Please note that this will always be set to null, as the Web API does not support it at the moment.
  */
  private _href:string
  /*
  The total number of followers.
  */
  private _total:number
  public get href():string{
    return this._href
  }
  public set href(href:string){
    this._href=href
  }
  public get total():number{
    return this._total
  }
  public set total(total:number){
    this._total=total
  }
 }
