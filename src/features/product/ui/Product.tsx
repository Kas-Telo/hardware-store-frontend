import React from 'react'
import { Grid } from '@mui/material'
import { PhotosBlock } from './PhotosBlock/PhotosBlock'
import { DescriptionBlock } from './DiscriptionBlock/DescriptionBlock'
import { SpecificationBlock } from './SpecificationBlock/SpecificationBlock'

export const Product = () => {
  return (
    <Grid container>
      <PhotosBlock />
      <DescriptionBlock />
      <SpecificationBlock />
    </Grid>
  )
}
