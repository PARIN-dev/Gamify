import type { Game } from "@/assets/hooks/useGame";
import { Card , Heading, Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden"> 
      <Card.Header>
        <Image src = {game.background_image} />
      </Card.Header>
      <Card.Body>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCard;
