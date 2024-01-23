import genres from "../data/genres";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import {FetchResponse} from "../services/api-client";
import {CACHE_KEY_GENRES} from "../services/constants";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}


const useGenres = () =>
  useQuery({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 Hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
