import { Button } from "@chakra-ui/react"; 
import { HStack } from "@chakra-ui/react"; 
import React from 'react';


function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <HStack spacing="4">
        <Button colorScheme="teal">Click me</Button>
        <Button colorScheme="blue">Click me</Button>
      </HStack>
    </>
  );
}

export default Home;
