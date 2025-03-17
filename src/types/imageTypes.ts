export interface ImageItem {
  id?: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user?: {
    name: string;
  };
  likes: number;
}

export interface ImageAPIResponse {
  results: ImageItem[];
  total: number;
}
