import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const refForm = useRef<HTMLInputElement>(null);

  if (refForm.current) onSearch(refForm.current.value);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (refForm.current) console.log(refForm.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<LuSearch />} />
        <Input
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
