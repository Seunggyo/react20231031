import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg="gold" border="1px solid purple">
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted green"}>
        Est, sequi?
      </Box>
      <Box bg={"red"} borderBottom={"7px double yellow"}>
        Maiores, numquam.
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.600"}>
        Blanditiis, quaerat.
      </Box>
      <Box borderY={"10px dotted"} borderColor={"red.300"}>
        Animi, ex?
      </Box>
      <Box border={"5px solid blue"} borderRadius={"30px"}>
        Optio, totam?
      </Box>
      <Box border={"5px solid yellow"} borderRadius={"20%"}>
        Fuga, illum!
      </Box>
      <Box border={"5px solid black"} borderRadius={5}>
        Error, ut?
      </Box>
      <Box border={"5px solid blue"} borderTopRightRadius={10}>
        Accusantium, non.
      </Box>
      <Box border={"5px solid green"} borderBottomLeftRadius={10}>
        Atque, dolorum?
      </Box>
      <Box border={"5px solid purple"} borderBottomLeftRadius={10}>
        Architecto, neque.
      </Box>
      <Box border={"5px solid skyblue"} borderTopLeftRadius={10}>
        Dicta, dolorum?
      </Box>
      <Box boxShadow={"10px 5px 5px red"}>Molestias, vitae.</Box>
      <Box shadow={"lg"}>Ducimus, qui?</Box>
      <Box shadow={"xl"}>Cumque, incidunt?</Box>
      <Box>Nihil, suscipit!</Box>
      <Box>Culpa, ut!</Box>
      <Box>Id, quod.</Box>
      <Box>Eos, impedit.</Box>
      <Box>Hic, quas?</Box>

      <Box bg={"blue.300"} m={"10px"}>
        Explicabo, vero?
      </Box>
      <Box bg={"yellow.600"} m={"20px"}>
        Alias, voluptates.
      </Box>
      <Box bg={"facebook.500"} mx={"70px"}>
        Quibusdam, voluptatibus.
      </Box>
      <Box bg="red.300" my="50px">
        Lorem ipsum.
      </Box>
      <Box bg="red.600" m="1">
        Lorem ipsum.
      </Box>
      <Box bg="blue.300" m="2">
        Lorem ipsum.
      </Box>
      <Box bg="gold" m={3}>
        Lorem ipsum.
      </Box>
      <Box bg="yellow.900" m="4">
        Lorem ipsum.
      </Box>
      <Box bg="gray.400" m="5">
        Lorem ipsum.
      </Box>
      <Box bg="red.400" p={"10px"}>
        Lorem ipsum.
      </Box>
      <Box bg="blue.400" px={"20px"}>
        Assumenda, iure.
      </Box>
      <Box bg="purple" py={"30px"}>
        Libero, pariatur.
      </Box>
      <Box bg="gold" pl={"20px"}>
        Harum, impedit?
      </Box>
      <Box bg="tomato" p={1}>
        Eius, nulla.
      </Box>
      <Box bg="red.600" p={2}>
        Fuga, officia!
      </Box>
      <Box bg="blue.600" p={3}>
        Dolorum, odio.
      </Box>
      <Box bg="black" pb={"50px"}>
        Cumque, vitae?
      </Box>
      <Box bg="gray.300" pr={"100px"}>
        Eos, magnam.
      </Box>
      <Box bg="skyblue">Corporis, sapiente?</Box>
      <div
        style={{
          margin: "10px",
          backgroundColor: "gold",
          color: "gray",
          paddingLeft: "20px",
          boxShadow: "10px 5px 5px red",
        }}
      >
        Lorem ipsum.
      </div>
    </>
  );
}

export default App;
