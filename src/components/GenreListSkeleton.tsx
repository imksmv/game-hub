import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack py={2}>
      <SkeletonCircle size="8" />
      <SkeletonText noOfLines={1} w="100px" />
    </HStack>
  );
};

export default GenreListSkeleton;
