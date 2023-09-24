import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("games");

const useGames = (gameQuary: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuary],
    queryFn: () =>
      apiClient.get({
        params: {
          genres: gameQuary.genre?.id,
          parent_platforms: gameQuary.platform?.id,
          ordering: gameQuary.sortOrder,
          search: gameQuary.searchText,
        },
      }),
  });

export default useGames;
