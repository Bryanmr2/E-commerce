import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Chip from '@mui/material/Chip';
import { getProducts } from '../../lib/api/products';
import { ProductCard } from './productCard';
import { Grid } from '@mui/material';



export const ProductsPage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((resp) => {
            setProducts(resp.response)
        })

    }, [])
    
    return (
        <div>
            <Grid container spacing={2}>
            {products.map((item,index)=>{
                return (
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <ProductCard productData={item} />
                    </Grid>
                )
            })}
            </Grid>
        </div>
    )
}
