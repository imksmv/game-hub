import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { Badge } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    linux: FaLinux,
    android: FaAndroid,
    mac: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  if (platforms.length === 0)
    return (
      <Badge colorScheme={"red"} fontSize="12px" px={2} borderRadius="4px">
        No platforms
      </Badge>
    );

  return (
    <HStack my={1}>
      {platforms.map((platform) => {
        const basicPlatform = iconMap[platform.slug];

        if (!basicPlatform) return null;

        return <Icon color="gray.500" key={platform.id} as={basicPlatform} />;
      })}
    </HStack>
  );
};

export default PlatformIconList;
