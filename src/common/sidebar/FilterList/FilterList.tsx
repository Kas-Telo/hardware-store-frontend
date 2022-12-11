import React from 'react';
import {Checkbox, Divider, FormControlLabel} from "@mui/material";

type FilterListPropsType = {
  titleCategory: string
  filterList: Array<string>
}

export const FilterList = (props: FilterListPropsType) => {
  return (
    <>
      <Divider textAlign={'center'} sx={{fontWeight: 600, fontSize: 20}}>{props.titleCategory}</Divider>
      {props.filterList.map(el => {
        return (
          <div key={el}>
            <FormControlLabel  control={<Checkbox/>} label={el}/>
          </div>
        )
      })}
    </>
  );
};