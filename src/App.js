import { useImmer } from "use-immer";
import { Input, Text } from "@chakra-ui/react";

function App() {
  const [person, updatePerson] = useImmer({
    name: "son",
    address: { city: "seoul", country: "korea" },
  });

  function handleChangeName(e) {
    updatePerson((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleChangeCity(e) {
    updatePerson((draft) => {
      draft.address.city = e.target.value;
    });
  }

  function handleChangeCountry(e) {
    updatePerson((draft) => {
      draft.address.country = e.target.value;
    }); 
  }

  return (
    <>
      <Input value={person.name} onChange={handleChangeName} />
      <Input value={person.address.country} onChange={handleChangeCountry} />
      <Input value={person.address.city} onChange={handleChangeCity} />
      <Text>
        {person.name}은 {person.address.country}, {person.address.city}에 산다
      </Text>
    </>
  );
}

export default App;
