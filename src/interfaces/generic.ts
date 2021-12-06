/**
 * Make all properties optional
 */
export type Partial<T> = {
  [Key in keyof T]?: T[Key]
}

/**
 * Make all properties required
 */
export type Required<T> = {
  //  -? removes optional modifier
  [Key in keyof T]-?: T[Key]
}
