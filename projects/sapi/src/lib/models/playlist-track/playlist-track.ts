import { Time } from '@angular/common'
import { User } from '../user/user'
import { Track } from '../track/track'

export class PlaylistTrack {
  /*
  The date and time the track was added.Note that some very old playlists may return null in this field.
  */
  private _added_at:Time
  /*
  The Spotify user who added the track.Note that some very old playlists may return null in this field.
  */
  private _added_by:User
  /*
  Whether this track is a local file or not.
  */
  private _is_local:boolean
  /*
  Information about the track.
  */
  private _track:Track
  public get added_at():Time{
    return this._added_at
  }
  public set added_at(added_at:Time){
    this._added_at=added_at
  }
  public get added_by():User{
    return this._added_by
  }
  public set added_by(added_by:User){
    this._added_by=added_by
  }
  public get is_local():boolean{
    return this._is_local
  }
  public set is_local(is_local:boolean){
    this._is_local=is_local
  }
  public get track():Track{
    return this._track
  }
  public set track(track:Track){
    this._track=track
  }
 }
