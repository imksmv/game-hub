import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} py={2}>
            <HStack>
              <Image
                mr={2}
                boxSize={8}
                borderRadius={8}
                src={getCroppedImgUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
