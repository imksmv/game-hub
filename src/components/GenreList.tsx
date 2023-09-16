import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";

const GenreList = () => {
  const { error, data } = useGenres();

  return (
    <>
      {error && <Text color="red">{error}</Text>}
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
