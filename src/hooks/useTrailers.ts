import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Trailer from "../entities/Trailer";
import APIClient from "../services/api-client";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.get,
    staleTime: ms("1d"),
  });
};

export default useTrailers;
