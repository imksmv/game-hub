import { Flex, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <Flex alignItems="center" gap={4} mt={4} mb={8}>
      <Link flexShrink={0} href="/">
        <Image src={logo} boxSize="60px" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
