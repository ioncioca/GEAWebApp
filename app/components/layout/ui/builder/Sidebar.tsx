import React from "react";
import { Box, VStack, Image } from "@chakra-ui/react";
import ButtonGroup from './GroupButton';
// Define the props interface for the Sidebar component
interface SidebarProps {
  setSelectedLayout: (layout: string) => void;
}

function Sidebar({ setSelectedLayout }: SidebarProps) {
  // Banner menu items (example)
  const bannerMenuItems = [
    { text: "Banner", type: "BANNER" },
    // ... more banner items
  ];

  return (
    <Box w="360px" h="100vh" bg="#ffffff" padding="20px">
      <VStack align="stretch" spacing="20px">
        <Image src="/assets/logo.svg" alt="Logo" boxSize="50px" alignSelf="center" />
        <ButtonGroup />
      </VStack>
    </Box>
  );
}

export default Sidebar;
