import React from "react";
import { Box, Link, VStack, Image } from "@chakra-ui/react";
import ButtonGroup from './buttongroup';
import ComponentsNavigation from './componentdnd';


function Sidebar() {
    return (
      <Box w="360px" h="100vh" bg="#ffffff" padding="20px">
        <VStack align="stretch" spacing="20px">
          <Image src="/assets/logo.svg" alt="Logo" boxSize="50px" alignSelf="center" />
          <ButtonGroup />
          <ComponentsNavigation />
        </VStack>
      </Box>
    );
  }
  
  
export default Sidebar;
