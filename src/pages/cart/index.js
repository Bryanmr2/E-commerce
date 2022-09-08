import React, { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { Container, flexbox } from '@mui/system';
import { useForm } from '../../hooks/useForm';
import { SelectedProduct } from './selectedProduct';
import { postOrder } from '../../lib/api/orders';

export const CartPage = () => {

    const { cart } = useContext(CartContext)

    const [formValues, handleInputChange] = useForm({
        street_name: "",
        zip_code: "",
        address: "",
        phone: "",
        state: "",
        city: "",
    });

    const sendValues = () => {
        let preCart = cart.map((item,index)=>{
            return {
                product_id: item.id,
                qty: item.qty,
            }
        })
        let preValues = {
            ...formValues,
            zip_code: +formValues.zip_code,
            phone: +formValues.phone,
            product_list: preCart
        }
        postOrder(preValues).then((resp)=>{console.log(resp)})
    }

    return (
        <>
            <Typography variant="h3" sx={{ display: "flex", justifyContent: "center" }}>
                Cart
            </Typography>

            <Paper elevation={1} sx={{ padding: "1em" }}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <TextField fullWidth name='street_name' placeholder="Dirección 1" variant="outlined" onChange={handleInputChange} />
                    </Grid>

                    <Grid item md={6}>
                        <TextField fullWidth name='address' placeholder="Dirección 2" variant="outlined" onChange={handleInputChange} />
                    </Grid>

                    <Grid item md={4}>
                        <TextField fullWidth name='zip_code' placeholder="Código Postal" variant="outlined" onChange={handleInputChange} />
                    </Grid>

                    <Grid item md={4}>
                        <TextField fullWidth name='state' placeholder="Estado" variant="outlined" onChange={handleInputChange} />
                    </Grid>

                    <Grid item md={4}>
                        <TextField fullWidth name='city' placeholder="Ciudad" variant="outlined" onChange={handleInputChange} />
                    </Grid>

                    <Grid item md={12}>
                        <TextField fullWidth name='phone' placeholder="Número de telefono" variant="outlined" onChange={handleInputChange} />
                    </Grid>
                </Grid>
                <Container sx={{ mt: 2 }}>
                    <Typography variant="h5">
                        Productos seleccionados:
                    </Typography>
                    <Grid container spacing={1} direction={"column"}>
                        {cart.map((product) => {
                            return <Grid item>
                                <SelectedProduct product={product}/>
                            </Grid>
                        })}
                    </Grid>
                </Container>
                <Container sx={{ display: "flex", justifyContent: "right", mt: 1 }}>
                    <Button onClick={sendValues} variant="contained"> Confirmar Orden</Button>
                </Container>
            </Paper>
        </>
    )
}
