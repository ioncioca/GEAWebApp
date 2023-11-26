import React from 'react';
import Sidebar from '../app/components/layout/ui/builder/sidebarnav';

import { Box, HStack } from '@chakra-ui/react';

function MyComponent() {
  return (
    <HStack spacing={0} w="100vw" h="100vh" bg="#EBEBEB">
      <Sidebar />
      <Box w="calc(100% - 200px)" h="100vh" bg="gray.100">
        {/* Your main content goes here */}
      </Box>
    </HStack>
  );
}

export default MyComponent;
