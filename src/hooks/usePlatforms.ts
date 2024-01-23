import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import { CACHE_KEY_PLATFORMS } from "../services/constants";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 Hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
