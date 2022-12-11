import {Grid} from '@mui/material';
import React from 'react';
import {ProductCard} from "./ProductCard/ProductCard";


export const Catalog = () => {
  const cards = [
    {
      _id: '1',
      category: "notebook",
      manufacturer: "Aser",
      model: "Extence",
      price: 2150,
      rate: 0,
      smallPhoto: 'https://content2.onliner.by/catalog/device/header/953641b9b802cb8dcac15c0e49836690.jpg',
    },
    {
      _id: '2',
      category: "notebook",
      manufacturer: "Aser",
      model: "Extence",
      price: 2100,
      rate: 0,
      smallPhoto: 'https://content2.onliner.by/catalog/device/header/953641b9b802cb8dcac15c0e49836690.jpg',
    },
    {
      _id: '3',
      category: "notebook",
      manufacturer: "Aser",
      model: "Extence",
      price: 2000,
      rate: 0,
      smallPhoto: 'https://content2.onliner.by/catalog/device/header/953641b9b802cb8dcac15c0e49836690.jpg',
    },
    {
      _id: '4',
      category: "notebook",
      manufacturer: "Aser",
      model: "Extence",
      price: 1699,
      rate: 0,
      smallPhoto: 'https://content2.onliner.by/catalog/device/header/953641b9b802cb8dcac15c0e49836690.jpg',
    },
    {
      _id: '5',
      category: "notebook",
      manufacturer: "Aser",
      model: "Extence",
      price: 1995,
      rate: 0,
      smallPhoto: 'https://content2.onliner.by/catalog/device/header/953641b9b802cb8dcac15c0e49836690.jpg',
    },
    {
      _id: '6',
      category: "notebook",
      manufacturer: "Aser",
      model: "Extence",
      price: 2350,
      rate: 0,
      smallPhoto: 'https://content2.onliner.by/catalog/device/header/953641b9b802cb8dcac15c0e49836690.jpg',
    },
    {
      _id: '7',
      category: "notebook",
      manufacturer: "Aser",
      model: "Extence",
      price: 2270,
      rate: 0,
      smallPhoto: 'https://content2.onliner.by/catalog/device/header/953641b9b802cb8dcac15c0e49836690.jpg',
    },
    {
      _id: '8',
      category: "notebook",
      manufacturer: "Aser",
      model: "Extence",
      price: 1289,
      rate: 0,
      smallPhoto: 'https://content2.onliner.by/catalog/device/header/953641b9b802cb8dcac15c0e49836690.jpg',
    },
    {
      _id: '9',
      category: "notebook",
      manufacturer: "Aser",
      model: "Extence",
      price: 1770,
      rate: 0,
      smallPhoto: 'https://content2.onliner.by/catalog/device/header/953641b9b802cb8dcac15c0e49836690.jpg',
    },
    {
      _id: '10',
      category: "notebook",
      manufacturer: "Aser",
      model: "Extence",
      price: 1999,
      rate: 0,
      smallPhoto: 'https://content2.onliner.by/catalog/device/header/953641b9b802cb8dcac15c0e49836690.jpg',
    },
  ]
  return (
    <Grid container spacing={2}>
      {cards.map((el, index) => {
        return <ProductCard key={index} card={el}/>
      })}
    </Grid>
  )
};