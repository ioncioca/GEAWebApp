import React, { useState } from 'react';
import { Box, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

interface LayoutSelectorProps {
  setSelectedLayout: (layout: string | null) => void;
}

const LayoutSelector: React.FC<LayoutSelectorProps> = ({ setSelectedLayout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLayoutButtonClick = (layout: string) => {
    console.log(`Selected layout: ${layout}`); // Add this line for debugging
    setSelectedLayout(layout);
    setIsDropdownOpen(false);
  };

  return (
    <Box w="200px" h="10vh" bg="#ffffff" padding="20px">
      <Menu>
        <MenuButton as={Button} color="white" bg="#020281" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          Select desired layout
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleLayoutButtonClick('2_COLUMN_EQUAL')}>2 Column Equal</MenuItem>
          <MenuItem onClick={() => handleLayoutButtonClick('2_COLUMN_WIDE_LEFT')}>2 Column Wide Left</MenuItem>
          <MenuItem onClick={() => handleLayoutButtonClick('2_COLUMN_WIDE_RIGHT')}>2 Column Wide Right</MenuItem>
          <MenuItem onClick={() => handleLayoutButtonClick('3_COLUMN_EQUAL')}>3 Column Equal</MenuItem>
          <MenuItem onClick={() => handleLayoutButtonClick('SINGLE_COLUMN')}>Single Column</MenuItem>
          {/* ... more layout options */}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default LayoutSelector;
