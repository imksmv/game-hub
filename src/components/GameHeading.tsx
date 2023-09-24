import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  // Finds object in array with matching id
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" mb={5} fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
