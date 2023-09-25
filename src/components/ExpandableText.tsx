import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 300 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const summery = isExpanded
    ? children
    : children.substring(0, maxChars) + "...";

  if (!children) return null;
  if (children.length <= maxChars) return <Text>{children}</Text>;

  return (
    <Text>
      {summery}
      <Button
        ml={2}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
