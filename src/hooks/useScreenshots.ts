import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Screenshot from "../entities/Screenshot";
import APIClient from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.get,
    staleTime: ms("1d"),
  });
};

export default useScreenshots;
