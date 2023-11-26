import React from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ButtonIcon from './buttonicon';

function CustomDropdown() {
    return (
      <Menu>
        <MenuButton as={Button} 
          background="none"
          color="#8C8C8C"
          borderStyle="none"
          borderBottom="2px solid #F0F0F0"
        >
          Grid
        </MenuButton>
        <MenuList>
          <MenuItem>
            <ButtonIcon icon={<GridViewOutlinedIcon />} text="2 column equal" />
          </MenuItem>
          <MenuItem>2 column wide left</MenuItem>
          {/* Add more MenuItems as needed */}
        </MenuList>
      </Menu>
    );
}
  
export default CustomDropdown;
