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
  alternative_slugs: {
      de: string
      en: string
      es: string
      fr: string
      it: string
      ja: string
      ko: string
      pt: string
  }
  asset_type: string
  breadcrumbs: {
    index: number
    slug: string
    title: string
    type: string
  }[]
  color: string
  created_at: Date
  current_user_collections: []
  description: string
  height: number
  id: string
  liked_by_user: boolean
  likes: number
  links: {
    download: string
    download_location: string
    html: string
    self: string
  }
  promoted_at: null | string
  slug: string
  sponsorship: null | string
  tags: {
    source: {
      ancestry: {
        category: {
          pretty_slug: string
          slug: string
        }
        subcategory: {
          pretty_slug: string
          slug: string
        }
        type: {
          pretty_slug: string
          slug: string
        }
      }
      cover_photo: {
          alt_description: string
          alternative_slugs: {
              de: string
              en: string
              es: string
              fr: string
              it: string
              ja: string
              ko: string
              pt: string
          }
          asset_type: string
          breadcrumbs: {
            index: number
            slug: string
            title: string
            type: string
          }[]
          color: string
          created_at: Date
          current_user_collections: []
          description: string
          height: number
          id: string
          liked_by_user: boolean
          likes: number
          links: {
            download: string
            download_location: string
            html: string
            self: string
          }
          plus: boolean
          premium: boolean
          promoted_at: null | string
          slug: string
          sponsorship: null | string
          updated_at: Date
          topic_submissions: {
            [key: string]: string
          }
          urls: {
            full: string
            raw: string
            regular: string
            small: string
            small_s3: string
            thumb: string
          }
          user: {
            accepted_tos: boolean
            bio: string
            first_name: string
            for_hire: boolean
            id: string
            instagram_username: string
            last_name: string
            links: {
              followers: string
              following: string
              html: string
              likes: string
              photos: string
              portfolio: string
              self: string
            }
            location: string
            name: string
            portfolio_url: string
            profile_image: {
              large: string
              medium: string
              small: string
            }
            social: {
              instagram_username: string
              paypal_email: null | string
              portfolio_url: string
              twitter_username: string
            }
            total_collections: number
            total_illustrations: number
            total_likes: number
            total_photos: number
            total_promoted_illustrations: number
            total_promoted_photos: number
            twitter_username: string
            updated_at: Date
            username: string
          }
          width: number
      }
      description: string
      meta_description: string
      meta_title: string
      subtitle: string
      title: string
    }
    title: string
    type: string
  }[]
  topic_submissions: {
    [key: string]: string
  }
  updated_at: Date
  urls: {
    full: string
    raw: string
    regular: string
    small: string
    small_s3: string
    thumb: string
  }
  user: {
    accepted_tos: boolean
    bio: string
    first_name: string
    for_hire: boolean
    id: string
    instagram_username: string
    last_name: string
    links: {
      followers: string
      following: string
      html: string
      likes: string
      photos: string
      portfolio: string
      self: string
    }
    location: string
    name: string
    portfolio_url: string
    profile_image: {
      large: string
      medium: string
      small: string
    }
    social: {
      instagram_username: string
      paypal_email: null | string
      portfolio_url: string
      twitter_username: string
    }
    total_collections: number
    total_illustrations: number
    total_likes: number
    total_photos: number
    total_promoted_illustrations: number
    total_promoted_photos: number
    twitter_username: string
    updated_at: Date
    username: string
  }
  width: number
}