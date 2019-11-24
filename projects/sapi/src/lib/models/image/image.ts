export class Image {
  /*
  The image height in pixels. If unknown: null or not returned.
  */
  private _height:number
  /*
  The source URL of the image.
  */
  private _url:string
  /*
  The image width in pixels. If unknown: null or not returned.
  */
  private _width:number
  public get height():number{
    return this._height
  }
  public set height(height:number){
    this._height=height
  }
  public get url():string{
    return this._url
  }
  public set url(url:string){
    this._url=url
  }
  public get width():number{
    return this._width
  }
  public set width(width:number){
    this._width=width
  }
 }
