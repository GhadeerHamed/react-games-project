import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "../services/constants";
import apiClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const queryCacheExtra =
    "" +
    (gameQuery.genre?.id ? "g-" + gameQuery.genre?.id : "") +
    (gameQuery.platform?.id ? "p-" + gameQuery.platform?.id : "") +
    (gameQuery.sortOrder ? "o-" + gameQuery.sortOrder : "") +
    (gameQuery.searchText ? "s-" + gameQuery.searchText : "");

  const queryCacheKey = queryCacheExtra
    ? [CACHE_KEY_GAMES, queryCacheExtra]
    : [CACHE_KEY_GAMES];

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: queryCacheKey,
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 Hours
  });
};
export default useGames;
