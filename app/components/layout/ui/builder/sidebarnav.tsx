import React from "react";
import { Box, VStack, Image } from "@chakra-ui/react";
import ButtonGroup from './buttongroup';
import ComponentsNavigation from './componentdnd';
import CustomDropdown from './componentdnd';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ButtonIcon from './buttonicon';

function Sidebar() {
    // Grid menu items
    const gridMenuItems = [
        <ButtonIcon icon={<GridViewOutlinedIcon />} text="2 Column Equal" type="2_COLUMN_EQUAL" />,
        <ButtonIcon icon={<GridViewOutlinedIcon />} text="2 Column Wide Left" type="2_COLUMN_WIDE_LEFT" />,
        <ButtonIcon icon={<GridViewOutlinedIcon />} text="2 Column Wide Right" type="2_COLUMN_WIDE_RIGHT" />,
        <ButtonIcon icon={<GridViewOutlinedIcon />} text="3 Column Equal" type="3_COLUMN_EQUAL" />,
        <ButtonIcon icon={<GridViewOutlinedIcon />} text="Single Colum" type="SINGLE_COLUMN" />
    ];

    // Banner menu items (example)
    const bannerMenuItems = [
      <ButtonIcon icon={<GridViewOutlinedIcon />} text="Banner" type="BANNER" />,
        // ... more banner items
    ];

    return (
      <Box w="360px" h="100vh" bg="#ffffff" padding="20px">
        <VStack align="stretch" spacing="20px">
          <Image src="/assets/logo.svg" alt="Logo" boxSize="50px" alignSelf="center" />
          <ButtonGroup />
          <CustomDropdown buttonLabel="Grid" menuItems={gridMenuItems} />
          <CustomDropdown buttonLabel="Banner" menuItems={bannerMenuItems} />
        </VStack>
      </Box>
    );
}
  
export default Sidebar;
