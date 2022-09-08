import React from 'react'
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';

export const SelectedProduct = ({product}) => {
    return (
        <Card variant='outlined'>
            <CardContent>
                <Container sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography variant='subtitle1'>{product.title}</Typography>
                    <Typography variant='subtitle1'> Cantidad: {product.qty}</Typography>
                </Container>
            </CardContent>
        </Card>
    )
}
