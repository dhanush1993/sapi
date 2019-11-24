export class RecommendationsSeed { 
  /*
  The number of tracks available after min_* and max_* filters have been applied.
  */
  private _afterFilteringSize:number
  /*
  The number of tracks available after relinking for regional availability.
  */
  private _afterRelinkingSize:number
  /*
  A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be null.
  */
  private _href:string
  /*
  The id used to select this seed. This will be the same as the string used in the seed_artists , seed_tracks or seed_genres parameter.
  */
  private _id:string
  /*
  The number of recommended tracks available for this seed.
  */
  private _initialPoolSize:number
  /*
  The entity type of this seed. One of artist , track or genre.
  */
  private _type:string
  public get afterFilteringSize():number{
    return this._afterFilteringSize
  }
  public set afterFilteringSize(afterFilteringSize:number){
    this._afterFilteringSize=afterFilteringSize
  }
  public get afterRelinkingSize():number{
    return this._afterRelinkingSize
  }
  public set afterRelinkingSize(afterRelinkingSize:number){
    this._afterRelinkingSize=afterRelinkingSize
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
  public get initialPoolSize():number{
    return this._initialPoolSize
  }
  public set initialPoolSize(initialPoolSize:number){
    this._initialPoolSize=initialPoolSize
  }
  public get type():string{
    return this._type
  }
  public set type(type:string){
    this._type=type
  }
}
