import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuary: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuary],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuary.genre?.id,
            parent_platforms: gameQuary.platform?.id,
            ordering: gameQuary.sortOrder,
            search: gameQuary.searchText,
          },
        })
        .then((res) => res.data);
    },
  });

export default useGames;
