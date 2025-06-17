export interface ImageAsset {
  _id: string;
  url: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
    };
  };
}

export interface GalleryImage {
  asset: ImageAsset;
  caption?: string;
  alt?: string;
}

export interface Event {
  _id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  mainImage: ImageAsset;
} 