import { Injectable } from '@angular/core';
import { SpotifyAuthService } from './spotify-auth.service';
import { RequestsService } from './requests.service';
import { Album } from './models/album/album';
import { ISpotify } from './ispotify';
import { HttpHeaders } from '@angular/common/http';
import { AuthToken } from './auth-token/auth-token';
import { TokenException } from './errors/token-exception/token-exception.module';
import { ErrorCodes } from './errors/error-codes/error-codes';
import { SpotifyConstants } from './spotify-constants/spotify-constants';
import { Track } from './models/track/track';
import { Paging } from './models/paging/paging';
import { Artist } from "./models/artist/artist";
import { ArrayException } from './errors/array-exception/array-exception';
import { Category } from './models/category/category';
import { Playlist } from './models/playlist/playlist';
import { Recommendations } from './models/recommendations/recommendations';
import { User } from './models/user/user';
import { SavedAlbum } from './models/saved-album/saved-album';
import { SavedTrack } from './models/saved-track/saved-track';
import { Device } from './models/device/device';
import { Context } from './models/context/context';
import { PlayHistory } from './models/play-history/play-history';
import { CurrentlyPlaying } from './models/currently-playing/currently-playing';
import { AudioAnalysis } from './models/audio-analysis/audio-analysis';
import { AudioFeatures } from './models/audio-features/audio-features';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements ISpotify{
  
  constructor(private auth: SpotifyAuthService, private requests:RequestsService) { }

  getAuthorizeButton(popup: boolean): HTMLButtonElement {
    return this.auth.getAuthButton(popup)
  }

  private getIDHelper(obj:any, instance:any):String{
    let id = ''
    if(obj instanceof instance){
      id = obj.id
    }
    else {
     id = obj
    }
    return id
  }

  private getHeaders(): HttpHeaders{
    let header = null
    try{
      header = new HttpHeaders({'Authorization':AuthToken.getInstance().token_type+" "+AuthToken.getInstance().access_token})
    }catch(err){
      throw new TokenException(ErrorCodes.TOKEN_NOT_INITIALIZED)
    }
    return header
  }

  getAlbum(album: string | Album): Promise<Album> {
    const header = this.getHeaders()
    const id = this.getIDHelper(album, Album)
    return this.requests.get<Album>(SpotifyConstants.ALBUM_URI+`/${id}`,header)
  }

  getAlbumTracks(album: string | Album): Promise<Paging<Track>> {
    const header = this.getHeaders()
    const id = this.getIDHelper(album, Album)
    return this.requests.get<Paging<Track>>(SpotifyConstants.ALBUM_URI+`/${id}/tracks`,header)
  }

  getAlbums(albums: string[] | Album[]): Promise<Album[]> {
    const header = this.getHeaders()
    if(albums.length<=0)
      throw new ArrayException(ErrorCodes.EMPTY_LIST)
    let idsList:String[] = []
    albums.forEach((album)=>{
        idsList.push(this.getIDHelper(album, Album))
    })
    const ids = idsList.join(',')
    return this.requests.get<Album[]>(SpotifyConstants.ALBUM_URI+`?ids=${ids}`,header)
  }
  
  getArtist(artist: string | Artist): Promise<Artist> {
    const header = this.getHeaders()
    const id = this.getIDHelper(artist, Artist)
    return this.requests.get<Artist>(SpotifyConstants.ARTIST_URI+`/${id}`,header)
  }

  getArtistAlbums(artist: string | Artist): Promise<Paging<Album>> {
    const header = this.getHeaders()
    const id = this.getIDHelper(artist, Artist)
    return this.requests.get<Paging<Album>>(SpotifyConstants.ARTIST_URI+`/${id}/albums`,header)
  }

  getArtistTopTracks(artist: string | Artist): Promise<Track[]> {
    const header = this.getHeaders()
    const id = this.getIDHelper(artist, Artist)
    return this.requests.get<Track[]>(SpotifyConstants.ARTIST_URI+`/${id}/top-tracks`,header)
  }

  getRelatedArtists(artist: string | Artist): Promise<Artist[]> {
    const header = this.getHeaders()
    const id = this.getIDHelper(artist, Artist)
    return this.requests.get<Artist[]>(SpotifyConstants.ARTIST_URI+`/${id}/related-artists`,header)
  }

  getArtists(artists: string[] | Artist[]): Promise<Artist[]> {
    const header = this.getHeaders()
    if(artists.length<=0)
      throw new ArrayException(ErrorCodes.EMPTY_LIST)
    let idsList:String[] = []
    artists.forEach((artist)=>{
      idsList.push(this.getIDHelper(artist, Artist))
    })
    const ids = idsList.join(',')
    return this.requests.get<Artist[]>(SpotifyConstants.ARTIST_URI+`?ids=${ids}`,header)
  }
  
  getCategory(category: string | Category): Promise<Category> {
    const header = this.getHeaders()
    const id = this.getIDHelper(category, Category)
    return this.requests.get<Category>(SpotifyConstants.BROWSE_CATEGORY_URI+`/${id}`,header)
  }

  getCategoryPlaylists(category: string | Category): Promise<Paging<Playlist>> {
    const header = this.getHeaders()
    const id = this.getIDHelper(category, Category)
    return this.requests.get<Paging<Playlist>>(SpotifyConstants.BROWSE_CATEGORY_URI+`/${id}/playlists`,header)
  }

  getCategoryList(): Promise<Paging<Category>> {
    const header = this.getHeaders()
    return this.requests.get<Paging<Category>>(SpotifyConstants.BROWSE_CATEGORY_URI,header)
  }

  getFeaturedPlaylists(): Promise<Paging<Playlist>> {
    const header = this.getHeaders()
    return this.requests.get<Paging<Playlist>>(SpotifyConstants.BROWSE_FEATURE_PLAYLIST_URI,header)
  }

  getNewReleases(): Promise<Paging<Album>> {
    const header = this.getHeaders()
    return this.requests.get<Paging<Album>>(SpotifyConstants.BROWSE_NEW_RELEASES_URI,header)
  }

  getRecommendations(): Promise<Recommendations> {
    const header = this.getHeaders()
    return this.requests.get<Recommendations>(SpotifyConstants.BROWSE_RECOMMENDATIONS_URI,header)
  }

  isFollowingArtist(artist: string | Artist): Promise<boolean> {
    const header = this.getHeaders()
    const id = this.getIDHelper(artist, Artist)
    return this.requests.get<boolean>(SpotifyConstants.FOLLOW_CHECK_FOLLOWING_URI+`?type=artist&ids=${id}`,header)
  }

  isFollowingArtists(artists: Artist[] | string[]): Promise<boolean[]> {
    const header = this.getHeaders()
    if(artists.length<=0)
      throw new ArrayException(ErrorCodes.EMPTY_LIST)
    let idsList:String[] = []
    artists.forEach((artist)=>{
      idsList.push(this.getIDHelper(artist, Artist))
    })
    const ids = idsList.join(',')
    return this.requests.get<boolean[]>(SpotifyConstants.FOLLOW_CHECK_FOLLOWING_URI+`?type=artist&ids=${ids}`,header)
  }

  isFollowingUser(user: string | User): Promise<boolean> {
    const header = this.getHeaders()
    const id = this.getIDHelper(user, User)
    return this.requests.get<boolean>(SpotifyConstants.FOLLOW_CHECK_FOLLOWING_URI+`?type=user&ids=${id}`,header)
  }

  isFollowingUsers(users: string[] |User[]): Promise<boolean[]> {
    const header = this.getHeaders()
    if(users.length<=0)
      throw new ArrayException(ErrorCodes.EMPTY_LIST)
    let idsList:String[] = []
    users.forEach((user)=>{
      idsList.push(this.getIDHelper(user, User))
    })
    const ids = idsList.join(',')
    return this.requests.get<boolean[]>(SpotifyConstants.FOLLOW_CHECK_FOLLOWING_URI+`?type=artist&ids=${ids}`,header)
  }

  isFollowingPlaylist(playlist: string | Playlist, user: User | String): Promise<boolean> {
    const header = this.getHeaders()
    const play_id = this.getIDHelper(playlist, Playlist)
    const id = this.getIDHelper(user, User)
    return this.requests.get<boolean>(SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+`/playlists/${play_id}/followers/contains?ids=${id}`,header)
  }

  isFollowingPlaylists(playlist: string | Playlist, users: User[] | String[]) : Promise<boolean[]>{
    const header = this.getHeaders()
    if(users.length<=0)
      throw new ArrayException(ErrorCodes.EMPTY_LIST)
    const play_id = this.getIDHelper(playlist, Playlist)
    let idsList:String[] = []
    users.forEach((user)=>{
      idsList.push(this.getIDHelper(user, User))
    })
    const ids = idsList.join(',')
    return this.requests.get<boolean[]>(SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+`/playlists/${play_id}/followers/contains?ids=${ids}`,header)
  }

  followArtist(artist: string | Artist): Promise<boolean> {
    const header = this.getHeaders()
    const id = this.getIDHelper(artist, Artist)
    this.requests.get(SpotifyConstants.FOLLOW_FOLLOWING_URI+`?type=artist&ids=${id}`,header)
    return this.isFollowingArtist(artist)
  }

  followArtists(artists: string[] | Artist[]): Promise<boolean[]> {
    const header = this.getHeaders()
    if(artists.length<=0)
      throw new ArrayException(ErrorCodes.EMPTY_LIST)
    let idsList:String[] = []
    artists.forEach((artist)=>{
      idsList.push(this.getIDHelper(artist, Artist))
    })
    const ids = idsList.join(',')
    this.requests.get(SpotifyConstants.FOLLOW_FOLLOWING_URI+`?type=artist&ids=${ids}`,header)
    return this.isFollowingArtists(artists)
  }

  followUser(user: string | User): Promise<boolean> {
    const header = this.getHeaders()
    const id = this.getIDHelper(user, User)
    this.requests.get(SpotifyConstants.FOLLOW_FOLLOWING_URI+`?type=user&ids=${id}`,header)
    return this.isFollowingUser(user)
  }

  followUsers(users: string[] | User[]): Promise<boolean[]> {
    const header = this.getHeaders()
    if(users.length<=0)
      throw new ArrayException(ErrorCodes.EMPTY_LIST)
    let idsList:String[] = []
    users.forEach((artist)=>{
      idsList.push(this.getIDHelper(artist, Artist))
    })
    const ids = idsList.join(',')
    this.requests.get(SpotifyConstants.FOLLOW_FOLLOWING_URI+`?type=artist&ids=${ids}`,header)
    return this.isFollowingUsers(users)
  }

  followPlaylist(playlist: string | Playlist) {
    const header = this.getHeaders()
    const id = this.getIDHelper(playlist, Playlist)
    this.requests.get(SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+`/playlists/${id}/followers`,header)
    //return this.isFollowingPlaylist(playlist, AuthToken.getInstance().)
  }

  getFollowedArtists(): Promise<Paging<Artist>> {
    const header = this.getHeaders()
    return this.requests.get<Paging<Artist>>(SpotifyConstants.FOLLOW_FOLLOWING_ARTIST_URI,header)
  }

  unfollowArtist(artist: string | Artist): Promise<boolean> {
    const header = this.getHeaders()
    const id = this.getIDHelper(artist, Artist)
    this.requests.delete(SpotifyConstants.FOLLOW_FOLLOWING_URI+`?type=artist&ids=${id}`,header)
    return this.isFollowingArtist(artist)
  }

  unfollowArtists(artists: Artist[] | string[]): Promise<boolean[]>{
    const header = this.getHeaders()
    if(artists.length<=0)
      throw new ArrayException(ErrorCodes.EMPTY_LIST)
    let idsList:String[] = []
    artists.forEach((artist)=>{
      idsList.push(this.getIDHelper(artist, Artist))
    })
    const ids = idsList.join(',')
    this.requests.delete(SpotifyConstants.FOLLOW_FOLLOWING_URI+`?type=artist&ids=${ids}`,header)
    return this.isFollowingArtists(artists)
  }

  unfollowUser(user: string | User): Promise<boolean> {
    const header = this.getHeaders()
    const id = this.getIDHelper(user, User)
    this.requests.delete(SpotifyConstants.FOLLOW_FOLLOWING_URI+`?type=user&ids=${id}`,header)
    return this.isFollowingUser(user)
  }

  unfollowUsers(users: string[] | User[]): Promise<boolean[]>{
    const header = this.getHeaders()
    if(users.length<=0)
      throw new ArrayException(ErrorCodes.EMPTY_LIST)
    let idsList:String[] = []
    users.forEach((artist)=>{
      idsList.push(this.getIDHelper(artist, Artist))
    })
    const ids = idsList.join(',')
    this.requests.delete(SpotifyConstants.FOLLOW_FOLLOWING_URI+`?type=artist&ids=${ids}`,header)
    return this.isFollowingUsers(users)
  }

  unfollowPlaylist(playlist: string | Playlist) {
    const header = this.getHeaders()
    const id = this.getIDHelper(playlist, Playlist)
    this.requests.get(SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+`/playlists/${id}/followers`,header)
  }

  containsAlbum(album: string | Album): Promise<boolean> {
    const header = this.getHeaders()
    const id = this.getIDHelper(album, Album)
    return this.requests.get<boolean>(SpotifyConstants.LIBRARY_CHECK_SAVED_ALBUMS_URI+`?ids=${id}`,header)

  }

  containsAlbums(albums:string[] | Album[]) :Promise<boolean[]> {
    throw new Error("Method not implemented.");
  }

  containsTrack(track: string | Track | Track[] | string[]): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  getSavedAlbums(): Promise<SavedAlbum[]> {
    throw new Error("Method not implemented.");
  }
  getSavedTracks(): Promise<SavedTrack[]> {
    throw new Error("Method not implemented.");
  }
  removeSavedAlbum(album: string | Album | Album[] | string[] | SavedAlbum): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  removeSavedTrack(track: string | Track | Track[] | string[] | SavedTrack): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  saveAlbum(album: string | Album | Album[] | string[] | SavedAlbum): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  saveTrack(track: string | Track | Track[] | string[] | SavedTrack): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  getUserTopArtists(): Promise<Artist[]> {
    throw new Error("Method not implemented.");
  }
  getUserTopTracks(): Promise<Track[]> {
    throw new Error("Method not implemented.");
  }
  getDevices(): Promise<Device[]> {
    throw new Error("Method not implemented.");
  }
  getPlaybackInfo(): Promise<Context> {
    throw new Error("Method not implemented.");
  }
  getRecentlyPlayed(): Promise<PlayHistory> {
    throw new Error("Method not implemented.");
  }
  getCurrentlyPlaying(): Promise<CurrentlyPlaying> {
    throw new Error("Method not implemented.");
  }
  pause(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  seek(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  repeat(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  volume(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  next(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  previous(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  play(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  shuffle(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  player(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  addTracksToPlayList(playlist: string | Playlist, track: string | Track | Track[] | string[]): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  changePlaylistDetails(playlistOld: string | Playlist, playlistNew: Playlist): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  createPlaylist(playlist: string | Playlist): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  getUserPlaylists(user?: string | User): Promise<Playlist[]> {
    throw new Error("Method not implemented.");
  }
  getPlaylistImage(playlist: string | Playlist): Promise<import("./models/image/image").Image[]> {
    throw new Error("Method not implemented.");
  }
  getPlaylist(playlist: string | Playlist): Promise<Playlist> {
    throw new Error("Method not implemented.");
  }
  getPlaylistTracks(playlist: string | Playlist): Promise<Track[]> {
    throw new Error("Method not implemented.");
  }
  removeTrackFromPlaylist(playlist: string | Playlist, track: string | Track | Track[] | string[]): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  reorderPlaylistTracks(playlist: string | Playlist, options: { start: number; length?: number; before: number; }): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  replacePlaylistTracks(playlist: string | Playlist): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  uploadCoverImage(playlist: string | Playlist, image: import("./models/image/image").Image | import("./models/image/image").Image[]): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  search(item: string): Promise<Paging<any[]>> {
    const header = this.getHeaders()
    return this.requests.get<any>(SpotifyConstants.SEARCH+`?q=${item}&type=track`,header)
  }
  audioAnalysis(track: string | Track): Promise<AudioAnalysis> {
    const header = this.getHeaders()
    const id = this.getIDHelper(track, AudioAnalysis)
    return this.requests.get<AudioAnalysis>(SpotifyConstants.TRACK_ANALYSIS_URI+`/${id}`,header)
  }
  audioFeatures(track: string | Track): Promise<AudioFeatures> {
    const header = this.getHeaders()
    const id = this.getIDHelper(track, AudioFeatures)
    return this.requests.get<AudioFeatures>(SpotifyConstants.TRACK_FEATURES_URI+`/${id}`,header)
  }
  getTrack(track?: string | Track): Promise<Track[]> {
    const header = this.getHeaders()
    const id = this.getIDHelper(track, Track)
    return this.requests.get<Track[]>(SpotifyConstants.TRACK_URI+`?ids=${id}`,header)

  }
  getUserProfile(user?: string | User): Promise<User> {
    const header = this.getHeaders()
    const id = this.getIDHelper(user, User)
    return this.requests.get<User>(SpotifyConstants.USER_PROFILE+`/${id}`,header)
  }
  getCurrentUserProfile(): Promise<User> {
    const header = this.getHeaders()
    return this.requests.get<User>(SpotifyConstants.CURRENT_PROFILE,header)
  }
  
}
