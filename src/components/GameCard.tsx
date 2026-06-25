import type { Game } from "@/assets/hooks/useGame";
import { Card , Heading, HStack, Image , Text } from "@chakra-ui/react";
import React from "react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden"> 
      <Card.Header padding={"0px"}>
        <Image src = {getCroppedUrl(game.background_image)} />
      </Card.Header>
      <Card.Body>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIcon platforms={game.parent_platforms?.map(p => p.platform)}></PlatformIcon>
          <CriticScore criticscore={game.metacritic}></CriticScore>
        </HStack>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCard;
