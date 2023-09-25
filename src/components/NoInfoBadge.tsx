import { Badge } from "@chakra-ui/react";

interface Props {
  children: string;
}

const NoInfoBadge = ({ children }: Props) => {
  return (
    <Badge colorScheme={"red"} fontSize="12px" px={2} borderRadius="4px">
      {children}
    </Badge>
  );
};

export default NoInfoBadge;
