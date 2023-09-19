import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score >= 80 ? "green" : score >= 60 ? "yellow" : "red";

  if (score === null)
    return (
      <Badge colorScheme={"red"} fontSize="12px" px={2} borderRadius="4px">
        No score
      </Badge>
    );

  return (
    <Badge colorScheme={color} fontSize="14px" px={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
