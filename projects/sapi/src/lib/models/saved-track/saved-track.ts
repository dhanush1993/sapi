import { Time } from '@angular/common'
import { Track } from '../track/track'

export class SavedTrack {
  /*
  The date and time the album was saved.
  */
  private _added_at:Time
  /*
  Information about the track.
  */
  private _track:Track
  public get added_at(): Time{
    return this._added_at
  }
  public set added_at(added_at:Time ){
    this._added_at=added_at
  }
  public get track():Track{
    return this._track
  }
  public set track(track:Track){
    this._track=track
  }
 }
