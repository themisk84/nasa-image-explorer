export interface NasaData {
  center: string;
  date_created: string;
  description: string;
  media_type: string;
  nasa_id: string;
  photographer: string;
  title: string;
  keywords?: string[];
}

export interface NasaLinks {
  href: string;
  rel: string;
  render: string;
}

export interface CardData {
  data: NasaData[];
  href: string;
  links: NasaLinks[];
}

export interface Collection {
  href: string;
  items: CardData[];
  version: string;
}

export interface BackendResponse {
  collection: Collection;
}
