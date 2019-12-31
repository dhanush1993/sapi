import { Album } from './models/album/album';
import { Track } from './models/track/track';
import { Artist } from './models/artist/artist';
import { Playlist } from './models/playlist/playlist';
import { Recommendations } from './models/recommendations/recommendations';
import { Device } from './models/device/device';
import { Context } from './models/context/context';
import { PlayHistory } from './models/play-history/play-history';
import { SavedAlbum } from './models/saved-album/saved-album';
import { SavedTrack } from './models/saved-track/saved-track';
import { CurrentlyPlaying } from './models/currently-playing/currently-playing';
import { Category } from './models/category/category';
import { User } from './models/user/user';
import { Image } from './models/image/image';
import { AudioAnalysis } from './models/audio-analysis/audio-analysis';
import { AudioFeatures } from './models/audio-features/audio-features';
import { Paging } from './models/paging/paging';

export interface ISpotify {

  //Aythorize
  getAuthorizeButton(popup: boolean): HTMLButtonElement

  //Albums
  getAlbum(album: string | Album) : Promise<Album>
  getAlbumTracks(album:string | Album) : Promise<Paging<Track>>
  getAlbums(album: string[] | Album[]) : Promise<Album[]>

  //Artists
  getArtist(artist:string | Artist) : Promise<Artist>
  getArtistAlbums(artist:string | Artist) : Promise<Paging<Album>>
  getArtistTopTracks(artist:string | Artist) : Promise<Track[]>
  getRelatedArtists(artist:string | Artist) : Promise<Artist[]>
  getArtists(artists: string[] | Artist[]) : Promise<Artist[]>

  //Browse
  getCategory(category:string | Category) : Promise<Category>
  getCategoryPlaylists(category:string | Category) : Promise<Paging<Playlist>>
  getCategoryList() : Promise<Paging<Category>>
  getFeaturedPlaylists() : Promise<Paging<Playlist>>
  getNewReleases() : Promise<Paging<Album>>
  getRecommendations() : Promise<Recommendations>

  //Follow
  isFollowingArtist(artist:string | Artist) : Promise<boolean>
  isFollowingArtists(artists: Artist[] | string[]): Promise<boolean[]>
  isFollowingUser(user:string | User) : Promise<boolean>
  isFollowingUsers(users:string[] | User[]) : Promise<boolean[]>
  isFollowingPlaylist(playlist: string | Playlist, user: User | String) : Promise<boolean>
  isFollowingPlaylists(playlist:string | Playlist, users:User[] | String[]) : Promise<boolean[]>
  followArtist(artist:string | Artist) : Promise<boolean>
  followArtists(artists:string[] | Artist[]) : Promise<boolean[]>
  followUser(user:string | string[] | User | User[]) : Promise<boolean>
  followUsers(users:string[] | User[]) : Promise<boolean[]>
  followPlaylist(playlist:string | Playlist) : void
  getFollowedArtists() : Promise<Paging<Artist>>
  unfollowArtist(artist:string | Artist) : Promise<boolean>
  unfollowArtists(artists:string[] | Artist[]) : Promise<boolean[]>
  unfollowUser(user:string | User) : Promise<boolean>
  unfollowUsers(users:string[] | User[]) : Promise<boolean[]>
  unfollowPlaylist(playlist:string | Playlist) : void

  //Library
  containsAlbum(album:string | Album) : Promise<boolean>
  containsAlbums(albums:string[] | Album[]) :Promise<boolean[]>
  containsTrack(track:string | string[] | Track | Track[]) : Promise<boolean>
  getSavedAlbums() : Promise<Paging<SavedAlbum[]>>
  getSavedTracks() : Promise<Paging<SavedTrack[]>>
  removeSavedAlbum(album:string | string[] | SavedAlbum | Album | Album[]) : Promise<boolean>
  removeSavedTrack(track:string | string[] | SavedTrack | Track | Track[]) : Promise<boolean>
  saveAlbum(album:string | string[] | SavedAlbum | Album | Album[]) : Promise<boolean>
  saveTrack(track:string | string[] | SavedTrack | Track | Track[]) : Promise<boolean>

  //Personalization
  getUserTopArtists() : Promise<Paging<Artist[]>>
  getUserTopTracks() : Promise<Paging<Track[]>>

  //Player
  getDevices() : Promise<Device[]>
  getPlaybackInfo() : Promise<Context>
  getRecentlyPlayed() : Promise<Paging<PlayHistory>>
  getCurrentlyPlaying() : Promise<CurrentlyPlaying>
  pause() : Promise<boolean>
  seek() : Promise<boolean>
  repeat() : Promise<boolean>
  volume() : Promise<boolean>
  next() : Promise<boolean>
  previous() : Promise<boolean>
  play() : Promise<boolean>
  shuffle() : Promise<boolean>
  player() : Promise<boolean>

  //Playlists
  addTracksToPlayList(playlist:string | Playlist, track:string | string[] | Track | Track[]) : Promise<boolean>
  changePlaylistDetails(playlistOld:string | Playlist, playlistNew: Playlist) : Promise<boolean>
  createPlaylist(playlist:string | Playlist) : Promise<boolean>
  getUserPlaylists(user?:string | User) : Promise<Playlist[]>
  getPlaylistImage(playlist:string | Playlist) : Promise<Image[]>
  getPlaylist(playlist:string | Playlist) : Promise<Playlist>
  getPlaylistTracks(playlist:string | Playlist) : Promise<Track[]>
  removeTrackFromPlaylist(playlist:string | Playlist, track:string | string[] | Track | Track[]) : Promise<boolean>
  reorderPlaylistTracks(playlist:string | Playlist, options :{start: number, length?:number, before: number}) : Promise<boolean>
  replacePlaylistTracks(playlist:string | Playlist) : Promise<boolean>
  uploadCoverImage(playlist:string | Playlist, image : Image | Image[]) : Promise<boolean>

  //Search
  search(item: string) : Promise<Paging<any[]>>

  //Tracks
  audioAnalysis(track:string | Track) : Promise<AudioAnalysis>
  audioFeatures(track:string | Track) : Promise<AudioFeatures>
  getTrack(track?:string | Track) : Promise<Track[]>

  //Profile
  getUserProfile(user?:string | User) : Promise<User>
  getCurrentUserProfile() : Promise<User>
}
