import genres from "../data/genres";
import ms from "ms";
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
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
