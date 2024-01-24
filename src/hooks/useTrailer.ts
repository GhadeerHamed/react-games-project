import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TRAILER } from "../services/constants";
import ApiClient from "../services/api-client";

import { Trailer } from "../entities/Trailer";

const useTrailer = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: [CACHE_KEY_TRAILER, gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
