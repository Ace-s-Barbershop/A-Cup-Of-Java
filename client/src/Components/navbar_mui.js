import * as React from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ListItemIcon from "@mui/material/ListItemIcon";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from '@mui/icons-material/Person2';
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {Grid} from "@mui/material";


//fix navigation and implement logout login function with navvbar and drawer

function ResponsiveAppBar() {

    const [show, setShow] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        isLoggedIn();
    }, []);

    const open = Boolean(anchorEl);
    const handleClickSetting = (event) => {
        if (isVisible) {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const isLoggedIn = () => {
        axios
            .get("http://localhost:5500/api/profile")
            .then((res) => {
                console.log("Is user logged in status: " + res.status);
                console.log(res.data);
                if (res.status === 200) {
                    setIsVisible(true);
                }
            })
            .catch((err) => {
                console.log("err" + err);
                setIsVisible(false);
            });
    };

    const logout = () => {
        axios
            .post("http://localhost:5500/api/logout")
            .then((res) => {
                if (res.status === 200) {
                    window.location = "/";
                }
            })
            .catch((err) => console.log(err));
    };

    const list = () => (
        <Box
            className="sidebar"
            sx={{
                backgroundColor: "transparent",
                opacity: " 0.9",
                height: "100%",
            }}
            zIndex="-1"
        >
            <List>
                <ListItem>
                    <ListItemButton
                        onClick={() => {
                            if (
                                window.location.pathname === "/" ||
                                window.location.pathname === "/home"
                            ) {
                                const anchor = document.querySelector("#home");
                                anchor.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                });
                            } else {
                                window.location.assign("/");
                            }
                        }}
                    >
                        <ListItemIcon>
                            <HomeIcon
                                sx={{
                                    color: "Black",
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton href="/loginPage">
                        <ListItemIcon>
                            <LoginIcon
                                sx={{
                                    color: "Black",
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Login"/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton href="/appointment">
                        <ListItemIcon>
                            <AppRegistrationIcon
                                sx={{
                                    color: "Black",
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Book Appointment"/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton
                        onClick={() => {
                            if (
                                window.location.href === "/" ||
                                window.location.href === "/home"
                            ) {
                                const anchor = document.querySelector("#services-view");
                                anchor.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                });
                            } else {
                                window.location.assign("/#services-view");
                            }
                        }}
                    >
                        <ListItemIcon>
                            <CleaningServicesOutlinedIcon
                                sx={{
                                    color: "Black",
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Services"/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton
                        onClick={() => {
                            if (
                                window.location.href === "/" ||
                                window.location.href === "/home"
                            ) {
                                const anchor = document.querySelector("#contact-infomration");
                                anchor.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                });
                            } else {
                                window.location.assign("/");
                            }
                        }}
                    >
                        <ListItemIcon>
                            <ContactPhoneOutlinedIcon
                                sx={{
                                    color: "Black",
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Contact Information"/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton
                        onClick={() => {
                            if (
                                window.location.href === "/" ||
                                window.location.href === "/home"
                            ) {
                                const anchor = document.querySelector("#about-us");
                                anchor.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                });
                            } else {
                                window.location.assign("/#about-us");
                            }
                        }}
                    >
                        <ListItemIcon>
                            <InfoOutlinedIcon
                                sx={{
                                    color: "Black",
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText primary="About Us"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar
            className="appbar"
            sx={{
                background: "transparent",
                boxShadow: "20",
                backdropFilter: "blur(40px)",
                position: "stactic",
                display: "flex",
            }}
        >
            <Container maxWidth="xl" className="appbar-container">
                <Toolbar variant="regular" className="appbar-toolbar">
                    {/** Logo and home button */}
                    <Grid
                        container
                        direction="row"
                        display={{md: "flex", xs: "flex", sm: "flex"}}
                        justifyContent={{md: "flex-start", xs: "flex-start"}}
                        spacing={0}
                        height="75px"
                        alignItems={{md: "center", xs: "center"}}
                        sx={{
                            width: {xs: "100%", md: "65%", lg: "50%"},
                        }}
                    >
                        <Button
                            elevation={1}
                            size="small"
                            aria-label="menu-button-sidebar"
                            ml={2}
                            mr={5}
                            sx={{
                                color: "white",
                                "&:hover": {
                                    background: "black",
                                    color: "white",
                                },
                            }}
                            onClick={() => {
                                setShow(!show);
                            }}
                        >
                            <MenuIcon/>
                            <Drawer
                                open={show}
                                onClick={() => {
                                    setShow(!show);
                                }}
                            >
                                {list()}
                            </Drawer>
                        </Button>
                        {/** Shows when screen is maximum  */}
                        <Button
                            variant="h5"
                            component="a"
                            onClick={() => {
                                const anchor = document.querySelector("#home");
                                anchor.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                });
                            }}
                            sx={{
                                mr: 1,
                                display: {xs: "none", md: "flex", lg: "flex"},
                                fontFamily: "monospace",
                                fontWeight: 800,
                                letterSpacing: ".1rem",
                                position: "sticky",
                                width: "40%",
                                top: "0px",
                                color: "white",
                                "&:hover": {
                                    color: "white",
                                    backgroundColor: "black",
                                },
                            }}
                        >
                            Ace's BarberShop
                        </Button>
                        {/** Shows when screen is small or extra small  */}
                        <Button
                            variant="h7"
                            component="a"
                            onClick={() => {
                                const anchor = document.querySelector("#home");
                                anchor.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                });
                            }}
                            sx={{
                                display: {xs: "flex", sm: "flex", md: "none"},
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: "3px",
                                color: "white",
                                textDecoration: "none",
                                "&:hover": {
                                    color: "white",
                                    backgroundColor: "black",
                                },
                            }}
                        >
                            <HomeIcon/>
                        </Button>
                    </Grid>
                    {/** Navigation buttons */}
                    <Grid
                        container
                        direction="row"
                        justifyContent={{md: "flex-end", xs: "none"}}
                        display={{md: "flex", xs: "none"}}
                        height="75px"
                        width={{md: "95%", xs: "none"}}
                        alignItems="center"
                        sx={{}}
                    >
                        <Button
                            display={{md: "flex", xs: "none"}}
                            variant="h7"
                            component="a"
                            onClick={() => {
                                const anchor = document.querySelector("#services-view");
                                anchor.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                });
                            }}
                            sx={{
                                mr: 2,
                                display: {xs: "none", md: "flex"},
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                color: "White",
                                textDecoration: "none",
                                "&:hover": {
                                    color: "black",
                                    backgroundColor: "White",
                                },
                            }}
                        >
                            Services
                        </Button>
                        <Button
                            display={{md: "flex", xs: "none"}}
                            variant="h7"
                            component="a"
                            onClick={() => {
                                const anchor = document.querySelector("#barber-information");
                                anchor.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                });
                            }}
                            sx={{
                                mr: 2,
                                display: {xs: "none", md: "flex"},
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                color: "White",
                                textDecoration: "none",
                                "&:hover": {
                                    color: "black !important",
                                    backgroundColor: "White",
                                },
                            }}
                        >
                            Barbers
                        </Button>
                        <Button
                            display={{md: "flex", xs: "none"}}
                            variant="h7"
                            component="a"
                            onClick={() => {
                                const anchor = document.querySelector("#about-us");
                                anchor.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                });
                            }}
                            sx={{
                                mr: 2,
                                display: {xs: "none", md: "flex"},
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                color: "White",
                                textDecoration: "none",
                                "&:hover": {
                                    color: "black !important",
                                    backgroundColor: "White",
                                },
                            }}
                        >
                            About Us
                        </Button>
                        <Button
                            id="basic-button"
                            display={{xs:"none", md:"flex"}}
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClickSetting}
                            disabled={open}
                            variant="h7"
                            component="a"
                            sx={{
                                mr: 0,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                color: "White",
                                textDecoration: "none",
                                "&:hover": {
                                    color: "black !important",
                                    backgroundColor: "White",
                                },
                            }}
                        >
                            <Person2Icon/>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem
                                onClick={handleClose}>Profile</MenuItem>
                            <MenuItem>My account</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </Menu>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        display={{md: "none", xs: "flex", sm: "inline-flex"}}
                        justifyContent={{md: "none", xs: "flex-end"}}
                        spacing={0}
                        height="55px"
                        alignItems={{md: "center", xs: "center"}}
                        sx={{
                            width: {xs: "30%"},
                        }}
                    >
                        <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClickSetting}
                            disabled={open}
                            variant="h7"
                            component="a"
                            sx={{
                                mr: 2,
                                display: {xs: "flex", md: "none"},
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                color: "White",
                                textDecoration: "none",
                                "&:hover": {
                                    color: "black !important",
                                    backgroundColor: "White",
                                },
                            }}
                        >
                           <Person2Icon/>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem
                                onClick={handleClose}>Profile</MenuItem>
                            <MenuItem>My account</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </Menu>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
