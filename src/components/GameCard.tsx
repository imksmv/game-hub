import { Box, Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImgUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={"/games/" + game.slug}>
      <Card variant="filled">
        <Image
          src={getCroppedImgUrl(game.background_image)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.transition = "transform 0.3s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.transition = "transform 0.3s ease-in-out";
          }}
        />
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
          <Box>
            <Flex alignItems="center" gap={2}>
              <Heading size={{ sm: "xl", md: "md" }}>{game.name}</Heading>
              <Emoji rating={game.rating_top} />
            </Flex>
          </Box>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
