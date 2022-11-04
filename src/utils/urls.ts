export const POPULAR_URL: string =
  "https://images-assets.nasa.gov/popular.json";

export const NEWEST_URL: string = "https://images-assets.nasa.gov/recent.json";

export const EXIF_DATA_URL = (id: string): string =>
  `https://images-assets.nasa.gov/image/${id}/metadata.json`;

export const SEARCH_URL = (word?: string, location?: string) =>
  `https://images-api.nasa.gov/search?q=${word}&location=${location}`;
