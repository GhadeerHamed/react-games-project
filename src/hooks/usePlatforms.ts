import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { CACHE_KEY_PLATFORMS } from "../services/constants";
import ms from "ms";
import { Platform } from "../entities/platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
