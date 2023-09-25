import { Badge } from "@chakra-ui/react";
import NoInfoBadge from "./NoInfoBadge";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score >= 80 ? "green" : score >= 60 ? "yellow" : "red";

  if (score === null) return <NoInfoBadge>No Score</NoInfoBadge>;

  return (
    <Badge colorScheme={color} fontSize="14px" px={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
