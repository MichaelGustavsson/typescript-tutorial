import { Movie } from './movie';

export interface MovieInfo extends Movie {
  backdrop_path: string;
  budget: number;
  genres: [
    {
      name: string;
    }
  ];
  production_companies: [
    {
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
    }
  ];
  status: string;
}
