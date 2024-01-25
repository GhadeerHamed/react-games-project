import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_SCREENSHOTS } from "../services/constants";
import ApiClient from "../services/api-client";

import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: [CACHE_KEY_SCREENSHOTS, gameId],
    queryFn: apiClient.getAll,
  });
};
export default useScreenshots;
