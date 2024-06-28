export interface ObjectType {
  [key: string]: any
}
export interface ApiSearchResponse {
  results: PhotoType[]
  total: number
  total_pages: number
}
export interface PhotoType {
  alt_description: string
  id: string
  urls: {
    regular: string
    small: string
  }
}