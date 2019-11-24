export class Paging<E>{ 
  /*
  A link to the Web API endpoint returning the full result of the request.
  */
  private _href:string
  /*
  The requested data.
  */
  private _items:E[]
  /*
  The maximum number of items in the response (as set in the query or by default).
  */
  private _limit:number
  /*
  URL to the next page of items. ( null if none)
  */
  private _next:string
  /*
  The offset of the items returned (as set in the query or by default).
  */
  private _offset:number
  /*
  URL to the previous page of items. ( null if none)
  */
  private _previous:string
  /*
  The maximum number of items available to return.
  */
  private _total:number
  public get href():string{
    return this._href
  }
  public set href(href:string){
    this._href=href
  }
  public get items():E[]{
    return this._items
  }
  public set items(items:E[]){
    this._items=items
  }
  public get limit():number{
    return this._limit
  }
  public set limit(limit:number){
    this._limit=limit
  }
  public get next():string{
    return this._next
  }
  public set next(next:string){
    this._next=next
  }
  public get offset():number{
    return this._offset
  }
  public set offset(offset:number){
    this._offset=offset
  }
  public get previous():string{
    return this._previous
  }
  public set previous(previous:string){
    this._previous=previous
  }
  public get total():number{
    return this._total
  }
  public set total(total:number){
    this._total=total
  }
}
