import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} mt={4} mb={8}>
      <Link href="/">
        <Image src={logo} boxSize="60px" />
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
