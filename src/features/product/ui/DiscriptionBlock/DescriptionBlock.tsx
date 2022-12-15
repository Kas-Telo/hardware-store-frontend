import React from 'react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'

export const DescriptionBlock = () => {
  const product = {
    _id: '10',
    category: 'notebook',
    manufacturer: 'Aser',
    model: 'Extence',
    price: 1999,
    rate: 0,
    smallPhoto:
      'https://content2.onliner.by/catalog/device/header/953641b9b802cb8dcac15c0e49836690.jpg',
    description:
      '14.0" 1366 x 768 TN+Film, 60 Гц, несенсорный, Intel Pentium 6805 1100 МГц, 8 ГБ DDR4, SSD 256 ГБ, видеокарта NVIDIA GeForce MX130 2 ГБ, Linux, цвет крышки серый.',
  }
  return (
    <Grid item xs={4.8} sx={{ height: '450px' }}>
      <Paper
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'block', overflowY: 'scroll', m: '16px 0 0 16px' }}>
          <Typography variant={'h5'}>{`${product.manufacturer} ${product.model}`}</Typography>
          <Typography variant={'subtitle2'} component={'p'} mt={2} mb={2}>
            {product.description}
          </Typography>
          <Typography
            variant={'subtitle2'}
            component={'p'}
            sx={{ color: 'lawngreen' }}
            mt={2}
            mb={2}
            fontSize={'16px'}
          >
            В наличии
          </Typography>
          <Typography
            variant={'subtitle2'}
            component={'p'}
            fontSize={'20px'}
          >{`Цена: ${product.price} бел.руб`}</Typography>
          <Typography variant={'subtitle2'} component={'p'} mt={2}>
            {`Внимание! Срок поставки некоторых товаров от 2 до 10 дней.
              Предоставим 14 дней на проверку! Профессиональная консультация!
              Только вежливый и квалифицированный персонал.
              Халва 3 мес, Халва МАХ 6 мес, Черепаха 8 мес, Карта покупок 4 мес, Смарт карта 3 мес, Карта FUN 3 мес, Карта Магнит 2 мес.
              Оформим в кредит до 36мес.`}
          </Typography>
        </Box>
        <Button sx={{ display: 'block' }} fullWidth={true} variant={'contained'}>
          В корзину
        </Button>
      </Paper>
    </Grid>
  )
}
