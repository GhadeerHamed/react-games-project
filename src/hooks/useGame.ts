import {useQuery} from "@tanstack/react-query";
import {CACHE_KEY_GAMES} from "../services/constants";
import ApiClient from "../services/api-client";

import {Game} from "../entities/Game";

const apiClient = new ApiClient<Game>('/games')

const useGame = (slug:string) => useQuery({
    queryKey: [CACHE_KEY_GAMES, slug],
    queryFn: () => apiClient.get(slug)
})

export default useGame