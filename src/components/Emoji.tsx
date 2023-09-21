import { Text, TextProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: string } = {
    2: "🙂",
    4: "😃",
    5: "😍",
  };

  if (rating < 3) return null;

  return <Text fontSize="2xl">{emojiMap[rating]}</Text>;
};

export default Emoji;
