import React from 'react';
import {Box, Drawer} from "@mui/material";
import { FilterList } from './FilterList/FilterList';


type SidebarPropsType = {
  open: boolean
  onClose: (value: boolean) => void
}

export const Sidebar = (props: SidebarPropsType) => {
  return (
    <Drawer
      anchor={'left'}
      open={props.open}
      onClose={props.onClose}
    >
      <Box p={2} width={'250px'} role={'presentation'}>
        <FilterList titleCategory={'Category'} filterList={['notebook', 'mobile', 'tv']}/>
      </Box>
    </Drawer>
  );
};