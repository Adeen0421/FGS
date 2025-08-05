import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { type Event } from '@/types/gallery'
import config from '../../sanity.config'

export const client = createClient({
  ...config,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export async function getEvents(): Promise<Event[]> {
  const query = `*[_type == "event"] | order(date desc) {
    _id,
    title,
    date,
    description,
    category,
    mainImage {
      _id,
      "url": asset->url,
      "metadata": {
        "dimensions": {
          "width": asset->metadata.dimensions.width,
          "height": asset->metadata.dimensions.height
        }
      }
    }
  }`

  return client.fetch(query)
} 