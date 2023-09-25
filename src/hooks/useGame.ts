import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../entities/Game";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getSlug(slug),
    staleTime: ms("1d"),
  });

export default useGame;
