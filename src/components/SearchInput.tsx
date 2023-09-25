import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const refForm = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (refForm.current) setSearchText(refForm.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<LuSearch />} />
        <Input
          id="input"
          ref={refForm}
          borderRadius={20}
          placeholder="Search"
          variant="filled"
        />
        ;
      </InputGroup>
    </form>
  );
};

export default SearchInput;
