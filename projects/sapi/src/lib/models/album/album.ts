import { Artist } from '../artist/artist';
import { Copyright } from '../copyright/copyright';
import { Image } from '../image/image';
import { Track } from '../track/track';
import { Paging } from '../paging/paging';

export class Album {
  /*
   The type of the album: one of "album" , "single" , or "compilation".
  */
  private _album_type: string;
  /*
  The artists of the album. Each artist object includes a link in href to more detailed information about the artist.
  */
  private _artists: Artist[];
  /*
  The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
  */
  private _available_markets:string[]
  /*
  The copyright statements of the album.
  */
  private _copyrights:Copyright[]
  /*
  Known external IDs for the album.
  */
  private _external_ids:{key:string, value:string}
  /*
  Known external URLs for this album.
  */
  private _external_urls:{key:string, value:string}
  /*
  A list of the genres used to classify the album. For example: "Prog Rock" , "Post-Grunge". (If not yet classified, the array is empty.)
  */
  private _genres:string[]
  /*
  A link to the Web API endpoint providing full details of the album.
  */
  private _href:string
  /*
  The Spotify ID for the album.
  */
  private _id:string
  /*
  The cover art for the album in various sizes, widest first.
  */
  private _images:Image[]
  /*
  The label for the album.
  */
  private _label:string
  /*
  The name of the album. In case of an album takedown, the value may be an empty string.
  */
  private _name:string
  /*
  The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated from the popularity of the album’s individual tracks.
  */
  private _popularity:number
  /*
  The date the album was first released, for example 1981. Depending on the precision, it might be shown as 1981-12 or 1981-12-15.
  */
  private _release_date:string
  /*
  The precision with which release_date value is known: year , month , or day.
  */
  private _release_date_precision:string
  /*
  Part of the response when Track Relinking is applied, the original track is not available in the given market, and Spotify did not have any tracks to relink it with. The track response will still contain metadata for the original track, and a restrictions object containing the reason why the track is not available: "restrictions" : {"reason" : "market"}
  */
  private _restrictions:{key:string, value:string}
  /*
  The tracks of the album.
  */
  private _tracks:Paging<Track>
  /*
  The object type: “album”
  */
  private _type:string
  /*
  The Spotify URI for the album.
  */
  private _uri:string
  
  public get album_type() : string {
    return this._album_type;
  }

  public set album_type(album_type : string) {
    this._album_type = album_type;
  }

  public get artists() : Artist[] {
    return this._artists;
  }
  
  public set artists(artists : Artist[]) {
    this._artists = artists;
  }

  public get available_markets() : string[] {
    return this._available_markets;
  }
  
  public set available_markets(available_markets : string[]) {
    this._available_markets = available_markets;
  }
  
  public get copyrights() : Copyright[] {
    return this._copyrights;
  }
  
  public set copyrights(copyrights : Copyright[]) {
    this._copyrights = copyrights;
  }

  public get external_ids() : {key:string, value:string} {
    return this._external_ids;
  }
  
  public set external_ids(external_ids : {key:string, value:string}) {
    this._external_ids = external_ids;
  }

  public get external_urls() : {key:string, value:string} {
    return this._external_urls;
  }
  
  public set external_urls(external_urls : {key:string, value:string}) {
    this._external_urls = external_urls;
  }

  public get genres() : string[] {
    return this._genres;
  }
  
  public set genres(genres : string[]) {
    this._genres = genres;
  }

  public get href() : string {
    return this._href;
  }
  
  public set href(href : string) {
    this._href = href;
  }

  public get id() : string {
    return this._id;
  }
  
  public set id(id : string) {
    this._id = id;
  }

  public get images() : Image[] {
    return this._images;
  }
  
  public set images(images : Image[]) {
    this._images = images;
  }

  public get label() : string {
    return this._label;
  }
  
  public set label(label : string) {
    this._label = label;
  }

  public get name() : string {
    return this._name;
  }
  
  public set name(name : string) {
    this._name = name;
  }

  public get popularity() : number {
    return this._popularity;
  }
  
  public set popularity(popularity : number) {
    this._popularity = popularity;
  }
  
  public get release_date() : string {
    return this._release_date;
  }
  
  public set release_date(release_date : string) {
    this._release_date = release_date;
  }

  public get release_date_precision() : string {
    return this._release_date_precision;
  }
  
  public set release_date_precision(release_date_precision : string) {
    this._release_date_precision = release_date_precision;
  }

  public get tracks() : Paging<Track> {
    return this._tracks;
  }
  
  public set tracks(tracks : Paging<Track>) {
    this._tracks = tracks;
  }

  public get restrictions() : {key:string, value:string} {
    return this._restrictions;
  }
  
  public set restrictions(restrictions : {key:string, value:string}) {
    this._restrictions = restrictions;
  }

  public get type() : string {
    return this._type;
  }
  
  public set type(type : string) {
    this._type = type;
  }

  public get uri() : string {
    return this._uri;
  }
  
  public set uri(uri : string) {
    this._uri = uri;
  }
  

 }
