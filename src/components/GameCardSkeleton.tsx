import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width={"300px"} borderRadius={10} overflow={"hidden"}>
      <Card.Header>
        <Skeleton height="320px"/>
      </Card.Header>
      <Card.Body>
        <SkeletonText noOfLines={2}></SkeletonText>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCardSkeleton;
