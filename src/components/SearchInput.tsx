import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<LuSearch />} />
      <Input borderRadius={20} placeholder="Search" variant="filled" />;
    </InputGroup>
  );
};

export default SearchInput;
