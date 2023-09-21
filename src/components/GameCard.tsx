import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card variant="filled">
      <Image src={getCroppedImgUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" mb={1}>
          <PlatformIconList
            platforms={
              game.parent_platforms
                ? game.parent_platforms.map((p) => p.platform)
                : []
            }
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="lg">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
