import { Follower } from '../followers/followers'
import { Image } from '../image/image'
import { User } from '../user/user'
import { Paging } from '../paging/paging'
import { Track } from '../track/track'

export class Playlist {
  /*
  Returns true if context is not search and the owner allows other users to modify the playlist. Otherwise returns false.
  */
  private _collaborative:boolean
  /*
  The playlist description. Only returned for modified, verified playlists, otherwise null.
  */
  private _description:string
  /*
  Known external URLs for this playlist.
  */
  private _external_urls:{key:string, value:string}
  /*
  Information about the followers of the playlist.
  */
  private _followers:Follower
  /*
  A link to the Web API endpoint providing full details of the playlist.
  */
  private _href:string
  /*
  The Spotify ID for the playlist.
  */
  private _id:string
  /*
  Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See Working with Playlists.Note: If returned, the source URL for the image ( url ) is temporary and will expire in less than a day.
  */
  private _images:Image[]
  /*
  The name of the playlist.
  */
  private _name:string
  /*
  The user who owns the playlist
  */
  private _owner:User
  /*
  The playlist’s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists.
  */
  private _public:boolean | null
  /*
  The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version: see Remove tracks from a playlist
  */
  private _snapshot_id:string
  /*
  Information about the tracks of the playlist.
  */
  private _tracks:Paging<Track>
  /*
  The object type: “playlist”
  */
  private _type:string
  /*
  The Spotify URI for the playlist.
  */
  private _uri:string
  public get collaborative():boolean{
    return this._collaborative
  }
  public set collaborative(collaborative:boolean){
    this._collaborative=collaborative
  }
  public get description():string{
    return this._description
  }
  public set description(description:string){
    this._description=description
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
  public get name():string{
    return this._name
  }
  public set name(name:string){
    this._name=name
  }
  public get owner():User{
    return this._owner
  }
  public set owner(owner:User){
    this._owner=owner
  }
  public get public():boolean | null{
    return this._public
  }
  public set public(_public:boolean | null){
    this._public=_public
  }
  public get snapshot_id():string{
    return this._snapshot_id
  }
  public set snapshot_id(snapshot_id:string){
    this._snapshot_id=snapshot_id
  }
  public get tracks():Paging<Track>{
    return this._tracks
  }
  public set tracks(tracks:Paging<Track>){
    this._tracks=tracks
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
