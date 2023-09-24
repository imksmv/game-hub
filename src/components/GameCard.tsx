import { Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImgUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card variant="filled">
      <Image src={getCroppedImgUrl(game.background_image)} />
      <CardBody>
        <Flex
          justifyContent="space-between"
          columnGap={4}
          rowGap={2}
          alignItems="center"
          wrap="wrap"
          mb={1}
        >
          <PlatformIconList
            platforms={
              game.parent_platforms
                ? game.parent_platforms.map((p) => p.platform)
                : []
            }
          />
          <CriticScore score={game.metacritic} />
        </Flex>
        <Heading fontSize="lg">
          <Flex alignItems="center" gap={2}>
            {game.name}
            <Emoji rating={game.rating_top} />
          </Flex>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
