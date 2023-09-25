import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Genre from "../entities/Genre";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.get,
    staleTime: ms("1d"),
  });

export default useGenres;
