import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Box } from '@chakra-ui/react';

// Define a type for the menu items
interface CustomDropdownProps {
  buttonLabel: string; // Label for the MenuButton
  menuItems: React.ReactNode[]; // Array of menu items
}

function CustomDropdown({ buttonLabel, menuItems }: CustomDropdownProps) {
    return (
        <Menu>
            <MenuButton as={Box} 
                background="none"
                color="#8C8C8C"
                borderStyle="none"
                borderBottom="2px solid #F0F0F0"
            >
                {buttonLabel}
            </MenuButton>
            <MenuList>
              {menuItems.map((item, index) => (
                <MenuItem as="div" background="none" border="none" key={index}>
                  {item}
                </MenuItem>
              ))}
            </MenuList>
        </Menu>
    );
}
  
export default CustomDropdown;