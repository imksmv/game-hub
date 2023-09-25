import { Badge, HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../entities/Platform";
import NoInfoBadge from "./NoInfoBadge";

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

  if (platforms.length === 0) return <NoInfoBadge>No platforms</NoInfoBadge>;

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
