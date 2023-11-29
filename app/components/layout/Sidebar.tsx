import React from "react";
import { Box, VStack, Image } from "@chakra-ui/react";
import ButtonGroup from '../ui/GroupButton';
import CustomDropdown from '../builder/ComponentDnD';
import ButtonIcon from '../ui/IconButton';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';


function Sidebar() {
  // Banner menu items (example)
  const bannerMenuItems = [
    <ButtonIcon icon={<GridViewOutlinedIcon />} text="Banner" type="BANNER" />,
    // ... more banner items
  ];

  const heroMenuItems = [
    <ButtonIcon icon={<GridViewOutlinedIcon />} text="Hero" type="HERO" />,
    // ... more hero items
  ];

  return (
    <Box w="360px" h="100vh" bg="#ffffff" padding="20px">
      <VStack align="stretch" spacing="20px">
        <Image src="/assets/logo.svg" alt="Logo" boxSize="50px" alignSelf="center" />
        <ButtonGroup />
        <CustomDropdown buttonLabel="Banner" menuItems={bannerMenuItems} />
        <CustomDropdown buttonLabel="Hero" menuItems={heroMenuItems} />
      </VStack>
    </Box>
  );
}

export default Sidebar;
