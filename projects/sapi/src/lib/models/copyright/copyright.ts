export class Copyright {
  /*
  The copyright text for this album.
  */
  private _text:string
  /*
  The type of copyright: C = the copyright, P = the sound recording (performance) copyright.
  */
  private _type:string
  public get text():string{
    return this._text
  }
  public set text(text:string){
    this._text=text
  }
  public get type():string{
    return this._type
  }
  public set type(type:string){
    this._type=type
  }
 }
