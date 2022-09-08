import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useEffect, useState } from 'react';
import {getOrders} from "../../lib/api/orders"
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export const OrderPage = () => {
    
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getOrders().then((resp) => {
            setOrders(resp.response)
        })
    }, [])
    

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.create_date}</TableCell>
                    <TableCell align="right">{row.order_code}</TableCell>
                    <TableCell align="right">{row.products.length}</TableCell>
                    <TableCell align="right">{row.total}</TableCell>
                    <TableCell align="right">{+row.paid ? <CreditScoreIcon color='success'/> : <WarningAmberIcon color='warning'/>  }</TableCell> 
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Products
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Titulo</TableCell>
                                            <TableCell>Categoria</TableCell>
                                            <TableCell align="right">Cantidad</TableCell>
                                            <TableCell align="right">Total</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.products.map((productRow) => (
                                            <TableRow key={productRow.id}>
                                                <TableCell component="th" scope="row">
                                                    {productRow.title}
                                                </TableCell>
                                                <TableCell>{productRow.category}</TableCell>
                                                <TableCell align="right">{productRow.qty}</TableCell>
                                                <TableCell align="right">
                                                    {productRow.total}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }

    return (
        <>
            <Typography variant="h3" sx={{ display: "flex", justifyContent: "center" }}>
                Orders
            </Typography>
            <Paper elevation={1}>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Fecha</TableCell>
                                <TableCell align="right">Código de orden</TableCell>
                                <TableCell align="right">Cantidad de productos</TableCell>
                                <TableCell align="right">Total</TableCell>
                                <TableCell align="right">Pagado</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((item,index)=>{
                                return <Row row={item} />
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    )
}
