import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { CACHE_KEY_GENRES } from "../services/constants";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 Hours
    initialData: genres,
  });

export default useGenres;
