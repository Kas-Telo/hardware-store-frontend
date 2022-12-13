import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type ProductCardType = {
  _id: string
  category: string
  manufacturer: string
  model: string
  price: number
  rate: number
  smallPhoto: string
}

type ProductCardPropsType = {
  card: ProductCardType
}

export const ProductCard = ({ card }: ProductCardPropsType) => {
  const navigate = useNavigate()

  return (
    <Grid item xs={3} sx={{ height: 450 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          alt={card.category}
          height='140'
          image={card.smallPhoto}
          onClick={() => navigate(`/${card._id}`)}
        />
        <CardContent onClick={() => navigate(`/${card._id}`)}>
          <Typography gutterBottom variant='h5' component='div' mb={2}>
            {`${card.manufacturer} ${card.model}`}
          </Typography>
          <Typography variant='body2' color='text.primary' mb={2}>
            В наличии
          </Typography>
          <Typography variant='h5' component={'div'} color='text.secondary'>
            Цена: {card.price} бел.руб
          </Typography>
        </CardContent>
        <CardActions>
          <Button size={'medium'} onClick={() => alert('Добавлен в Корзину')}>
            В корзину
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}