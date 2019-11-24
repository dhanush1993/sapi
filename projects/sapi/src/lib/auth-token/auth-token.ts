import { TokenException } from '../errors/token-exception/token-exception.module';
import { ErrorCodes } from '../errors/error-codes/error-codes';

/**
 * @author Dhanush Srinivasa
 */

export class AuthToken {
  private static instance: AuthToken;
  public access_token: string //An access token that can be provided in subsequent calls, for example to Spotify Web API services.
  public token_type: string    //Value: “Bearer”
  public expires_at: Date    //The time when the token expires.
  public state:string    //The value of the state parameter supplied in the request.
  constructor(access_token: string, token_type: string, expires_in: string, state:string){
    this.access_token = access_token
    this.token_type = token_type
    this.expires_at = new Date(Date.now()+((+expires_in)*1000))
    this.state = state
  }

  static getInstance(){
    if (!AuthToken.instance) {
      throw new TokenException(ErrorCodes.TOKEN_NOT_INITIALIZED);
    }
    return AuthToken.instance;
  }

  static setInstance(access_token: string, token_type: string, expires_in: string, state:string) {
      AuthToken.instance = new AuthToken(access_token, token_type, expires_in, state);
  }
}
