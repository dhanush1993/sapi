import { RecommendationsSeed } from '../recommendations-seed/recommendations-seed'
import { Track } from '../track/track'

export class Recommendations { 
  /*
  An array of recommendation seed objects.
  */
  private _seeds:RecommendationsSeed[]
  /*
  An array of track object (simplified) ordered according to the parameters supplied.
  */
  private _tracks:Track[]
  public get seeds():RecommendationsSeed[]{
    return this._seeds
  }
  public set seeds(seeds:RecommendationsSeed[]){
    this._seeds=seeds
  }
  public get tracks():Track[]{
    return this._tracks
  }
  public set tracks(tracks:Track[]){
    this._tracks=tracks
  }
}
