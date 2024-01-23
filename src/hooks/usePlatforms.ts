import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { CACHE_KEY_PLATFORMS } from "../services/constants";
import ms from "ms";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
