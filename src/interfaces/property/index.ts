export interface PropertyI {
  title: string;
  type: string;
  location: string;
  square: number;
  bed_count: number;
  rent_price: string;
  total_price: string;
  photos: Array<{
    name: string;
  }>;
}

export interface PropertySearchResultI {
  result_count: string;
  search_location: string;
  search_text: string;
  properties: PropertyI[];
}
