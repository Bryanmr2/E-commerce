import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Chip from '@mui/material/Chip';
import { CartContext } from '../../context/cart-context';

export const ProductCard = ({productData}) => {
    
    const {addCartItem} = useContext(CartContext)

    const finalPrice = () => {
        return +productData.price - +productData.discount
    }

    const onAddToCart = () => {
        addCartItem(productData)
    }

    return (
        <Card sx={{padding: "1em" }} maxHeight>
            <CardMedia
                component="img"
                height={"250px"}
                image={productData.image_url}
                alt="MacBook"

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{height: "31px", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>
                    {productData.title}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                    {finalPrice()}
                    <Chip label={productData.category} sx={{ ml: ".5em" }} />
                </Typography>
                <Typography variant="body2" color="text.secondary"sx={{height: "60px",  overflow: "hidden", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical"}} >
                    {productData.short_description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button onClick={onAddToCart} size="small" startIcon={<AddCircleIcon />}>Agregar al carrito</Button>
            </CardActions>
        </Card>
    )
}
