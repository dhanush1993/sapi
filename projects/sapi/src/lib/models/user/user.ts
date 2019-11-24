import { Follower } from '../followers/followers'
import { Image } from '../image/image'

export class User {
  /*
  The country of the user, as set in the user’s account profile. An ISO 3166-1 alpha-2 country code. This field is only available when the current user has granted access to the user-read-private scope.
  */
  private _country:string
  /*
  The name displayed on the user’s profile. null if not available.
  */
  private _display_name:string
  /*
  The user’s email address, as entered by the user when creating their account.Important! This email address is unverified; there is no proof that it actually belongs to the user.This field is only available when the current user has granted access to the user-read-email scope.
  */
  private _email:string
  /*
  Known external URLs for this user.
  */
  private _external_urls:{key:string, value:string}
  /*
  Information about the followers of the user.
  */
  private _followers:Follower
  /*
  A link to the Web API endpoint for this user.
  */
  private _href:string
  /*
  The Spotify user ID for the user
  */
  private _id:string
  /*
  The user’s profile image.
  */
  private _images:Image[]
  /*
  The user’s Spotify subscription level: “premium”, “free”, etc. (The subscription level “open” can be considered the same as “free”.)This field is only available when the current user has granted access to the user-read-private scope.
  */
  private _product:string
  /*
  The object type: “user”
  */
  private _type:string
  /*
  The Spotify URI for the user.
  */
  private _uri:string
  public get country():string{
    return this._country
  }
  public set country(country:string){
    this._country=country
  }
  public get display_name():string{
    return this._display_name
  }
  public set display_name(display_name:string){
    this._display_name=display_name
  }
  public get email():string{
    return this._email
  }
  public set email(email:string){
    this._email=email
  }
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
  public get product():string{
    return this._product
  }
  public set product(product:string){
    this._product=product
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
