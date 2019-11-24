import { Artist } from '../artist/artist'

export class TrackLink {
  /*
  Known external URLs for this track.
  */
  private _external_urls:{key:string, value:string}
  /*
  A link to the Web API endpoint providing full details of the track.
  */
  private _href:string
  /*
  The Spotify ID for the track.
  */
  private _id:string
  /*
  The object type: “track”.
  */
  private _type:string
  /*
  The Spotify URI for the track.
  */
  private _uri:string
  public get external_urls():{key:string, value:string}{
    return this._external_urls
  }
  public set external_urls(external_urls:{key:string, value:string}){
    this._external_urls=external_urls
  }
  public get href():string{
    return this._href
  }
  public set href(href:string){
    this._href=href
  }
  public get id():string{
    return this._id
  }
  public set id(id:string){
    this._id=id
  }
  public get type():string{
    return this._type
  }
  public set type(type:string){
    this._type=type
  }
  public get uri():string{
    return this._uri
  }
  public set uri(uri:string){
    this._uri=uri
  }
 }
