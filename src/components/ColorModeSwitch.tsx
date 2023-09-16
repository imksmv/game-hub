import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton aria-label="Toggle theme" onClick={toggleColorMode}>
      <Icon as={colorMode === "dark" ? BsFillSunFill : BsFillMoonFill} />
    </IconButton>
  );
};

export default ColorModeSwitch;
