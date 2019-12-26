/**
* @author Dhanush Srinivasa 
* Contains endpoint constants for spotify rest api v1
*/
export class SpotifyConstants {
  /*
    Protocol used http or https (or any future supports)
  */
  static readonly PROTOCOL = `https://`
  /*
    Base URL endpoint
  */
  static readonly ENDPOINT_BASE_URI = `api.spotify.com/v1`
  /*
    Endpoints for retrieving information about one or more albums from the Spotify catalog.
  */
  static readonly BASE_ALBUM_URI = `/albums`
  static readonly ALBUM_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_ALBUM_URI
  /*
    Endpoints for retrieving information about one or more artists from the Spotify catalog.
  */
  static readonly BASE_ARTIST_URI = `/artists`
  static readonly ARTIST_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_ARTIST_URI
  /*
    Endpoints for getting playlists and new album releases featured on Spotify’s Browse tab.
  */
  static readonly BASE_BROWSE_CATEGORY_URI = `/browse/categories`
  static readonly BROWSE_CATEGORY_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_BROWSE_CATEGORY_URI
  static readonly BASE_BROWSE_FEATURE_PLAYLIST_URI = `/browse/featured-playlists`
  static readonly BROWSE_FEATURE_PLAYLIST_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_BROWSE_FEATURE_PLAYLIST_URI
  static readonly BASE_BROWSE_NEW_RELEASES_URI = `/browse/new-releases`
  static readonly BROWSE_NEW_RELEASES_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_BROWSE_NEW_RELEASES_URI
  static readonly BASE_BROWSE_RECOMMENDATIONS_URI = `/browse/new-releases`
  static readonly BROWSE_RECOMMENDATIONS_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_BROWSE_RECOMMENDATIONS_URI
  /*
    Endpoints for managing the artists, users, and playlists that a Spotify user follows.
  */
  static readonly BASE_FOLLOW_CHECK_FOLLOWING_URI = `/me/following/contains`
  static readonly FOLLOW_CHECK_FOLLOWING_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_FOLLOW_CHECK_FOLLOWING_URI
  static readonly BASE_FOLLOW_FOLLOWING_URI = `/me/following`
  static readonly FOLLOW_FOLLOWING_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_FOLLOW_FOLLOWING_URI
  static readonly BASE_FOLLOW_FOLLOWING_ARTIST_URI = `/me/following?type=artist`
  static readonly FOLLOW_FOLLOWING_ARTIST_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_FOLLOW_FOLLOWING_ARTIST_URI
  /*
    Endpoints for retrieving information about, and managing, tracks that the current user has saved in their “Your Music” library.
  */
  static readonly BASE_LIBRARY_CHECK_SAVED_ALBUMS_URI = `/me/albums/contains`
  static readonly LIBRARY_CHECK_SAVED_ALBUMS_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_LIBRARY_CHECK_SAVED_ALBUMS_URI
  static readonly BASE_LIBRARY_CHECK_SAVED_TRACKS_URI = `/me/tracks/contains`
  static readonly BASE_LIBRARY_SAVED_ALBUMS_URI = `/me/albums`
  static readonly BASE_LIBRARY_SAVED_TRACKS_URI = `/me/tracks`
  /*
    Endpoints for retrieving information about the user’s listening habits.
  */
  static readonly BASE_TOP_TYPE_URI = `/me/top`
  /*
    These endpoints are in Beta. While we encourage you to build with them, 
    a situation may arise where we need to disable some or all of the functionality 
    and/or change how they work without prior notice. Please report any issues via 
    our GitHub issue tracker.
  */
  static readonly BASE_PLAYER_DEVICES_URI = `/me/player/devices`
  static readonly BASE_PLAYER_CURRENT_PLAYBACK_URI = `/me/player`
  static readonly BASE_PLAYER_RECENTLY_PLAYED_URI = `me/player/recently-played`
  static readonly BASE_PLAYER_CURRENTLY_PLAYING_URI = `me/player/currently-playing`
  static readonly BASE_PLAYER_PAUSE_URI = `/me/player/pause`
  static readonly BASE_PLAYER_SEEK_URI = `/me/player/seek`
  static readonly BASE_PLAYER_REPEAT_MODE_URI = `/me/player/repeat`
  static readonly BASE_PLAYER_VOLUME_URI = `/me/player/volume`
  static readonly BASE_PLAYER_NEXT_URI = `/me/player/next`
  static readonly BASE_PLAYER_PREVIOUS_URI = `/me/player/previous`
  static readonly BASE_PLAYER_PLAY_URI = `/me/player/play`
  static readonly BASE_PLAYER_SHUFFLE_URI = `/me/player/shuffle`
  static readonly BASE_PLAYER = `/me/player`
  /*
    Endpoints for retrieving information about a user’s playlists and for managing a user’s playlists.  
  */
  static readonly BASE_PLAYLIST_CURRENT_USER_URI = `/me/playlists`
  static readonly PLAYLIST_CURRENT_USER_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_PLAYLIST_CURRENT_USER_URI
  static readonly BASE_SEARCH = `/search`
  static readonly SEARCH = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_SEARCH
  /*
    Endpoints for retrieving information about one or more tracks from the Spotify catalog.
  */
  static readonly BASE_TRACK_ANALYSIS_URI = `/audio-analysis`
  static readonly TRACK_ANALYSIS_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_TRACK_ANALYSIS_URI
  static readonly BASE_TRACK_FEATURES_URI = `/audio-features`
  static readonly TRACK_FEATURES_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_TRACK_FEATURES_URI
  static readonly BASE_TRACK_URI = `/tracks`
  static readonly TRACK_URI = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_TRACK_URI
  static readonly BASE_CURRENT_PROFILE = `/me`
  static readonly CURRENT_PROFILE = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_CURRENT_PROFILE
  static readonly BASE_USER_PROFILE = `/users`
  static readonly USER_PROFILE = SpotifyConstants.PROTOCOL+SpotifyConstants.ENDPOINT_BASE_URI+SpotifyConstants.BASE_USER_PROFILE
  /*
    Endpoints for authorization and authentication
  */
  static readonly BASE_AUTH_URI = `accounts.spotify.com/authorize`
  
 }

 export class RESPONSE_TYPE {
  static readonly TOKEN= `token`
}
