export class Context { 
  /*
  The object type, e.g. “artist”, “playlist”, “album”.
  */
  private _type:string
  /*
  A link to the Web API endpoint providing full details of the track.
  */
  private _href:string
  /*
  External URLs for this context.
  */
  private _external_urls: {key:string, value:string}
  /*
  The Spotify URI for the context.
  */
  private _uri:string
  public get type():string{
    return this._type
  }
  public set type(type:string){
    this._type=type
  }
  public get href():string{
    return this._href
  }
  public set href(href:string){
    this._href=href
  }
  public get external_urls(): {key:string, value:string}{
    return this._external_urls
  }
  public set external_urls(external_urls: {key:string, value:string}){
    this._external_urls=external_urls
  }
  public get uri():string{
    return this._uri
  }
  public set uri(uri:string){
    this._uri=uri
  }
}
