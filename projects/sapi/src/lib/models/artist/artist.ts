import { Follower } from '../followers/followers'
import { Image } from '../image/image'

export class Artist {
  /*
  Known external URLs for this artist.
  */
  private _external_urls:{key:string, value:string}
  /*
  Information about the followers of the artist.
  */
  private _followers:Follower
  /*
  A list of the genres the artist is associated with. For example: "Prog Rock" , "Post-Grunge". (If not yet classified, the array is empty.)
  */
  private _genres:string[]
  /*
  A link to the Web API endpoint providing full details of the artist.
  */
  private _href:string
  /*
  The Spotify ID for the artist.
  */
  private _id:string
  /*
  Images of the artist in various sizes, widest first.
  */
  private _images:Image[]
  /*
  The name of the artist
  */
  private _name:string
  /*
  The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist’s popularity is calculated from the popularity of all the artist’s tracks.
  */
  private _popularity:number
  /*
  The object type: "artist"
  */
  private _type:string
  /*
  The Spotify URI for the artist.
  */
  private _uri:string
  public get external_urls():{key:string, value:string}{
    return this._external_urls
  }
  public set external_urls(external_urls:{key:string, value:string}){
    this._external_urls=external_urls
  }
  public get followers():Follower{
    return this._followers
  }
  public set followers(followers:Follower){
    this._followers=followers
  }
  public get genres():string[]{
    return this._genres
  }
  public set genres(genres:string[]){
    this._genres=genres
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
  public get images():Image[]{
    return this._images
  }
  public set images(images:Image[]){
    this._images=images
  }
  public get name():string{
    return this._name
  }
  public set name(name:string){
    this._name=name
  }
  public get popularity():number{
    return this._popularity
  }
  public set popularity(popularity:number){
    this._popularity=popularity
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
