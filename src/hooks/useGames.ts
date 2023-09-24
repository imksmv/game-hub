import { useInfiniteQuery } from "@tanstack/react-query";
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
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuary],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.get({
        params: {
          genres: gameQuary.genreId,
          parent_platforms: gameQuary.platformId,
          ordering: gameQuary.sortOrder,
          search: gameQuary.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useGames;
