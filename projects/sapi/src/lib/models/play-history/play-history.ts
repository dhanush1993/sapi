import { Track } from '../track/track'
import { Time } from '@angular/common'
import { Context } from '../context/context'
export class PlayHistory {
  /*
  The track the user listened to.
  */
  private _track:Track[]
  /*
  The date and time the track was played.
  */
  private _played_at:Time
  /*
  The context the track was played from.
  */
  private _context:Context
  public get track():Track[]{
    return this._track
  }
  public set track(track:Track[]){
    this._track=track
  }
  public get played_at():Time{
    return this._played_at
  }
  public set played_at(played_at:Time){
    this._played_at=played_at
  }
  public get context():Context{
    return this._context
  }
  public set context(context:Context){
    this._context=context
  }

 }
