import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const refForm = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (refForm.current) onSearch(refForm.current.value);
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
