export class AudioFeatures {
  /*
  A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
  */
  private _acousticness:number
  /*
  An HTTP URL to access the full audio analysis of this track. An access token is required to access this data.
  */
  private _analysis_url:string
  /*
  Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
  */
  private _danceability:number
  /*
  The duration of the track in milliseconds.
  */
  private _duration_ms:number
  /*
  Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
  */
  private _energy:number
  /*
  The Spotify ID for the track.
  */
  private _id:string
  /*
  Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
  */
  private _instrumentalness:number
  /*
  The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.
  */
  private _key:number
  /*
  Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
  */
  private _liveness:number
  /*
  The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between -60 and 0 db.
  */
  private _loudness:number
  /*
  Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.
  */
  private _mode:number
  /*
  Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
  */
  private _speechiness:number
  /*
  The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
  */
  private _tempo:number
  /*
  An estimated overall time signature of a track. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure).
  */
  private _time_signature:number
  /*
  A link to the Web API endpoint providing full details of the track.
  */
  private _track_href:string
  /*
  The object type: “audio_features”
  */
  private _type:string
  /*
  The Spotify URI for the track.
  */
  private _uri:string
  /*
  A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
  */
  private _valence:number
  public get acousticness():number{
    return this._acousticness
  }
  public set acousticness(acousticness:number){
    this._acousticness=acousticness
  }
  public get analysis_url():string{
    return this._analysis_url
  }
  public set analysis_url(analysis_url:string){
    this._analysis_url=analysis_url
  }
  public get danceability():number{
    return this._danceability
  }
  public set danceability(danceability:number){
    this._danceability=danceability
  }
  public get duration_ms():number{
    return this._duration_ms
  }
  public set duration_ms(duration_ms:number){
    this._duration_ms=duration_ms
  }
  public get energy():number{
    return this._energy
  }
  public set energy(energy:number){
    this._energy=energy
  }
  public get id():string{
    return this._id
  }
  public set id(id:string){
    this._id=id
  }
  public get instrumentalness():number{
    return this._instrumentalness
  }
  public set instrumentalness(instrumentalness:number){
    this._instrumentalness=instrumentalness
  }
  public get key():number{
    return this._key
  }
  public set key(key:number){
    this._key=key
  }
  public get liveness():number{
    return this._liveness
  }
  public set liveness(liveness:number){
    this._liveness=liveness
  }
  public get loudness():number{
    return this._loudness
  }
  public set loudness(loudness:number){
    this._loudness=loudness
  }
  public get mode():number{
    return this._mode
  }
  public set mode(mode:number){
    this._mode=mode
  }
  public get speechiness():number{
    return this._speechiness
  }
  public set speechiness(speechiness:number){
    this._speechiness=speechiness
  }
  public get tempo():number{
    return this._tempo
  }
  public set tempo(tempo:number){
    this._tempo=tempo
  }
  public get time_signature():number{
    return this._time_signature
  }
  public set time_signature(time_signature:number){
    this._time_signature=time_signature
  }
  public get track_href():string{
    return this._track_href
  }
  public set track_href(track_href:string){
    this._track_href=track_href
  }
  public get type():string{
    return this._type
  }
  public set type(type:string){
    this._type=type
  }
  public get uri():string{
    return this._uri
  }
  public set uri(uri:string){
    this._uri=uri
  }
  public get valence():number{
    return this._valence
  }
  public set valence(valence:number){
    this._valence=valence
  }
 }
