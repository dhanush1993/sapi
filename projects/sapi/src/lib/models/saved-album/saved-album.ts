import { Time } from '@angular/common'
import { Album } from '../album/album'
export class SavedAlbum {
  /*
  The date and time the album was saved.
  */
  private _added_at:Time
  /*
  Information about the track.
  */
  private _album:Album
  public get added_at(): Time{
    return this._added_at
  }
  public set added_at(added_at:Time ){
    this._added_at=added_at
  }
  public get album():Album{
    return this._album
  }
  public set album(album:Album){
    this._album=album
  }

 }
