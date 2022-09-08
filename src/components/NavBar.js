import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Badge from '@mui/material/Badge';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { CartContext } from '../context/cart-context'
import { useNavigate } from "react-router-dom";

const pages = ["Orders",];

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


const TopBar = ({ children }) => {

    let navigate = useNavigate();

    const { cart } = React.useContext(CartContext)

    return (
        <>
            <HideOnScroll>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: "none", md: "flex" },
                                    fontWeight: 700,
                                    color: "#FFFFFF",
                                    textDecoration: "none",
                                }}
                            >
                                E-commerce Practice
                            </Typography>
                            <AppleIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: "flex", md: "none" },
                                    flexGrow: 1,
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                E-commerce Practice
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                                {pages.map((page, i) => (
                                    <Button
                                        key={i}
                                        sx={{ my: 2, color: "white", display: "block" }}
                                        href={page}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                            <Box onClick={()=> navigate("/cart")} sx={{ flexGrow: 0, cursor: "pointer" }}>
                                <Badge badgeContent={cart.length} color="success">
                                    <ShoppingCartIcon />
                                </Badge>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Container sx={{ mt: 3 }}>
                {children}
            </Container>
        </>
    );
};
export default TopBar;