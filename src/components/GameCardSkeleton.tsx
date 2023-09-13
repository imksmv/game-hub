import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      width={{ base: "370px", md: "380px", lg: "300px" }}
      borderRadius={10}
      overflow="hidden"
    >
      <Skeleton height={{ base: "263px", md: "266px", lg: "242px" }} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
