/**
 * Token information
 */
export type OAuth2Token = {
  /**
   * OAuth2 Access Token
   */
  accessToken: string

  /**
   * OAuth2 Id Token
   */
  idToken?: string

  /**
   * When the Access Token expires.
   *
   * This is expressed as a unix timestamp in milliseconds.
   */
  expiresAt: number | null

  /**
   * OAuth2 refresh token
   */
  refreshToken: string | null
}
