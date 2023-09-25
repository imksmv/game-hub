import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <Flex alignItems="center" gap={4} mt={4} mb={8}>
      <Box flexShrink={0}>
        <Link to="/">
          <Image src={logo} boxSize="60px" />
        </Link>
      </Box>
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
