import type { Game } from "@/hooks/useGame";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedUrl from "@/services/image-url";
import Emojis from "./Emojis";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface Props {
  game: Game;
}

const MotionCard = motion.create(Card.Root);

const GameCard = ({ game }: Props) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [15, -15]), {
    stiffness: 250,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-15, 15]), {
    stiffness: 250,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <MotionCard
        height="350px"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <Card.Header padding="0">
          <Image
            src={getCroppedUrl(game.background_image)}
            style={{
              transform: "translateZ(30px)",
            }}
          />
        </Card.Header>

        <Card.Body
          style={{
            transform: "translateZ(20px)",
          }}
        >
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIcon
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />

            <CriticScore criticscore={game.metacritic} />
          </HStack>

          <Heading fontSize="2xl">
            {game.name}
            <Emojis rating={game.rating_top} />
          </Heading>
        </Card.Body>

        <Card.Footer />
      </MotionCard>
    </div>
  );
};

export default GameCard;
