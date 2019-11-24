import { Album } from '../album/album'
import { Artist } from '../artist/artist'
import { TrackLink } from '../track-link/track-link'

export class Track {
  /*
  The album on which the track appears. The album object includes a link in href to full information about the album.
  */
  private _album:Album
  /*
  The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
  */
  private _artists:Artist[]
  /*
  A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code.
  */
  private _available_markets:string[]
  /*
  The disc number (usually 1 unless the album consists of more than one disc).
  */
  private _disc_number:number
  /*
  The track length in milliseconds.
  */
  private _duration_ms:number
  /*
  Whether or not the track has explicit lyrics ( true = yes it does; false = no it does not OR unknown).
  */
  private _explicit:Boolean
  /*
  Known external IDs for the track.
  */
  private _external_ids:{key:string, value:string}
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
  Part of the response when Track Relinking is applied. If true , the track is playable in the given market. Otherwise false.
  */
  private _is_playable:boolean
  /*
  Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track.
  */
  private _linked_from:TrackLink
  /*
  Part of the response when Track Relinking is applied, the original track is not available in the given market, and Spotify did not have any tracks to relink it with. The track response will still contain metadata for the original track, and a restrictions object containing the reason why the track is not available: "restrictions" : {"reason" : "market"}
  */
  private _restrictions:{key:string, value:string}
  /*
  The name of the track.
  */
  private _name:string
  /*
  The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. Note that the popularity value may lag actual popularity by a few days: the value is not updated in real time.
  */
  private _popularity:number
  /*
  A link to a 30 second preview (MP3 format) of the track. Can be null
  */
  private _preview_url:string
  /*
  The number of the track. If an album has several discs, the track number is the number on the specified disc.
  */
  private _track_number:number
  /*
  The object type: “track”.
  */
  private _type:string
  /*
  The Spotify URI for the track.
  */
  private _uri:string
  /*
  Whether or not the track is from a local file.
  */
  private _is_local:boolean
  public get album():Album{
    return this._album
  }
  public set album(album:Album){
    this._album=album
  }
  public get artists():Artist[]{
    return this._artists
  }
  public set artists(artists:Artist[]){
    this._artists=artists
  }
  public get available_markets():string[]{
    return this._available_markets
  }
  public set available_markets(available_markets:string[]){
    this._available_markets=available_markets
  }
  public get disc_number():number{
    return this._disc_number
  }
  public set disc_number(disc_number:number){
    this._disc_number=disc_number
  }
  public get duration_ms():number{
    return this._duration_ms
  }
  public set duration_ms(duration_ms:number){
    this._duration_ms=duration_ms
  }
  public get explicit():Boolean{
    return this._explicit
  }
  public set explicit(explicit:Boolean){
    this._explicit=explicit
  }
  public get external_ids():{key:string, value:string}{
    return this._external_ids
  }
  public set external_ids(external_ids:{key:string, value:string}){
    this._external_ids=external_ids
  }
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
  public get is_playable():boolean{
    return this._is_playable
  }
  public set is_playable(is_playable:boolean){
    this._is_playable=is_playable
  }
  public get linked_from():TrackLink{
    return this._linked_from
  }
  public set linked_from(linked_from:TrackLink){
    this._linked_from=linked_from
  }
  public get restrictions():{key:string, value:string}{
    return this._restrictions
  }
  public set restrictions(restrictions:{key:string, value:string}){
    this._restrictions=restrictions
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
  public get preview_url():string{
    return this._preview_url
  }
  public set preview_url(preview_url:string){
    this._preview_url=preview_url
  }
  public get track_number():number{
    return this._track_number
  }
  public set track_number(track_number:number){
    this._track_number=track_number
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
  public get is_local():boolean{
    return this._is_local
  }
  public set is_local(is_local:boolean){
    this._is_local=is_local
  }
  ​
 }
